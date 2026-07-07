import { site } from "@/lib/site";
import { Resend } from "resend";
import { NextResponse } from "next/server";
import { buildContactEmailHtml } from "./email-template";

const resend = new Resend("re_LW9JwecK_9Xv8uqiwZuCGmCd7JBuWA2zN");

const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, phone, message } = body as Record<string, unknown>;

  if (
    typeof name !== "string" ||
    !name.trim() ||
    typeof email !== "string" ||
    !isValidEmail(email) ||
    typeof message !== "string" ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Missing or invalid fields" }, { status: 400 });
  }

  const safePhone = typeof phone === "string" ? phone.trim() : "";

  const { error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: site.emails[1],
    replyTo: email,
    subject: `Website inquiry from ${name.trim()} | ${site.name}`,
    html: buildContactEmailHtml({
      name: name.trim(),
      email: email.trim(),
      phone: safePhone,
      message: message.trim(),
    }),
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
