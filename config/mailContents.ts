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
                <p>You have received a new registration for the event on <strong>${data.eventDeadline ? deadlineDate : 'TBC'}</strong>.</p>
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
              href="${payload.emailContent.eventPageLink}"
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

const HCD_REGISTRATION = (payload: any) => {
  return `
<html lang="en" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<title></title>

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">

#outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:0;}
</style>

<link href="https://fonts.googleapis.com/css?family=Inter:400,700" rel="stylesheet" type="text/css">

<style type="text/css">

@media only screen and (min-width:890px){.p{width:859px!important;max-width:859px;}.l{width:891px!important;max-width:891px;}.k{width:827px!important;max-width:827px;}}
</style>
<style media="screen and (min-width:890px)">.moz-text-html .p{width:859px!important;max-width:859px;}.moz-text-html .l{width:891px!important;max-width:891px;}.moz-text-html .k{width:827px!important;max-width:827px;}
</style>
<style type="text/css">

@media only screen and (max-width:889px){table.m{width:100%!important;}td.m{width:auto!important;}}
</style>
<style type="text/css">

u+.emailify .g-screen{background:#000;mix-blend-mode:screen;display:inline-block;padding:0;margin:0;}u+.emailify .g-diff{background:#000;mix-blend-mode:difference;display:inline-block;padding:0;margin:0;}p{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;}u+.emailify a{color:inherit!important;text-decoration:none!important;}#MessageViewBody a{color:inherit!important;text-decoration:none!important;}
@media only screen and (max-width:890px){.emailify{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}td.x{padding-left:0!important;padding-right:0!important;}.m img{max-width:100%!important;height:auto!important;}div.r.e>table>tbody>tr>td,div.r.e>div>table>tbody>tr>td{padding-right:16px!important}div.r.ys>table>tbody>tr>td,div.r.ys>div>table>tbody>tr>td{padding-left:16px!important}div.r.d>table>tbody>tr>td,div.r.d>div>table>tbody>tr>td{padding-top:0px!important}div.r.b>table>tbody>tr>td,div.r.b>div>table>tbody>tr>td{padding-right:0px!important}div.r.lz>table>tbody>tr>td,div.r.lz>div>table>tbody>tr>td{padding-bottom:0px!important}div.r.v>table>tbody>tr>td,div.r.v>div>table>tbody>tr>td{padding-left:0px!important}}
</style>
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">

</head>
<body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#ffffff;"><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;</div><div style="background-color:#ffffff;" lang="en" dir="auto">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:859px;">
<![endif]--><div class="p y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:63px;"> <img alt src="https://e.hypermatic.com/573a4a89da6887eaae740367d17b3e7d.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="63" height="auto">
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r d b lz v" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:0;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:891px;">
<![endif]--><div class="l y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;" class="m"><tbody><tr><td style="width:891px;" class="m"> <img alt src="https://e.hypermatic.com/e251c5c25c448a0a7e5de78fbf0db4b2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="891" height="auto">
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);background:#fffffe;background-color:#fffffe;width:100%;" width="100%" bgcolor="#fffffe"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:827px;">
<![endif]--><div class="k y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="x" style="font-size:0;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;"></span><span style="font-size:20px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#010101;line-height:150%;mso-line-height-alt:30px;">Dear ${payload.firstName}</span></p><p style="Margin:0;mso-line-height-alt:30px;"><span style="font-size:20px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#010101;line-height:150%;mso-line-height-alt:30px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Thank you for registering for our upcoming event; </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:150%;mso-line-height-alt:24px;"> "Hyper Converge Database!" </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">  We&#8217;re thrilled to have you join us as we dive into the future of data management, AI-driven solutions, and cutting-edge real-time computing technologies.</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Here are the event details:
<br/>

<b>Date:</b> November 13, 2024 <br/>
<b>Time:</b> 1:00 PM – 4:00 PM <br/>
<b>Venue:</b> Microtel by Wyndham UP Technohub <br/>
<b>Room:</b> Sanggumay Hall <br/>
<b>Address:</b> Commonwealth Avenue, UP Ayala Land Technohub, Quezon City, 1121
</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Stay tuned for more updates and information as we approach the event day. If you have any questions or need assistance in the meantime, feel free to reach out to us at info@southernconvergence.com</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp; <br/> We look forward to seeing you there! </span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Warm regards,</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">The SCTC Team</span></p></div>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
</body>
</html>
  `
} 

const HCD_INVITATION = (payload: any) => {
  return `
<!doctype html>
<html lang="en" dir="auto" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<title></title>
<!--[if !mso]><!-->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!--<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style type="text/css">

#outlook a{padding:0;}body{margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;}table,td{border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt;}img{border:0;height:auto;line-height:100%;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;}p{display:block;margin:0;}
</style>
<!--[if mso]> <noscript><xml><o:OfficeDocumentSettings><o:AllowPNG/><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript>
<![endif]-->
<!--[if lte mso 11]>
<style type="text/css">

.y{width:100% !important;}
</style>
<![endif]-->
<!--[if !mso]><!-->
<link href="https://fonts.googleapis.com/css?family=Inter:700,400" rel="stylesheet" type="text/css">
<!--<![endif]-->
<style type="text/css">

@media only screen and (min-width:890px){.p{width:859px!important;max-width:859px;}.l{width:891px!important;max-width:891px;}.k{width:827px!important;max-width:827px;}}
</style>
<style media="screen and (min-width:890px)">.moz-text-html .p{width:859px!important;max-width:859px;}.moz-text-html .l{width:891px!important;max-width:891px;}.moz-text-html .k{width:827px!important;max-width:827px;}
</style>
<style type="text/css">

@media only screen and (max-width:889px){table.m{width:100%!important;}td.m{width:auto!important;}}
</style>
<style type="text/css">

u+.emailify .g-screen{background:#000;mix-blend-mode:screen;display:inline-block;padding:0;margin:0;}u+.emailify .g-diff{background:#000;mix-blend-mode:difference;display:inline-block;padding:0;margin:0;}p{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}a[x-apple-data-detectors]{color:inherit!important;text-decoration:none!important;}u+.emailify a{color:inherit!important;text-decoration:none!important;}#MessageViewBody a{color:inherit!important;text-decoration:none!important;}
@media only screen and (max-width:890px){.emailify{height:100%!important;margin:0!important;padding:0!important;width:100%!important;}td.x{padding-left:0!important;padding-right:0!important;}.m img{max-width:100%!important;height:auto!important;}td.b td{background-size:cover!important;}div.r.e>table>tbody>tr>td,div.r.e>div>table>tbody>tr>td{padding-right:16px!important}div.r.ys>table>tbody>tr>td,div.r.ys>div>table>tbody>tr>td{padding-left:16px!important}div.r.d>table>tbody>tr>td,div.r.d>div>table>tbody>tr>td{padding-top:0px!important}div.r.bf>table>tbody>tr>td,div.r.bf>div>table>tbody>tr>td{padding-right:0px!important}div.r.lz>table>tbody>tr>td,div.r.lz>div>table>tbody>tr>td{padding-bottom:0px!important}div.r.v>table>tbody>tr>td,div.r.v>div>table>tbody>tr>td{padding-left:0px!important}td.b.xb>table{width:100%!important}td.xb>table>tbody>tr>td>a{display:block!important;width:100%!important;padding-left:0!important;padding-right:0!important;}td.b.xb>table{width:100%!important}td.xb>table>tbody>tr>td{width:100%!important;padding-left:0!important;padding-right:0!important;}}
</style>
<meta name="format-detection" content="telephone=no, date=no, address=no, email=no, url=no">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
<!--[if gte mso 9]>
<style>a:link{mso-style-priority:99;color:inherit;text-decoration:none;}a:visited{mso-style-priority:99;color:inherit;text-decoration:none;}li{margin-left:-1em !important}table,td,p,div,span,ul,ol,li,a,h1,h2,h3,h4,h5,h6{mso-hyphenate:none;}sup,sub{font-size: 100% !important;}
</style>
<![endif]-->
<!--[if mso]>
<style>.c{background: transparent !important; background-color: transparent !important; mso-padding-alt: 0px; !important; padding: 0px !important; border: 0px !important; border-top: 0px !important; border-right: 0px !important; border-bottom: 0px !important; border-left: 0px !important;}
</style>
<![endif]-->
</head>
<body lang="en" link="#DD0000" vlink="#DD0000" class="emailify" style="mso-line-height-rule:exactly;mso-hyphenate:none;word-spacing:normal;background-color:#ffffff;"><div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;">&#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847; &#8199;&#847;
&shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy; &shy;</div><div style="background-color:#ffffff;" lang="en" dir="auto">
<!--[if mso | IE]>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:16px 16px 16px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:859px;">
<![endif]--><div class="p y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;"><tbody><tr><td style="width:63px;"> <img alt src="https://e.hypermatic.com/573a4a89da6887eaae740367d17b3e7d.jpg" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="63" height="auto">
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r d bf lz v" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:0;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:891px;">
<![endif]--><div class="l y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="center" class="xb" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0;" class="m"><tbody><tr><td style="width:891px;" class="m"> <img alt src="https://e.hypermatic.com/e251c5c25c448a0a7e5de78fbf0db4b2.png" style="border:0;display:block;outline:none;text-decoration:none;height:auto;width:100%;font-size:13px;" width="891" height="auto">
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);background:#fffffe;background-color:#fffffe;width:100%;" width="100%" bgcolor="#fffffe"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:32px 32px 32px 32px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:827px;">
<![endif]--><div class="k y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="x" style="font-size:0;padding-bottom:8px;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:30px;"><span style="font-size:26px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#000000;line-height:115%;mso-line-height-alt:30px;">Join Us for a Free Exclusive Event: Hyper Converge Database - A Platform for Cloud Native Data Infrastructure Needs</span></p></div>
</td></tr><tr><td align="left" class="x" style="font-size:0;padding-bottom:0;word-break:break-word;"><div style="text-align:left;"><p style="Margin:0;text-align:left;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Are you ready to transform your enterprise&#8217;s data infrastructure to meet the demands of modern AI Applications? Don&#8217;t miss this </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#020202;line-height:150%;mso-line-height-alt:24px;">free opportunity </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">to explore how DataStax Hyper-Converge Database (HCD) is leading the way in integrating AI capabilities, hybrid cloud environments, and high-performance computing.
<br/>
<br/>
Each company/agency can register up to <b style="color: #000">three attendees</b>  for this exclusive event!
	</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Event Details:</span></span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><ul style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding-left:22px;font-weight:700;Margin-top:0;Margin-bottom:0;mso-line-height-alt:24px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Date: November 13, 2024 </span></li><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Time: 1:00pm - 4:00pm </span></li>
<li style="Margin:0;">

<span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Venue: Microtel by Wyndham UP Technohub</span>
</li>

<li style="Margin:0;">

<span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Address: Commonwealth Avenue UP Ayala Land Technohub, Quezon City, 1121</span>
</li>


</ul>
<p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Event Highlights:</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><ul style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding-left:22px;font-weight:700;Margin-top:0;Margin-bottom:0;mso-line-height-alt:24px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Revolutionize Your Data Management: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Learn how DataStax&#8217;s HCD leverages cutting-edge hyper-converged infrastructure to modernize enterprise data, enabling seamless scalability and elastic resource allocation.</span></li></ul><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><ul style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding-left:22px;font-weight:700;Margin-top:0;Margin-bottom:0;mso-line-height-alt:24px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Optimize Ai Workloads: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Discover how to integrate AI and GenAI applications at scale using HCD&#8217;s cloud-native architecture, which enhances performance and security, whether on-premises or across hybrid cloud environments.</span></li></ul><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><ul style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding-left:22px;font-weight:700;Margin-top:0;Margin-bottom:0;mso-line-height-alt:24px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Real-Time Edge Computing: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Understand how DataStax HCD can power low-latency applications by extending compute power to the edge, perfect for industries relying on real-time data, including 5G edge computing and customer-focused services.</span></li></ul><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><ul style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding-left:22px;font-weight:700;Margin-top:0;Margin-bottom:0;mso-line-height-alt:24px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Hands-On Demos: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Watch live demonstration of HCD&#8217;s intuitive platform, showcasing its seamless integration with enterprise data environments, AI applications, and cloud infrastructure.</span></span></li></ul><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><ul style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#030303;padding-left:22px;font-weight:700;Margin-top:0;Margin-bottom:0;mso-line-height-alt:24px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#030303;line-height:150%;mso-line-height-alt:24px;">Network with Experts: </span><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Engage with industry leaders and peers, exchanging insights on the future of data infrastructure, AI advancements, and the evolution of hyper-converge architectures.</span></span></li></ul><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">By attending this event, you&#8217;ll gain exclusive insights into how DataStax HCD empowers enterprises to mange data more efficiently and scale their AI-driven applications faster than ever before.</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#070707;line-height:150%;mso-line-height-alt:24px;">Why attend?</span></span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#070707;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><ul style="font-size:16px;font-family:'Inter','Arial',sans-serif;line-height:150%;color:#777777;padding-left:22px;font-weight:400;Margin-top:0;Margin-bottom:0;mso-line-height-alt:24px;"><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Learn how to modernize your data infrastructure with hyper-converged technologies</span></span></li><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">See how to scale AI and generative AI workloads for real-time responsiveness</span></li><li style="Margin:0;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">Explore the future of hybrid and edge computing for mission-critical application</span></li></ul><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;">&nbsp;</span></p><p style="Margin:0;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:400;color:#777777;line-height:150%;mso-line-height-alt:24px;"><span style="font-size:16px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#070707;line-height:150%;mso-line-height-alt:24px;">Spaces are limited, so register for free today and secure your spot!</span></span></p></div>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:891px;" width="891"><tr><td style="line-height:0;font-size:0;mso-line-height-rule:exactly;">
<![endif]--><div class="r e ys" style="background:#fffffe;background-color:#fffffe;margin:0px auto;max-width:891px;">
<table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#fffffe;background-color:#fffffe;width:100%;"><tbody><tr><td style="border:none;direction:ltr;font-size:0;padding:20px 16px 20px 16px;text-align:left;">
<!--[if mso | IE]>
<table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td style="vertical-align:middle;width:859px;">
<![endif]--><div class="p y" style="font-size:0;text-align:left;direction:ltr;display:inline-block;vertical-align:middle;width:100%;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border:none;vertical-align:middle;" width="100%"><tbody><tr><td align="left" class="b xb" style="font-size:0;padding:0;word-break:break-word;">
<table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:separate;width:140px;line-height:100%;"><tbody><tr><td align="center" bgcolor="#f19e20" class="c" role="presentation" style="background:#f19e20;border:none;border-radius:60px 60px 60px 60px;cursor:auto;mso-padding-alt:12px 0px 12px 0px;vertical-align:middle;" valign="middle">
<!--[if mso]><v:roundrect style="width:140px;height:41px;v-text-anchor:middle;" arcsize="100%" fill="t" stroke="f" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word"><w:anchorlock/><v:fill type="solid" color="#f19e20"/><v:textbox inset="0,0,0,0"><center>
<![endif]--> <a href="https://southernconvergence.com/register/events/hcd" class="c" style="display:inline-block;width:140px;background-color:#f19e20;color:#ffffff;font-family:'Inter','Arial',sans-serif;font-size:13px;font-weight:normal;line-height:100%;margin:0;text-decoration:none;text-transform:none;padding:12px 0px 12px 0px;mso-padding-alt:0;border-radius:60px 60px 60px 60px;" target="_blank"> <span style="font-size:14px;font-family:'Inter','Arial',sans-serif;font-weight:700;color:#ffffff;line-height:121%;mso-line-height-alt:17px;">Register Here</span></a>
<!--[if mso]></center></v:textbox></v:roundrect>
<![endif]-->
</td></tr></tbody></table>
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]-->
</td></tr></tbody></table></div>
<!--[if mso | IE]>
</td></tr></table>
<![endif]--></div>
</body>
</html>
  `
}

const HCD_REMINDER = (payload: any) => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hyper Converge Database Seminar Invitation</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            overflow: hidden;
            border: 3px solid orange; /* Border color */
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        h3 {
            color: #333;
            text-align: left;
        }
        p {
            color: #666;
            line-height: 1.6;
            text-align: justify;
            margin: 0 0 1em;
        }
        .button-container {
            margin: 20px 0;
        }
        .button {
            background-color: orange;
            color: white;
            padding: 12px 24px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            border-radius: 5px;
            font-size: 16px;
        }
        .footer {
            color: #999;
            font-size: 14px;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="content">
            <p>Dear ${payload.firstname},</p>
            <p>We’re excited to remind you that the Hyper Converge Database Seminar is just around the corner! As we finalize preparations, we kindly ask you to confirm your attendance to ensure your spot.</p>

            <h3>Event Details:</h3>
            <p>
                Date: November 13, 2024<br>
                Time: 1:00 PM – 4:00 PM<br>
                Venue: Microtel by Wyndham UP Technohub<br>
                Room: Sanggumay Hall<br>
                Address: Commonwealth Avenue, UP Ayala Land Technohub, Quezon City, 1121
            </p>

            <p>This event will provide valuable insights into the future of AI-driven data management and real-time computing. It’s a unique opportunity to connect with industry experts and witness live demos of cutting-edge technology.</p>

            <div class="button-container">
                // <a href="https://southernconvergence.com/event-confirmation?app_id=${payload._id}" class="button">Confirm Attendance</a>
                <a href="https://southernconvergence.com/register/events/hcd" class="button">Confirm Attendance</a>
            </div>

            <p>We look forward to seeing you there! If you have any questions, feel free to reach out to us at <a href="mailto:info@southernconvergence.com">info@southernconvergence.com</a>.</p>
        </div>

        <div class="footer">
            <p>Best regards,<br>
            The SCTC Team</p>
        </div>
    </div>
</body>
</html>
  `
}

const HCD_REINVITE = (payload: any) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Invitation</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
        }
        body {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background-color: #f0f4f8;
        }
        .container {
            max-width: 600px;
            width: 90%;
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            border: 2px solid orange;
        }
        .image-container {
            width: 100%;
            height: 180px;
            background-color: #d9e8f6;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 20px;
        }
        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .header {
            font-size: 24px;
            color: #333;
            margin-bottom: 20px;
            font-weight: bold;
        }
        .section-title {
            font-size: 20px;
            color: orange;
            margin: 20px 0 10px;
            text-align: left;
        }
        p {
            color: #555;
            line-height: 1.6;
            margin-bottom: 10px;
            text-align: justify;
        }
        .event-details {
            background: #f9fafb;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            font-weight: 500;
            color: #333;
        }
        .button {
            display: inline-block;
            padding: 12px 25px;
            margin-top: 20px;
            background-color: orange;
            color: #fff;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
        }
        .button:hover {
            background-color: #004c99;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="image-container">
            <img src="https://e.hypermatic.com/e251c5c25c448a0a7e5de78fbf0db4b2.png" alt="Event Banner">
        </div>
        <div class="header">Join Us for a Free Exclusive Event: Hyper Converge Database</div>
        <p>We’re just two weeks away from our free event that could redefine how you approach data management! Join us for a unique experience where we’ll showcase how modern data solutions can empower your business to be more agile, efficient, and prepared for the AI-driven future.</p>
        <p><strong>Each company/agency can register up to three attendees for this exclusive event!</strong></p>
        
        <div class="event-details">
            <p><strong>Date:</strong> November 13, 2024</p>
            <p><strong>Time:</strong> 1:00 PM – 4:00 PM</p>
            <p><strong>Venue:</strong> Microtel by Wyndham UP Technohub</p>
            <p><strong>Address:</strong> Commonwealth Avenue, UP Ayala Land Technohub, Quezon City, 1121</p>
        </div>

        <div class="section-title">What You’ll Experience:</div>
        <p><strong>Transform Data Management:</strong> Learn how HCD can make data handling more flexible and efficient, allowing your business to grow and adapt with ease.</p>
        <p><strong>Boost AI Performance:</strong> Find out how HCD supports large-scale AI, enabling your business to make faster, smarter decisions with predictive insights.</p>
        <p><strong>Real-Time Data on Demand:</strong> Discover how HCD’s edge computing features provide instant data processing, ideal for industries requiring real-time customer insights and analytics.</p>
        <p><strong>Hands-On Demos:</strong> Watch HCD in action through live demonstrations showing how it integrates with existing systems to support AI, cloud, and data management efficiently.</p>
        <p><strong>Network with Experts:</strong> Connect with leaders in data and AI technology, along with peers who are on similar paths toward data innovation.</p>

        <div class="section-title">Why Attend?</div>
        <p><strong>Stay Ahead of Data Trends:</strong> Equip your business with the latest in data management without unnecessary technical complexity.</p>
        <p><strong>Prepare for AI Integration:</strong> Explore how HCD can be a stepping stone toward making your business AI-ready.</p>
        <p><strong>Enhance Responsiveness:</strong> Learn how cloud and edge computing can help your organization respond faster and meet customer needs effectively.</p>
        
        <p><strong>Spaces are limited, so register today to secure your spot!</strong></p>
        <a href="https://southernconvergence.com/register/events/hcd" class="button">Register Now</a>
        
        <p style="margin-top: 20px;">We look forward to seeing you there!</p>
        <p>Best regards,<br>The SCTC Team</p>
    </div>
</body>
</html>
  `
}

export const MAIL_TEMPLATES = {
  CONTACT_US_FORM_TEMPLATE,
  EVENT_REGISTRATION_TEMPLATE,
  DEVJAM_QUEUE_MAIL_TEMPLATE,
  HCD_REGISTRATION,
  HCD_INVITATION,
  HCD_REMINDER,
  HCD_REINVITE
};