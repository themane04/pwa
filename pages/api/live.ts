import { NextApiRequest, NextApiResponse } from "next";
import {faker} from "@faker-js/faker";

export type LiveDataResponse = {
  newsAlert: string
}

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  response.json({
    newsAlert: faker.lorem.sentences({ min: 1, max: 3 }),
  });
}