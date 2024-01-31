import * as parse from "pdf-parse";
import { OpenAIEmbeddings } from "@langchain/openai";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { MemoryVectorStore } from "langchain/vectorstores/memory";

const embeddings = new OpenAIEmbeddings();

const loader = new PDFLoader("data/sample.pdf");

const sampleDocs = await loader.load();

const splitter = new RecursiveCharacterTextSplitter({
  chunkSize: 128,
  chunkOverlap: 0,
});

const splitDocs = await splitter.splitDocuments(sampleDocs);

const vectorstore = new MemoryVectorStore(embeddings);

await vectorstore.addDocuments(splitDocs);

const retrievedDocs = await vectorstore.similaritySearch(
  "What are the contents of the file?",
  4
);

const pageContents = retrievedDocs.map((doc) => doc.pageContent);

console.log(pageContents);

const retriever = vectorstore.asRetriever();

const retrievedDocs2 = await retriever.invoke(
  "What are the contents of the file?"
);

console.log(retrievedDocs2);
