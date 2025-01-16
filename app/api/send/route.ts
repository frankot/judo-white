import { Resend } from "resend";
import { NextResponse } from "next/server";

if (!process.env.RESEND_API_KEY) {
  throw new Error('RESEND_API_KEY is not defined in environment variables');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { formType, firstName, lastName, phone, email, message } =
      await req.json();

    const formTypeLabels = {
      membership: "Zgłoszenie członkowskie",
      camps: "Obozy / półkolonie",
      events: "Wydarzenia klubowe",
    };

    const data = await resend.emails.send({
      from: "JudoDrako <onboarding@resend.dev>",
      to: ["piotr@strus.net.pl"],
      subject: `${formTypeLabels[formType as keyof typeof formTypeLabels]} - ${firstName} ${lastName}`,
      html: `
        <h2>Nowe zgłoszenie</h2>
        <p><strong>Typ formularza:</strong> ${formTypeLabels[formType as keyof typeof formTypeLabels]}</p>
        <p><strong>Imię:</strong> ${firstName}</p>
        <p><strong>Nazwisko:</strong> ${lastName}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <h3>Wiadomość:</h3>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
