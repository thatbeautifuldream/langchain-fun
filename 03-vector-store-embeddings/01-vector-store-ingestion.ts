import "dotenv/config";
import { OpenAIEmbeddings } from "@langchain/openai";
import { similarity } from "ml-distance";

const embeddings = new OpenAIEmbeddings();

// const sampleEmbedding = await embeddings.embedQuery("This is some sample text");

// console.log(sampleEmbedding);

const vector1 = await embeddings.embedQuery(
  "What are vectors useful for in machine learning?"
);
const unrelatedVector = await embeddings.embedQuery(
  "A group of parrots is called a pandemonium."
);

console.log(similarity.cosine(vector1, unrelatedVector));

const similarVector = await embeddings.embedQuery(
  "Vectors are representations of information."
);

console.log(similarity.cosine(vector1, similarVector));
