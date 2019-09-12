'use strict';

function countSameElements(collection) {
  let sameElementArr = [];
  for (let letter of collection) {
    if (!containsLetterDictionary(letter, sameElementArr)) {
      sameElementArr.push({key: letter, count: 0});
    }
    let letterDictionary = getLetterDictionary(letter, sameElementArr);
    letterDictionary.count++;
  }
  return sameElementArr;
}

function containsLetterDictionary(letter, sameElementArr) {
  for (let letterDictionary of sameElementArr) {
    if (letterDictionary.key === letter) {
      return true;
    }
  }
  return false;
}

function getLetterDictionary(letter, sameElementArr) {
  for(let letterDictionary of sameElementArr){
    if(letterDictionary.key === letter){
      return letterDictionary;
    }
  }
  return null;
}
