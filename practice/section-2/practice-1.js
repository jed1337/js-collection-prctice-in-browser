'use strict';

function countSameElements(collection) {
  let sameElementArr = [];
  for (let letter of collection) {
    let letterDictionary = getLetterDictionary(letter, sameElementArr);
    if(letterDictionary != null){
      letterDictionary.count++;
    } else{
      sameElementArr.push({key: letter, count: 1});
    }
  }
  return sameElementArr;
}

function getLetterDictionary(letter, sameElementArr) {
  for(let letterDictionary of sameElementArr){
    if(letterDictionary.key === letter){
      return letterDictionary;
    }
  }
  return null;
}
