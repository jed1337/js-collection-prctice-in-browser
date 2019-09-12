'use strict';

function countSameElements(collection) {
  let sameElementArr = [];
  for (let rawElement of collection) {
    let parsedElement = parse(rawElement);

    let letterDictionary = getLetterDictionary(parsedElement.name, sameElementArr);
    if (letterDictionary != null) {
      letterDictionary.summary+=parsedElement.summary;
    } else {
      sameElementArr.push(parsedElement);
    }
  }
  return sameElementArr;
}

function parse(rawElement) {
  let name = undefined;
  let summary = undefined;

  if(rawElement.includes("-")){
    [name, summary] = rawElement.split("-");
  } else if(rawElement.includes(":")){
    [name, summary] = rawElement.split(":");
  } else if(rawElement.includes("[") && rawElement.includes("]")){
    [name, summary] = rawElement.split("[");
  } else{
    [name, summary] = [rawElement, 1];
  }

  return {name: name, summary: parseInt(summary)};
}

function getLetterDictionary(letter, sameElementArr) {
  for(let letterDictionary of sameElementArr){
    if(letterDictionary.name === letter){
      return letterDictionary;
    }
  }
  return null;
}
