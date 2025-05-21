import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'Kontaktformular <noreply@beste-haarkliniken.de>',
      to: 'kontakt@beste-haarkliniken.de',
      subject: 'Neue Kontaktanfrage von beste-haarkliniken.de',
      text: `
Name: ${name || 'Nicht angegeben'}
E-Mail: ${email}
Nachricht: ${message}
      `,
      reply_to: email,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Ein Fehler ist aufgetreten. Bitte versuche es später erneut.' },
      { status: 500 }
    );
  }
} 