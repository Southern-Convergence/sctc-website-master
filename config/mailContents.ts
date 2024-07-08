const CONTACT_US_FORM_TEMPLATE = (data: any) => {
  return `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Contact Us Submission</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #333;
              }
              .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 10px;
              }
              .header {
                background-color: #FF7B02;
                color: white;
                padding: 10px 0;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                padding: 20px;
              }
              .footer {
                background-color: #f1f1f1;
                text-align: center;
                padding: 10px;
                border-radius: 0 0 10px 10px;
                color: #777;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Contact Us Submission</h2>
              </div>
              <div class="content">
                <p>Dear Admin,</p>
                <p>You have received a new contact us form submission.</p>
                <p><strong>Details:</strong></p>
                <ul>
                  <li><strong>Name:</strong> ${data.name}</li>
                  <li><strong>Email:</strong> ${data.email}</li>
                  <li><strong>Subject:</strong> ${data.subject}</li>
                  <li><strong>Message:</strong> ${data.message}</li>
                </ul>
                <p>Please respond to this inquiry at your earliest convenience.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Southern Convergence Technologies Corporation. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `;
};

const EVENT_REGISTRATION_TEMPLATE = (data: any) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long', // "Monday"
    year: 'numeric', // "2023"
    month: 'long', // "July"
    day: 'numeric', // "24"
  });

  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const deadlineDate = new Date(data.eventDeadline).toLocaleDateString('en-US', {
    weekday: 'long', // "Monday"
    year: 'numeric', // "2024"
    month: 'long', // "July"
    day: 'numeric', // "24"
  });

  return `
        <!DOCTYPE html>
        <html>
          <head>
            <title>Event Registration Submission</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                color: #333;
              }
              .container {
                width: 100%;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                border: 1px solid #ddd;
                border-radius: 10px;
              }
              .header {
                background-color: #4CAF50; /* Green for events */
                color: white;
                padding: 10px 0;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                padding: 20px;
              }
              .footer {
                background-color: #f1f1f1;
                text-align: center;
                padding: 10px;
                border-radius: 0 0 10px 10px;
                color: #777;
                font-size: 12px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>Event Registration Received</h2>
              </div>
              <div class="content">
                <p>Dear Team,</p>
                <p>You have received a new registration for the event on <strong>${deadlineDate}</strong>.</p>
                <p><strong>Event Name:</strong> ${data.eventName}</p>
                <p><strong>Registrant Details:</strong></p>
                <ul>
                  <li><strong>First Name:</strong> ${data.firstName}</li>
                  <li><strong>Surname:</strong> ${data.surname}</li>
                  <li><strong>Company:</strong> ${data.company}</li>
                  <li><strong>Position:</strong> ${data.position}</li>
                  <li><strong>Email:</strong> ${data.email}</li>
                  <li><strong>Phone Number:</strong> ${data.number}</li>
                </ul>
                <p>This form was submitted on <strong>${formattedTime} UTC+8 | ${formattedDate}</strong>.</p>
                <p>Please respond to this registration at your earliest convenience.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Southern Convergence Technologies Corporation. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `;
};

const DEVJAM_QUEUE_MAIL_TEMPLATE = (payload: any) => {
  return `
  <div>
  <table
    align="center"
    role="presentation"
    cellspacing="0"
    cellpadding="0"
    border="0"
    width="600"
    id="mktoContainer"
    style="margin: auto; font-family: Times; font-size: medium; table-layout: fixed;"
  >
    <tbody>
      <tr id="fullwidthBannerModule">
        <td align="center" style="padding: 0;">
          <div id="fullwidthBannerModuleImage01" style="margin: 0;">
            <a
              href="${payload.emailContent.eventRegisterLink}"
              style="color: blue; margin: 0;"
              target="_blank"
              ><img
                src="${payload.emailContent.eventBannerPageLink}"
                width="600"
                style="width: 600px; max-width: 600px; height: auto; margin: auto; display: block;"
                alt="Dev Jam 2024 Banner"
            /></a>
          </div>
        </td>
      </tr>
      <tr id="textBannerCta">
        <td style="padding: 20px 30px;">
          <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto;">
            <tbody>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 10px; line-height: 16px; color: #C2CADF; font-weight: 700;">
                  <p style="margin: 0;">${payload.emailContent.shortHeadline}</p>
                </td>
              </tr>
              <tr>
                <td height="15" style="height: 15px;">&nbsp;</td>
              </tr>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 14px; line-height: 24px;">
                  <p style="margin: 0;">Dear ${payload.firstName},</p>
                </td>
              </tr>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 14px; line-height: 24px;">
                  <p style="margin: 0;">
                    <br />
                    <b>${payload.emailContent.headline}</b>
                  </p>
                </td>
              </tr>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 14px; line-height: 24px;">
                  <p style="margin: 0;">
                    <br />
                    ${payload.emailContent.body}
                  </p>
                </td>
              </tr>
              <tr>
                <td align="left" style="padding: 0; font-family: Verdana; font-size: 14px; line-height: 24px;">
                  <p style="margin: 0;">
                    <br />
                    <p>Best regards,</p>
                    <p>${payload.emailContent.salutation}</p>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr id="footerDarkModule" style="background-color: black;">
        <td dir="ltr" width="100%" style="padding: 20px 30px;">
          <table dir="ltr" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto;">
            <tbody>
              <tr>
                <td align="center" valign="top">
                  <table dir="rtl" role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto;">
                    <tbody>
                      <tr>
                        <th style="font-weight: normal;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto;">
                            <tbody>
                              <tr>
                                <td dir="ltr" valign="top" align="right" style="padding: 0;">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="right" style="margin: 0 auto;">
                                    <tbody>
                                      <tr>
                                        <td width="28" align="left" valign="top">
                                          <a
                                            href="https://www.facebook.com/southernconvergence/"
                                            style="color: blue; margin: 0;"
                                            target="_blank"
                                            ><img
                                              src="https://pages.datastax.com/rs/259-IFZ-779/images/em-ds-white-facebook.png"
                                              width="28"
                                              alt="facebook"
                                              style="width: 28px; height: auto; display: block;"
                                          /></a>
                                        </td>
                                        <td width="14">&nbsp;</td>
                                        <td width="28" align="left" valign="top">
                                          <a
                                            href="https://www.linkedin.com/company/southern-convergence-technologies/?originalSubdomain=ph"
                                            style="color: blue; margin: 0;"
                                            target="_blank"
                                            ><img
                                              src="https://pages.datastax.com/rs/259-IFZ-779/images/em-ds-linkedin-white.png"
                                              width="28"
                                              alt="linkedin"
                                              style="width: 28px; height: auto; display: block;"
                                          /></a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                        <th width="340" style="font-weight: normal;">
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin: 0 auto;">
                            <tbody>
                              <tr>
                                <td dir="ltr" valign="top">
                                  <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: 0 auto;">
                                    <tbody>
                                      <tr>
                                        <td width="110" align="left" valign="top">
                                          <a
                                            href="https://southernconvergence.com"
                                            style="color: blue; margin: 0;"
                                            target="_blank"
                                            ><img
                                              src="https://sctc-buckets.sgp1.cdn.digitaloceanspaces.com/SC-vector.png"
                                              width="110"
                                              alt="Southern Convergence"
                                              style="width: 110px; height: auto; display: block;"
                                          /></a>
                                        </td>
                                        <td width="15">&nbsp;</td>
                                        <td align="left" style="padding: 0; font-family: Verdana; font-size: 10px; line-height: 16px; color: white;">
                                          <p style="margin: 0;">
                                            © 2024 Southern Convergence Technologies Corporation. All rights reserved.
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`;
};

export const MAIL_TEMPLATES = {
  CONTACT_US_FORM_TEMPLATE,
  EVENT_REGISTRATION_TEMPLATE,
  DEVJAM_QUEUE_MAIL_TEMPLATE,
};
