import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { CharacterTextSplitter } from "langchain/text_splitter";

const splitter = RecursiveCharacterTextSplitter.fromLanguage("js", {
  chunkSize: 32,
  chunkOverlap: 0,
});

const code = `function helloWorld() {
console.log("Hello, World!");
}
// Call the function
helloWorld();`;

const splittedCode = await splitter.splitText(code);
console.log(splittedCode);

const characterSplitter = new CharacterTextSplitter({
  chunkSize: 32,
  chunkOverlap: 0,
  separator: " ",
});

const characterSplittedCode = await characterSplitter.splitText(code);
console.log(characterSplittedCode);
