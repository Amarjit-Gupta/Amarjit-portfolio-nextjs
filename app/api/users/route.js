import nodemailer from "nodemailer";
export const POST = async (req) => {
    let { name, email, message } = await req.json();
    // console.log(name,email,message);
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "guptamantu775@gmail.com",
            pass: "xvjucjcqxmtqezra"
        }
    });

    let mailOption = ({
        from: `${name} <${email}>`,
        to: "guptamantu775@gmail.com",
        subject: `You received a message via your portfolio from ${name}`,
        html: `<div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: auto; border-radius: 10px; background-color: #f9f9f9; overflow: hidden;">
    <div style="background-color: #52c956ff; padding: 20px; text-align: center;">
        <h1 style="color: #fff; margin: 0; font-size: 24px;">Portfolio Contact</h1>
    </div>
    <div style="padding: 20px;">
        <h2 style="color: #4CAF50; font-size: 20px;">Hello Amarjit, You got a new message from ${name}</h2>
        <p style="font-size:16px;"><strong>Name:</strong> ${name}</p>
        <p style="font-size:16px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4CAF50; text-decoration: none;">${email}</a></p>
        <p style="font-size:16px;"><strong>Message:</strong></p>
        <p style="font-size:16px;padding: 15px; background-color: #fff; border-left: 5px solid #4CAF50; border-radius: 5px;">${message}</p>
        <p style="text-align: center; margin-top: 20px;">
            <a href="mailto:${email}" style="display: inline-block; padding: 10px 20px; background-color: #4CAF50; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold;">Reply to ${name}</a>
        </p>
    </div>
    <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666;">
        This message was sent from your portfolio contact form.
    </div>
</div>`
    });

    let data = await transporter.sendMail(mailOption);
    return Response.json({ message: "message send successfully", data, status: 200 });
}
