import catalyst from "zcatalyst-sdk-node";

/**
 * receipt: "test@zohocorp.com"
 * subject: "Order Confirmation"
 * content: "Hi, Your order has been confirmed. Thank you for shopping with us. Your order will be delivered within 3-5 business days. Regards, Zylker Bazaar"
 */


export default async function handler(req, res) {
    const { email } = req.query;

    const app = catalyst.initialize(req);
    const { sendMail } = app.email();
    
    let config = {
        from_email: 'zylkershop@zohomail.com', 
        to_email: [email], 
        html_mode: true,
        subject: 'Order Confirmation from Zylker Shop!',
        content: "Hi, Your order has been confirmed. Thank you for shopping with us. Your order will be delivered within 3-5 business days. Regards, Zylker Bazaar"
    };

    try {
        await sendMail(config);
    }catch(err) {
        console.log(err);
        return res.status(400).json({ status: "error", data: "mail not sent!" });
    }
    res.status(200).json({ status: "success", data: "mail sent successfully!"+ email });
}