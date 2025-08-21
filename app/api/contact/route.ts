import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
  region: 'global' | 'us';
  honeypot?: string; // Spam protection
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    
    // Check honeypot field (should be empty)
    if (body.honeypot) {
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }
    
    // Validate required fields
    if (!body.name || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Determine recipient based on region
    const recipient = body.region === 'us' 
      ? process.env.US_CONTACT_EMAIL || 'info@steedoogroup.com'
      : process.env.GLOBAL_CONTACT_EMAIL || 'info@steedoogroup.com';
    
    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Steedoo Group Contact <noreply@steedoogroup.com>',
      to: [recipient],
      reply_to: body.email,
      subject: `[${body.region.toUpperCase()}] Contact Form: ${body.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #37b6ff, #0284c7); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
              .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: 600; color: #475569; margin-bottom: 5px; }
              .value { color: #1e293b; }
              .message { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #37b6ff; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>Region: ${body.region === 'us' ? 'United States' : 'Global/DRC'}</p>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${body.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${body.email}">${body.email}</a></div>
                </div>
                ${body.company ? `
                <div class="field">
                  <div class="label">Company:</div>
                  <div class="value">${body.company}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Subject:</div>
                  <div class="value">${body.subject}</div>
                </div>
                <div class="field">
                  <div class="label">Message:</div>
                  <div class="message">${body.message.replace(/\n/g, '<br>')}</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        New Contact Form Submission
        Region: ${body.region === 'us' ? 'United States' : 'Global/DRC'}
        
        Name: ${body.name}
        Email: ${body.email}
        ${body.company ? `Company: ${body.company}` : ''}
        Subject: ${body.subject}
        
        Message:
        ${body.message}
      `,
    });
    
    if (error) {
      console.error('Email send error:', error);
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}