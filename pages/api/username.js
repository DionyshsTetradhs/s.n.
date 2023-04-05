import { query } from "./db";
import prisma from "./../../lib/prisma.js";

export default async function handler(req, res) {
  if (req.method == "GET") {
    try {
      const key = req?.headers.key;
      const userID = req?.headers.userid;

      const data = await prisma.user.findUnique({
        where: { id: parseInt(userID) },
      });
      console.log(data);
      if (data.id == userID && data.s_key == key) {
        res.status(200).send(data.username);
      }
      // res.status(200).send(data.username);
    } catch (error) {
      console.error(error);
      // res.status(500).json({ error: error.message });
      res.status(500).send("Not authed!");
    }
  }
}
