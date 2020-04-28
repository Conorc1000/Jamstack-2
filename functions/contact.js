require('dotenv').config();

exports.handler = (event, _context, callback) => {

    const mailgun = require('mailgun-js');
    console.log("process.env.MAILGUN_API_KEY", process.env.MAILGUN_API_KEY)

    const mg = mailgun({
        apiKey: process.env.MAILGUN_API_KEY,
        domain: process.env.MAILGUN_DOMAIN,

    })


    const data = JSON.parse(event.body);

    console.log("data", data)

    const email = {
        from: `Conor Campbell <test@gmail.com>`,
        to: `${data.email}`,
        subject: data.subject,
        text: data.body
    }

    mg.messages().send(email, (error, response) => {
        callback(error, {
            statusCode: 200,
            body: JSON.stringify(response)
        })
    })
}