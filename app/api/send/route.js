import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend("re_HZ2HDiec_5ZeQNvSarWHzNuoiD2bERdG9");
export async function POST(req) {
  try {
    const { firstname, lastname, phone, email, message } = await req.json();

    const data = await resend.emails.send({
      from: "Contact <onboarding@resend.dev>",
      to: ["antoin.collignon17@gmail.com"],
      subject: `Nouveau message de ${firstname} ${lastname}`,
      html: `
        <p><strong>Nom:</strong> ${firstname} ${lastname}</p>
        <p><strong>Téléphone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
