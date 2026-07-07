import { site } from "@/lib/site";

type ContactEmailFields = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const buildContactEmailHtml = ({ name, email, phone, message }: ContactEmailFields) => {
  const logoUrl = `${site.url}/logo.png`;
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Not provided");
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `
<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background-color:#F1F5F9;font-family:Arial,Helvetica,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F1F5F9;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 8px 40px rgba(15,23,42,0.08);">
            <tr>
              <td style="height:6px;background:linear-gradient(90deg,#005CA3,#00AADD,#005CA3);font-size:0;line-height:0;">&nbsp;</td>
            </tr>
            <tr>
              <td align="center" style="padding:32px 32px 16px 32px;">
                <img src="${logoUrl}" alt="${escapeHtml(site.name)}" width="220" style="display:block;max-width:220px;height:auto;" />
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px;">
                <h1 style="margin:0 0 4px 0;font-size:20px;line-height:28px;color:#0F172A;font-weight:800;">
                  New Website Inquiry
                </h1>
                <p style="margin:0 0 24px 0;font-size:13px;line-height:20px;color:#64748B;">
                  You received a new message from the contact form on ${escapeHtml(site.url.replace(/^https?:\/\//, ""))}
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E2E8F0;border-radius:12px;">
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #E2E8F0;width:110px;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#94A3B8;vertical-align:top;">Name</td>
                    <td style="padding:16px 20px;border-bottom:1px solid #E2E8F0;font-size:14px;color:#0F172A;vertical-align:top;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #E2E8F0;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#94A3B8;vertical-align:top;">Email</td>
                    <td style="padding:16px 20px;border-bottom:1px solid #E2E8F0;font-size:14px;vertical-align:top;">
                      <a href="mailto:${safeEmail}" style="color:#005CA3;text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px;border-bottom:1px solid #E2E8F0;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#94A3B8;vertical-align:top;">Phone</td>
                    <td style="padding:16px 20px;border-bottom:1px solid #E2E8F0;font-size:14px;color:#0F172A;vertical-align:top;">${safePhone}</td>
                  </tr>
                  <tr>
                    <td style="padding:16px 20px;font-size:12px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;color:#94A3B8;vertical-align:top;">Message</td>
                    <td style="padding:16px 20px;font-size:14px;line-height:22px;color:#0F172A;vertical-align:top;">${safeMessage}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td align="center" style="padding:28px 32px 32px 32px;">
                <a href="mailto:${safeEmail}" style="display:inline-block;background-color:#005CA3;color:#FFFFFF;font-size:13px;font-weight:700;letter-spacing:0.04em;text-transform:uppercase;text-decoration:none;padding:12px 28px;border-radius:10px;">
                  Reply to ${safeName}
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px;background-color:#F8FAFC;border-top:1px solid #E2E8F0;">
                <p style="margin:0;font-size:12px;line-height:18px;color:#94A3B8;text-align:center;">
                  ${escapeHtml(site.legalName)} &middot; ${escapeHtml(site.address.street)}, ${escapeHtml(site.address.locality)}, ${escapeHtml(site.address.countryName)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
};

export { buildContactEmailHtml };
