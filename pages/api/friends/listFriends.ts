import prisma from "./../../../lib/prisma.js";
import {Auth} from "./../../../lib/auth";
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    try {
      const { storedKey, storedUserID} = req.body;
      const authed = await Auth([storedKey, storedUserID]);
      if (authed) {
        const data = await prisma.Friendship.findMany({
          where:{status: "Friend", friend_id: storedUserID },
        })
        res.status(200).send(data);
        }else{
          res.status(401).send("Not authed!");
      }
    } catch (error) {
      console.error(error);
      res.status(500);
    }
  }
}
