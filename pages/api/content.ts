// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const version = +(request.query.version || 1);

  let content = []
  for(let i = 1; i <= 6; i++) {
    faker.seed(version + i);
    content.push(contentEntry(i))
  }

  response.json({
    versionNumber: version,
    content,
  });
}

const contentEntry = function(id: number) {
  return {
    id,
    title: faker.lorem.word({ length: { min: 3, max: 5 }}),
    description: faker.lorem.sentences({ min: 1, max: 3 }),
    text: faker.lorem.paragraphs({ min: 1, max: 3 }),
    creator: faker.person.fullName(),
    creatorAvatar: faker.image.urlPicsumPhotos({
      height: 500,
      width: 500,
    }),
    createdAt: faker.date.past(),
    tags: faker.helpers.arrayElements(['content', 'c1', 'c2'])
  }
}