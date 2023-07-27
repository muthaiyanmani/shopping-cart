import catalyst from "zcatalyst-sdk-node";

/**
 * receipt: "test@zohocorp.com"
 * subject: "Order Confirmation"
 * content: "Hi, Your order has been confirmed. Thank you for shopping with us. Your order will be delivered within 3-5 business days. Regards, Zylker Bazaar"
 */


export default async function handler(req, res) {
    // const { email } = req.query;

    // const app = catalyst.initialize(req);
    
    // const appMail = app.email();
  
    // let config = {
    //     from_email: 'muthaiyan.mb+us@zohotest.com',
    //     to_email: [email],
    //     subject: 'Order Confirmation from Zylker Shop!',
    //     content: "Hi, Your order has been confirmed. Thank you for shopping with us. Your order will be delivered within 3-5 business days. Regards, Zylker Bazaar"
    // };

    // try {
    //     await appMail.sendMail(config);
    // }catch(err) {
    //     return res.status(400).json({ status: "error", data: err });
    // }

    // res.status(200).json({ status: "success", data: "email sent successfully!" });
    return res.status(200).json({ catalyst: globalThis.catalyst, status: "success"});
}