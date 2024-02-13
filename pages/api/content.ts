// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";

export type StaticContentResponse = {
  version: number
  elements: StaticContentElement[]
}

export type StaticContentElement = {
  key: number
  title: string
  description: string
  picture: string
  createdAt: Date
  tags: string[]
}

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const version = +(request.query.version || 1);

  let content: StaticContentElement[] = []
  for(let i = 1; i <= 6; i++) {
    faker.seed(version + i);
    content.push(contentEntry(i))
  }

  response.json({
    version,
    elements: content,
  } as StaticContentResponse);
}

const contentEntry = function(id: number): StaticContentElement  {
  return {
    key: id,
    title: faker.lorem.word({ length: { min: 3, max: 5 }}),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    picture: faker.image.urlPicsumPhotos({
      height: 500,
      width: 500,
    }),
    createdAt: faker.date.past(),
    tags: faker.helpers.arrayElements(['beautiful', 'wonderful', 'cool', 'slay'])
  }
}