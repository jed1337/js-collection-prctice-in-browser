'use strict';

function countSameElements(collection) {
  let sameElementArr = [];
  for (let rawElement of collection) {
    let parsedElement = parse(rawElement);

    let letterDictionary = getLetterDictionary(parsedElement, sameElementArr);
    if (letterDictionary != null) {
      letterDictionary.count+=parsedElement.count;
    } else {
      sameElementArr.push(parsedElement);
    }
  }
  return sameElementArr;
}

function parse(rawElement) {
  let key = undefined;
  let count = undefined;

  if(rawElement.includes("-")){
    [key, count] = rawElement.split("-");
  } else{
    [key, count] = [rawElement, 1];
  }

  return {key: key, count: parseInt(count)};
}

function getLetterDictionary(parsedElement, sameElementArr) {
  for(let letterDictionary of sameElementArr){
    if(letterDictionary.key === parsedElement.key){
      return letterDictionary;
    }
  }
  return null;
}
