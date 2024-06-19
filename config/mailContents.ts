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

export const MAIL_TEMPLATES = {
  CONTACT_US_FORM_TEMPLATE,
  EVENT_REGISTRATION_TEMPLATE,
};
