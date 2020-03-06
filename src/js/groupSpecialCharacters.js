import {getElementById} from "./groupLetters"


export const groupWordsWithSpecialChar = words => {
  const specialCharRegex = /\W|_/g;


  return words.filter(word => specialCharRegex.test(word[0]));
};


export const insertSpecialElements = words => {
  let string = "";
  for (let index = 0; index < words.length; index++) {
    string += `<li>${words[index]}</li>`;
  }

  getElementById("special").lastElementChild.innerHTML = string;
}

export const doubleColumn = elementId => {
  getElementById(elementId).classList.add("doublecolumn");
}