import { NextApiRequest, NextApiResponse } from "next";
import {faker} from "@faker-js/faker";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  response.json({
    description: faker.lorem.sentences({ min: 1, max: 3 }),
  });
}