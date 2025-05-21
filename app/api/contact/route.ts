import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

// Create reusable transporter object using Zoho SMTP transport
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.ZOHO_EMAIL,
    pass: process.env.ZOHO_APP_PASSWORD
  }
});

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Send mail with defined transport object
    await transporter.sendMail({
      from: process.env.ZOHO_EMAIL, // sender address
      to: 'kontakt@beste-haarkliniken.de', // list of receivers
      subject: 'Neue Kontaktanfrage von beste-haarkliniken.de',
      text: `
Name: ${name || 'Nicht angegeben'}
E-Mail: ${email}
Nachricht: ${message}
      `,
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
} 