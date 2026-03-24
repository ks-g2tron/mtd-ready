import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { email, status, income, software, third_party_consent } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const SUPABASE_URL = process.env.SUPABASE_URL
    const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!SUPABASE_URL || !SUPABASE_KEY) {
      console.error('Missing Supabase env vars')
      return NextResponse.json({ error: 'Server config error' }, { status: 500 })
    }

    const res = await fetch(`${SUPABASE_URL}/rest/v1/mtd_leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Prefer': 'return=minimal',
      },
      body: JSON.stringify({
        email,
        status: status || null,
        income: income || null,
        software: software || null,
        third_party_consent: third_party_consent || false,
      }),
    })

    if (!res.ok) {
      const err = await res.text()
      // Duplicate email is fine
      if (res.status === 409 || err.includes('duplicate')) {
        return NextResponse.json({ success: true, duplicate: true })
      }
      console.error('Supabase error:', err)
      return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
