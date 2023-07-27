import { CREDENTIALS } from "@/client/axios.interceptor";
import axios from "axios";

export default async function handler(req, res) { 
    console.log("products api :::", process.pid, process.ppid, {globalThis}, process.uptime());
    const token = req.headers.authorization.split(" ")[1];
    try {
        const { data } = await axios.get("https://www.zohoapis.com/crm/v2/Products", { headers: { Authorization: `Bearer ${token}` } });
        return res.status(200).json({ ...data, status: "success"});
    } catch (err) {
            if(err.response.status === 401) {
                const accessToken = await getAccessToken();
                const { data } = await axios.get("https://www.zohoapis.com/crm/v2/Products", { headers: { Authorization:`Bearer ${accessToken}`}});
                return res.status(200).json({ ...data, token:accessToken, status: "success"});
            }
            return res.status(500).json({ status: "error", data: err });
     }
}

const getAccessToken = async () => {
    const clientId = CREDENTIALS["SELF_CLIENT_CLIENT_ID"];
    const clientSecret = CREDENTIALS["SELF_CLIENT_CLIENT_SECRET"];
    const refreshToken = CREDENTIALS["SELF_CLIENT_REFRESH_TOKEN"];
    const grantType = "refresh_token";
    const queryParams = `refresh_token=${refreshToken}&client_id=${clientId}&client_secret=${clientSecret}&grant_type=${grantType}`;
    const { data } = await axios.post(`https://accounts.zoho.com/oauth/v2/token?${queryParams}`);
    return data?.access_token;
}