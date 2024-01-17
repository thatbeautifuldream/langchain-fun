import "dotenv/config";
import { GithubRepoLoader } from "langchain/document_loaders/web/github";
import ignore from "ignore";

const loader = new GithubRepoLoader(
  "https://github.com/thatbeautifuldream/thatbeautifuldream",
  { recursive: true }
);
const docs = await loader.load();
console.log(docs.slice(0, 3));
