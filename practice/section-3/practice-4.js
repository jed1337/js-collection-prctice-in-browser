'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = countSameElements(collectionA);

  for(let dictionary of collectionC){
    if(objectB.value.includes(dictionary.key)){
      let fullThreeMinusOne = Math.floor(dictionary.count/3);
      dictionary.count-=fullThreeMinusOne;
    }
  }
  return collectionC;
}

function countSameElements(collection) {
  let sameElementArr = [];
  for (let rawElement of collection) {
    let parsedElement = parse(rawElement);

    let letterDictionary = getLetterDictionary(parsedElement.key, sameElementArr);
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
  } else if(rawElement.includes(":")){
    [key, count] = rawElement.split(":");
  } else if(rawElement.includes("[") && rawElement.includes("]")){
    [key, count] = rawElement.split("[");
  } else{
    [key, count] = [rawElement, 1];
  }

  return {key: key, count: parseInt(count)};
}

function getLetterDictionary(letter, sameElementArr) {
  for(let letterDictionary of sameElementArr){
    if(letterDictionary.key === letter){
      return letterDictionary;
    }
  }
  return null;
}
