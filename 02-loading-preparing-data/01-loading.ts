import "dotenv/config";
import { GithubRepoLoader } from "langchain/document_loaders/web/github";
import ignore from "ignore";
import * as parse from "pdf-parse";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const loader = new GithubRepoLoader(
  "https://github.com/thatbeautifuldream/thatbeautifuldream",
  { recursive: true }
);
const docs = await loader.load();
console.log(docs.slice(0, 3));

const pdfLoader = new PDFLoader("./data/sample.pdf");
const samplePdf = await pdfLoader.load();
console.log(samplePdf.slice(0, 5));
