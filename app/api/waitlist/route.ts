import { NextRequest, NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    // Validate input
    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to local file (for development)
    // TODO: Replace with your preferred email service:
    // - Mailchimp: https://mailchimp.com/developer/marketing/api/
    // - ConvertKit: https://developers.convertkit.com/
    // - SendGrid: https://docs.sendgrid.com/
    // - Resend: https://resend.com/docs

    const dataDir = path.join(process.cwd(), 'data')
    const filePath = path.join(dataDir, 'waitlist.json')

    // Create data directory if it doesn't exist
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true })
    }

    // Read existing data or create new array
    let waitlist = []
    if (existsSync(filePath)) {
      const fileContent = await readFile(filePath, 'utf-8')
      waitlist = JSON.parse(fileContent)
    }

    // Check if email already exists
    const emailExists = waitlist.some((entry: any) => entry.email === email)
    if (emailExists) {
      return NextResponse.json(
        { message: 'Already on the waitlist' },
        { status: 200 }
      )
    }

    // Add new entry
    waitlist.push({
      name,
      email,
      timestamp: new Date().toISOString(),
    })

    // Save updated list
    await writeFile(filePath, JSON.stringify(waitlist, null, 2))

    // Optional: Send confirmation email
    // TODO: Integrate with email service to send confirmation

    return NextResponse.json(
      { message: 'Successfully joined the waitlist' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
