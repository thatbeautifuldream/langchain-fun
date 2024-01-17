import * as parse from "pdf-parse";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";

const loader = new PDFLoader("./data/sample.pdf");
const samplePdf = await loader.load();
console.log(samplePdf.slice(0, 5));
