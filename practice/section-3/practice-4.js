'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = countSameElements(collectionA);

  let subtractValue = 1;
  for(let dictionary of collectionC){
    if(objectB.value.includes(dictionary.key)){
      dictionary.count-=subtractValue;
      subtractValue = updateSubtractValue(subtractValue);
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

function updateSubtractValue(subtractValue) {
  subtractValue++;
  if (subtractValue % 4 === 0) {
    subtractValue = 1;
  }
  return subtractValue;
}
