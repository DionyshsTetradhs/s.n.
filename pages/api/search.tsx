import prisma from "./../../lib/prisma.js";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    var posts = [];
    const search = req.body.searchQuery;
    if (search == "") {
      posts = await prisma.Post.findMany({
        take: 9,
      });
    } else if (search.startsWith("user:")) {
      const clean_search = search.substring("user:".length);
      posts = await prisma.Post.findMany({
  take: 9,
 where: {
          username: clean_search,
      },
          orderBy: {
            createdAt: "desc",
          },
      });
    }else{
      posts = await prisma.Post.findMany({
  take: 9,
    orderBy: {
      _relevance: {
        fields: ['description','title'],
        search: search,
        sort: 'desc',
        },
        },
      });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}
