import { create, insertBatch, search } from "@lyrasearch/lyra";
import seedData from './seed_4.json' 

async function testLyraSearch() {
  const db = create({
    schema: {
      _id: "string",
      tags: "string",
      imageUrl: "string",
      category: "string",
    },
  });

  try{
  await insertBatch(db, seedData);
  }
  catch (e){
    console.warn(e)
  }
  const searchResult = search(db, {
    term: "pizza",
    properties: "*",
  });
  console.log(searchResult, 'searchResult')
}

testLyraSearch();
