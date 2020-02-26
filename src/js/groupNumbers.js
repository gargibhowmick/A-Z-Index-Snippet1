import { arrayToString, getElementById } from "./groupLetters";

const revealElement = elementName =>
  document.querySelector(`${elementName}`).classList.remove("hidden");

export const groupWordsWithNumberAsFirstElement = words => {
  words.filter(word => typeof word[0] == "number");
};

export const revealNumberElements = words => {
  if (words.length > 0) revealElements(".number", "#numberGroup");
};

const revealElements = (...elementsToRemove) => {
  elementsToRemove.forEach(element => revealElement(element));
};

export const insertNumberElements = words => {
  let string = "";
  for (let index = 0; index < words.length; index++) {
    string += `<li>${words[index]}</li>`;
  }

  getElementById("numberGroup").lastElementChild.innerHTML = string;
};
