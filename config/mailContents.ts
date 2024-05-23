const REGISTRATION_FORM_TEMPLATE = (data: any) => {
  return `<!DOCTYPE html>
        <html>
          <head>
            <title>New Registration Entry</title>
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
                <h2>New Registration Entry</h2>
              </div>
              <div class="content">
                <p>Dear Admin,</p>
                <p>You have received a new registration entry from the ${data.eventName} event.</p>
                <p><strong>Registrant Details:</strong></p>
                <ul>
                  <li><strong>Name:</strong> ${data.name}</li>
                  <li><strong>Email:</strong> ${data.email}</li>
                  <li><strong>Company:</strong> ${data.company}</li>
                  <li><strong>Position:</strong> ${data.position}</li>
                </ul>
                <p><strong>Event Details:</strong></p>
                <ul>
                  <li><strong>Event Name:</strong> ${data.eventName}</li>
                  <li><strong>Date:</strong> ${data.eventDate}</li>
                  <li><strong>Location:</strong> ${data.eventLocation}</li>
                </ul>
                <p>Please review the details and confirm the registration.</p>
              </div>
              <div class="footer">
                <p>&copy; ${new Date().getFullYear()} Southern Convergence Technologies. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `;
};

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
                <p>&copy; ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
              </div>
            </div>
          </body>
        </html>
      `;
};

export const MAIL_TEMPLATES = {
  REGISTRATION_FORM_TEMPLATE,
  CONTACT_US_FORM_TEMPLATE,
};
