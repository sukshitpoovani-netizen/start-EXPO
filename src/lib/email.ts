import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
}) {
  if (!resend) {
    console.warn("Resend not configured – email skipped:", opts.subject);
    return { id: "skipped" };
  }

  const from =
    process.env.RESEND_FROM_EMAIL ||
    "Startup Expo <onboarding@resend.dev>";

  const { data, error } = await resend.emails.send({
    from,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
  });

  if (error) {
    console.error("Resend error:", error);
    throw new Error(error.message);
  }

  return data;
}

export function registrationConfirmationHtml(data: {
  participantName: string;
  eventName: string;
  ticketNumber: string;
  registrationId: string;
  ticketType: string;
  qrCodeUrl: string;
  eventDate?: string;
  venue?: string;
  spocName?: string;
  spocEmail?: string;
  spocPhone?: string;
  ticketUrl: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Registration Confirmed</title></head>
<body style="font-family: system-ui, sans-serif; background:#f8fafc; margin:0; padding:24px;">
  <div style="max-width:560px; margin:0 auto; background:#fff; border-radius:12px; padding:32px; border:1px solid #e2e8f0;">
    <h1 style="color:#0f172a; font-size:22px; margin:0 0 8px;">You're registered!</h1>
    <p style="color:#64748b; margin:0 0 24px;">${data.eventName}</p>
    <p>Hi <strong>${data.participantName}</strong>,</p>
    <p>Your registration is confirmed. Ticket details:</p>
    <table style="width:100%; border-collapse:collapse; margin:16px 0;">
      <tr><td style="padding:8px 0; color:#64748b;">Ticket</td><td style="padding:8px 0; font-weight:600;">${data.ticketNumber}</td></tr>
      <tr><td style="padding:8px 0; color:#64748b;">Category</td><td style="padding:8px 0;">${data.ticketType}</td></tr>
      <tr><td style="padding:8px 0; color:#64748b;">Reg ID</td><td style="padding:8px 0;">${data.registrationId}</td></tr>
      ${data.eventDate ? `<tr><td style="padding:8px 0; color:#64748b;">Date</td><td style="padding:8px 0;">${data.eventDate}</td></tr>` : ""}
      ${data.venue ? `<tr><td style="padding:8px 0; color:#64748b;">Venue</td><td style="padding:8px 0;">${data.venue}</td></tr>` : ""}
    </table>
    ${data.qrCodeUrl ? `<p style="text-align:center;"><img src="${data.qrCodeUrl}" alt="QR Code" width="200" height="200" style="border-radius:8px;"/></p>` : ""}
    <p style="text-align:center; margin-top:24px;">
      <a href="${data.ticketUrl}" style="display:inline-block; background:#f59e0b; color:#0f172a; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:600;">View Ticket</a>
    </p>
    ${data.spocName ? `<p style="margin-top:24px; color:#64748b; font-size:14px;">Your contact: <strong>${data.spocName}</strong>${data.spocEmail ? ` · ${data.spocEmail}` : ""}${data.spocPhone ? ` · ${data.spocPhone}` : ""}</p>` : ""}
  </div>
</body>
</html>`;
}
