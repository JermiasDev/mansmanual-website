# Promo Code System Implementation Guide

## Overview

This document explains how to implement a promo code/coupon system in your Man's Manual iOS app to support the referral program and future promotional campaigns.

## System Requirements

### What You Need to Track

1. **Promo Codes** (in your database)
   - Code (e.g., "FOUNDER3REFS")
   - Type (e.g., "FREE_MONTH", "DISCOUNT_PERCENT", "DISCOUNT_AMOUNT")
   - Value (e.g., 1 month, 50%, $10)
   - Usage limits (single-use, multi-use, total redemptions)
   - Expiration date
   - Status (active, expired, used)

2. **User Redemptions** (tracking who used what)
   - User ID
   - Promo code
   - Redemption date
   - Status (applied, used, expired)

## Database Schema

### Promo Codes Table

```sql
CREATE TABLE promo_codes (
    id VARCHAR(36) PRIMARY KEY,
    code VARCHAR(50) UNIQUE NOT NULL,
    type ENUM('FREE_MONTH', 'FREE_MONTHS', 'DISCOUNT_PERCENT', 'DISCOUNT_AMOUNT') NOT NULL,
    value INT NOT NULL, -- months for free, percentage, or dollar amount in cents
    description TEXT,
    usage_type ENUM('SINGLE_USE', 'MULTI_USE', 'UNLIMITED') DEFAULT 'SINGLE_USE',
    max_redemptions INT DEFAULT 1,
    current_redemptions INT DEFAULT 0,
    expires_at DATETIME,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

CREATE TABLE user_promo_redemptions (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    promo_code_id VARCHAR(36) NOT NULL,
    code VARCHAR(50) NOT NULL,
    redeemed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    applied_to_subscription_id VARCHAR(255), -- RevenueCat subscription ID
    status ENUM('PENDING', 'APPLIED', 'USED', 'EXPIRED') DEFAULT 'PENDING',
    months_credited INT DEFAULT 0,
    FOREIGN KEY (promo_code_id) REFERENCES promo_codes(id),
    UNIQUE KEY unique_user_code (user_id, promo_code_id)
);
```

## Implementation Steps

### 1. Backend API Endpoints

You'll need these API endpoints:

#### Validate Promo Code
```
POST /api/promo-codes/validate
Body: { "code": "FOUNDER3REFS" }
Response: {
  "valid": true,
  "code": "FOUNDER3REFS",
  "type": "FREE_MONTH",
  "value": 1,
  "description": "1 free month for referring 3 friends"
}
```

#### Redeem Promo Code
```
POST /api/promo-codes/redeem
Headers: { "Authorization": "Bearer USER_TOKEN" }
Body: { "code": "FOUNDER3REFS" }
Response: {
  "success": true,
  "redemption_id": "abc123",
  "months_credited": 1,
  "message": "Code redeemed! 1 month added to your subscription."
}
```

#### Check User's Redeemed Codes
```
GET /api/users/me/promo-codes
Headers: { "Authorization": "Bearer USER_TOKEN" }
Response: {
  "codes": [
    {
      "code": "FOUNDER3REFS",
      "redeemed_at": "2026-01-15T10:30:00Z",
      "status": "APPLIED",
      "months_credited": 1
    }
  ]
}
```

### 2. iOS App Implementation

#### A. Create Promo Code Model

```swift
// PromoCode.swift
struct PromoCode: Codable {
    let code: String
    let type: PromoCodeType
    let value: Int
    let description: String
}

enum PromoCodeType: String, Codable {
    case freeMonth = "FREE_MONTH"
    case freeMonths = "FREE_MONTHS"
    case discountPercent = "DISCOUNT_PERCENT"
    case discountAmount = "DISCOUNT_AMOUNT"
}

struct PromoRedemption: Codable {
    let redemptionId: String
    let code: String
    let redeemedAt: Date
    let status: String
    let monthsCredited: Int
}
```

#### B. Create Promo Code Service

```swift
// PromoCodeService.swift
class PromoCodeService {
    static let shared = PromoCodeService()
    private let baseURL = "YOUR_API_URL"

    // Validate promo code
    func validateCode(_ code: String) async throws -> PromoCode {
        let url = URL(string: "\(baseURL)/api/promo-codes/validate")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")

        let body = ["code": code]
        request.httpBody = try JSONEncoder().encode(body)

        let (data, response) = try await URLSession.shared.data(for: request)

        guard let httpResponse = response as? HTTPURLResponse,
              httpResponse.statusCode == 200 else {
            throw PromoCodeError.invalidCode
        }

        let result = try JSONDecoder().decode(PromoCode.self, from: data)
        return result
    }

    // Redeem promo code
    func redeemCode(_ code: String, userToken: String) async throws -> PromoRedemption {
        let url = URL(string: "\(baseURL)/api/promo-codes/redeem")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.setValue("Bearer \(userToken)", forHTTPHeaderField: "Authorization")

        let body = ["code": code]
        request.httpBody = try JSONEncoder().encode(body)

        let (data, response) = try await URLSession.shared.data(for: request)

        guard let httpResponse = response as? HTTPURLResponse,
              httpResponse.statusCode == 200 else {
            throw PromoCodeError.redemptionFailed
        }

        let result = try JSONDecoder().decode(PromoRedemption.self, from: data)
        return result
    }

    // Get user's redeemed codes
    func getUserPromoCodes(userToken: String) async throws -> [PromoRedemption] {
        let url = URL(string: "\(baseURL)/api/users/me/promo-codes")!
        var request = URLRequest(url: url)
        request.setValue("Bearer \(userToken)", forHTTPHeaderField: "Authorization")

        let (data, _) = try await URLSession.shared.data(for: request)
        let response = try JSONDecoder().decode(PromoCodesResponse.self, from: data)
        return response.codes
    }
}

enum PromoCodeError: Error {
    case invalidCode
    case alreadyUsed
    case expired
    case redemptionFailed
}
```

#### C. Create Promo Code UI Screen

```swift
// PromoCodeView.swift
import SwiftUI

struct PromoCodeView: View {
    @State private var promoCode: String = ""
    @State private var isValidating = false
    @State private var showSuccess = false
    @State private var showError = false
    @State private var errorMessage = ""
    @State private var redemption: PromoRedemption?

    var body: some View {
        VStack(spacing: 20) {
            Text("Enter Promo Code")
                .font(.title2)
                .fontWeight(.bold)

            Text("Have a referral code or promotional offer? Enter it here.")
                .font(.subheadline)
                .foregroundColor(.secondary)
                .multilineTextAlignment(.center)

            // Promo code input
            TextField("Enter code", text: $promoCode)
                .textFieldStyle(RoundedBorderTextFieldStyle())
                .autocapitalization(.allCharacters)
                .disableAutocorrection(true)
                .padding(.horizontal)

            // Apply button
            Button(action: redeemPromoCode) {
                if isValidating {
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: .white))
                } else {
                    Text("Apply Code")
                        .fontWeight(.semibold)
                }
            }
            .frame(maxWidth: .infinity)
            .padding()
            .background(promoCode.isEmpty ? Color.gray : Color.green)
            .foregroundColor(.white)
            .cornerRadius(10)
            .disabled(promoCode.isEmpty || isValidating)
            .padding(.horizontal)

            if showSuccess, let redemption = redemption {
                VStack(spacing: 10) {
                    Image(systemName: "checkmark.circle.fill")
                        .font(.system(size: 50))
                        .foregroundColor(.green)

                    Text("Code Redeemed!")
                        .font(.title3)
                        .fontWeight(.bold)

                    Text("You've earned \(redemption.monthsCredited) free \(redemption.monthsCredited == 1 ? "month" : "months")!")
                        .foregroundColor(.secondary)
                }
                .padding()
                .background(Color.green.opacity(0.1))
                .cornerRadius(10)
                .padding(.horizontal)
            }

            if showError {
                HStack {
                    Image(systemName: "exclamationmark.triangle.fill")
                        .foregroundColor(.red)
                    Text(errorMessage)
                        .font(.subheadline)
                        .foregroundColor(.red)
                }
                .padding()
                .background(Color.red.opacity(0.1))
                .cornerRadius(10)
                .padding(.horizontal)
            }

            Spacer()
        }
        .padding()
    }

    func redeemPromoCode() {
        isValidating = true
        showError = false
        showSuccess = false

        Task {
            do {
                // Get user token (however you manage auth in your app)
                guard let userToken = AuthManager.shared.userToken else {
                    throw PromoCodeError.redemptionFailed
                }

                // Redeem the code
                let result = try await PromoCodeService.shared.redeemCode(
                    promoCode.uppercased(),
                    userToken: userToken
                )

                redemption = result
                showSuccess = true
                promoCode = ""

                // Update RevenueCat subscription if needed
                await updateRevenueCatSubscription(monthsToAdd: result.monthsCredited)

            } catch PromoCodeError.invalidCode {
                errorMessage = "Invalid promo code. Please check and try again."
                showError = true
            } catch PromoCodeError.alreadyUsed {
                errorMessage = "This code has already been used."
                showError = true
            } catch PromoCodeError.expired {
                errorMessage = "This code has expired."
                showError = true
            } catch {
                errorMessage = "Failed to redeem code. Please try again."
                showError = true
            }

            isValidating = false
        }
    }

    func updateRevenueCatSubscription(monthsToAdd: Int) async {
        // TODO: Update RevenueCat to apply the free months
        // This might involve:
        // 1. Storing the credit in your backend
        // 2. Applying it when the user's subscription renews
        // 3. Or using RevenueCat's promotional offers
    }
}
```

#### D. Add to Settings/Profile

```swift
// In your SettingsView.swift or ProfileView.swift
NavigationLink(destination: PromoCodeView()) {
    HStack {
        Image(systemName: "gift.fill")
            .foregroundColor(.green)
        Text("Redeem Promo Code")
        Spacer()
        Image(systemName: "chevron.right")
            .foregroundColor(.gray)
    }
}
```

### 3. Integration with RevenueCat

Since you're using RevenueCat for subscriptions, you have two options:

#### Option A: Store Credits in Your Backend

When a user redeems a promo code:
1. Store the credit in your database
2. When their subscription renews, check if they have credits
3. If yes, skip charging for that period (or handle through RevenueCat webhooks)

#### Option B: Use RevenueCat Promotional Offers

RevenueCat supports iOS promotional offers. You can:
1. Create an offer in App Store Connect (e.g., "1 month free")
2. When user redeems promo code, present the RevenueCat offer
3. RevenueCat handles the billing automatically

```swift
// Using RevenueCat promotional offers
import RevenueCat

func applyPromoOffer(monthsFree: Int) async {
    do {
        // Get the current offering
        let offerings = try await Purchases.shared.offerings()
        guard let package = offerings.current?.monthly else { return }

        // Get the promotional offer (configured in App Store Connect)
        let discount = package.storeProduct.discounts.first { discount in
            discount.numberOfPeriods == monthsFree
        }

        if let discount = discount {
            // Present the promotional offer
            let result = try await Purchases.shared.purchase(package: package,
                                                            promotionalOffer: discount)
            // Handle purchase result
        }
    } catch {
        print("Error applying promo offer: \(error)")
    }
}
```

## Promo Code Generation

### For Referral Program

When a user reaches 3 referrals:

```javascript
// Backend: Generate unique promo code
function generateReferralPromoCode(userId, referralCount) {
  // Format: FOUNDER-{first3ofuserid}-{timestamp}
  const code = `FOUNDER-${userId.substring(0, 3).toUpperCase()}-${Date.now().toString(36).toUpperCase()}`;

  // Store in database
  db.promoCodes.create({
    id: uuid(),
    code: code,
    type: 'FREE_MONTH',
    value: 1,
    description: `Referral reward: ${referralCount} friends referred`,
    usage_type: 'SINGLE_USE',
    max_redemptions: 1,
    expires_at: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
    is_active: true
  });

  // Email the code to the user
  sendEmail({
    to: user.email,
    subject: "🎉 You've Earned a Free Month!",
    body: `
      Congratulations! You've referred 3 friends to Man's Manual.

      Your promo code: ${code}

      Redeem this in the app (Settings > Promo Code) for 1 free month!

      This code expires in 1 year and can only be used once.
    `
  });

  return code;
}
```

### For Marketing Campaigns

```javascript
// Create promo codes for campaigns
function createCampaignPromoCode(campaign) {
  return {
    code: "LAUNCH50", // Easy to remember
    type: "DISCOUNT_PERCENT",
    value: 50,
    description: "Launch campaign: 50% off first month",
    usage_type: "MULTI_USE",
    max_redemptions: 1000,
    expires_at: new Date("2026-02-01"),
    is_active: true
  };
}
```

## Testing Checklist

- [ ] User can validate a promo code
- [ ] User can redeem a valid promo code
- [ ] User cannot redeem the same code twice
- [ ] User cannot redeem an expired code
- [ ] User cannot redeem an invalid code
- [ ] Promo code credits are applied to subscription
- [ ] User can view their redeemed codes
- [ ] Backend tracks redemption count correctly
- [ ] Email is sent when user earns a code (3 referrals)

## Example Promo Codes to Create

### For Referral Program
```sql
-- Generated dynamically when user hits 3 referrals
-- Format: FOUNDER-ABC-XYZ123
INSERT INTO promo_codes VALUES (
  uuid(),
  'FOUNDER-ABC-XYZ123',
  'FREE_MONTH',
  1,
  'Referral reward: 3 friends referred',
  'SINGLE_USE',
  1,
  0,
  DATE_ADD(NOW(), INTERVAL 1 YEAR),
  NOW(),
  TRUE
);
```

### For Testing
```sql
-- Test code for development
INSERT INTO promo_codes VALUES (
  uuid(),
  'TEST-FREE-MONTH',
  'FREE_MONTH',
  1,
  'Test code for development',
  'MULTI_USE',
  999,
  0,
  DATE_ADD(NOW(), INTERVAL 1 YEAR),
  NOW(),
  TRUE
);
```

## Email Templates

### Referral Milestone Email

**Subject**: 🎉 You've Earned a Free Month of Man's Manual!

**Body**:
```
Hi [Name],

Congratulations! You've successfully referred 3 friends to Man's Manual's waitlist, and we want to reward you!

Your Promo Code: FOUNDER-[CODE]

How to Redeem:
1. Download Man's Manual when it launches (we'll email you)
2. Subscribe to Premium
3. Go to Settings > Promo Code
4. Enter your code
5. Enjoy 1 free month!

This code:
✓ Never expires
✓ Can be used once
✓ Works with both monthly and yearly subscriptions

Thank you for being an awesome founding member and helping us grow!

Keep sharing your referral link to help more men discover Man's Manual:
[REFERRAL_LINK]

- The Man's Manual Team

---
Man's Manual LLC
mansmanualapp@gmail.com
```

## Security Best Practices

1. **Rate Limiting**: Limit promo code validation attempts (e.g., 10 per hour per user)
2. **Code Format**: Use uppercase, alphanumeric, easy to type
3. **Expiration**: Always set expiration dates
4. **Single-Use**: Referral codes should be single-use
5. **Audit Trail**: Log all redemptions with timestamps and user IDs
6. **Prevent Abuse**: Check for patterns of abuse (same IP, fake accounts)

## Future Enhancements

- **Stacking Rules**: Can users use multiple promo codes?
- **Percentage Discounts**: Add support for 25% off, 50% off codes
- **Time-Limited Codes**: "Valid only for first week of launch"
- **User-Specific Codes**: Influencer codes that track conversions
- **Admin Dashboard**: View analytics on promo code usage

---

**This promo code system will power your referral program and support future marketing campaigns!**
