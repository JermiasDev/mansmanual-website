# Referral Program Summary

## Simplified Structure

**One Simple Goal**: Refer 3 friends → Get 1 free month

## How It Works

### For Users

1. **Join Waitlist** → User receives unique referral link via email
2. **Share Link** → User shares with 3 friends
3. **Friends Join** → When all 3 join the waitlist using the link
4. **Get Promo Code** → User receives promo code via email (e.g., `FOUNDER-ABC-XYZ123`)
5. **Redeem in App** → After subscribing, user enters code in Settings → 1 free month applied

### For You (Implementation)

1. **Waitlist Service** → Tracks referrals automatically
2. **Backend Logic** → When user hits 3 referrals, generate unique promo code
3. **Email Automation** → Send promo code email to user
4. **iOS App** → Implement promo code redemption screen
5. **RevenueCat Integration** → Apply free month to subscription

## Why This Simple Structure?

✅ **Easy to Understand** - One clear goal: 3 referrals
✅ **Easy to Implement** - Single tier means simpler code
✅ **Clear Value** - Users know exactly what they get
✅ **Scalable** - Can add more tiers later if needed
✅ **Trackable** - Simple to measure success

## Technical Requirements

### Must Have

1. **Waitlist Service** (Waitlist API, ConvertKit, etc.)
   - Tracks referral links
   - Counts successful signups per referrer
   - Sends webhook when milestone reached

2. **Promo Code System** in your iOS app
   - Database to store codes
   - API to validate/redeem codes
   - UI screen for code entry
   - Integration with RevenueCat

3. **Email Automation**
   - Send promo code when 3 referrals reached
   - Include redemption instructions

### Documentation Provided

📄 **[PROMO_CODE_SYSTEM.md](PROMO_CODE_SYSTEM.md)** - Complete implementation guide:
- Database schema
- API endpoints
- iOS code examples (Swift/SwiftUI)
- RevenueCat integration
- Email templates
- Security best practices

📄 **[WAITLIST_IMPLEMENTATION.md](WAITLIST_IMPLEMENTATION.md)** - Waitlist strategy:
- Complete waitlist page
- Referral mechanics
- Email flows
- Analytics to track

## Promo Code Format

**Example**: `FOUNDER-ABC-XYZ123`

- **FOUNDER** - Identifies as referral reward
- **ABC** - First 3 chars of user ID (for uniqueness)
- **XYZ123** - Timestamp encoded (prevents guessing)

**Properties**:
- Type: FREE_MONTH
- Value: 1 month
- Usage: Single-use (one-time redemption)
- Expiration: Never (or 1 year if you prefer)

## Email Flow

### Email 1: Welcome to Waitlist
```
Subject: Welcome to Man's Manual Founder's Circle! 🎉

Your referral link: https://mansmanual.com/waitlist?ref=USER123

Share with 3 friends and earn a free month!
```

### Email 2: 3 Referrals Reached
```
Subject: 🎉 You've Earned a Free Month!

Your Promo Code: FOUNDER-ABC-XYZ123

Redeem in the app (Settings > Promo Code) for 1 free month!
```

### Email 3: App Launch
```
Subject: Man's Manual is Live! 📱

Download now and redeem your promo code if you earned one!
```

## iOS App Implementation

### Settings Screen Addition

Add new row in Settings:
```
Settings
├── Account
├── Notifications
├── **Promo Code** ← NEW
├── About
└── Logout
```

### Promo Code Screen

User sees:
- Input field for code
- "Apply Code" button
- Success/error messages
- List of previously redeemed codes

### After Redemption

User sees confirmation:
- "Code Redeemed! ✓"
- "1 free month added to your subscription"
- Code shows in "Redeemed Codes" list

## Success Metrics

Track these to measure effectiveness:

### Referral Metrics
- **Referral Rate**: % of waitlist users who share their link
- **Conversion Rate**: % of referral clicks that result in signups
- **Viral Coefficient**: Average # of referrals per user
  - Target: 1.5+ (each user brings 1.5 others)
- **3-Referral Rate**: % of users who hit 3 referrals

### Code Metrics
- **Codes Issued**: Total promo codes sent
- **Codes Redeemed**: % of codes actually used
- **Redemption Time**: Days between issue and redemption

### Business Impact
- **CAC Reduction**: Lower customer acquisition cost via referrals
- **Lifetime Value**: Do referred users stay longer?
- **Viral Growth**: Week-over-week waitlist growth rate

## Next Steps

### Week 1: Setup
- [ ] Choose waitlist service (Waitlist API recommended)
- [ ] Set up API endpoints for promo codes
- [ ] Create email templates
- [ ] Test referral tracking

### Week 2: Development
- [ ] Build iOS promo code screen
- [ ] Integrate with backend API
- [ ] Connect to RevenueCat
- [ ] Test end-to-end flow

### Week 3: Testing
- [ ] Create test promo codes
- [ ] Test redemption flow
- [ ] Test referral tracking
- [ ] Fix any bugs

### Week 4: Launch
- [ ] Deploy waitlist page
- [ ] Start marketing campaign
- [ ] Monitor analytics
- [ ] Respond to issues

## FAQs for Users

**Q: Can I refer more than 3 friends?**
A: Yes! But you'll only receive one promo code. We may add more tiers in the future.

**Q: Do my friends need to subscribe for me to get the reward?**
A: No! They just need to join the waitlist. Your promo code is earned when 3 friends join.

**Q: When can I use my promo code?**
A: After the app launches and you subscribe to Premium. The code gives you 1 free month.

**Q: Does my promo code expire?**
A: No, it never expires. Use it whenever you're ready to subscribe.

**Q: Can I share my promo code with others?**
A: No, each promo code is single-use and tied to your account. But you can keep sharing your referral link!

## Support

For implementation help:
- **Technical Questions**: See [PROMO_CODE_SYSTEM.md](PROMO_CODE_SYSTEM.md)
- **Strategy Questions**: See [WAITLIST_IMPLEMENTATION.md](WAITLIST_IMPLEMENTATION.md)
- **Contact**: mansmanualapp@gmail.com

---

**Simple, effective, and ready to scale!**
