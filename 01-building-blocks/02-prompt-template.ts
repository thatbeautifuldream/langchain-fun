import { ChatPromptTemplate } from "@langchain/core/prompts";
import {
  SystemMessagePromptTemplate,
  HumanMessagePromptTemplate,
} from "@langchain/core/prompts";

const prompt = ChatPromptTemplate.fromTemplate(
  `What are three good names for a company that makes {product}?`
);

const phoneCompaniesPrompt = await prompt.format({
  product: "phones",
});
console.log(phoneCompaniesPrompt);

const formatPhoneCompaniesPrompt = await prompt.formatMessages({
  product: "phones",
});
console.log(formatPhoneCompaniesPrompt);

const promptFromMessages = ChatPromptTemplate.fromMessages([
  SystemMessagePromptTemplate.fromTemplate(
    "You are an expert at picking company names."
  ),
  HumanMessagePromptTemplate.fromTemplate(
    "What are three good names for a company that makes {product}?"
  ),
]);

const phoneCompaniesPromptFromMessages =
  await promptFromMessages.formatMessages({
    product: "phones",
  });

console.log(phoneCompaniesPromptFromMessages);
