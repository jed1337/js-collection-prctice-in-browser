'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let updatedCollection = Array.from(collectionA);

  for(let dictionary of collectionA){
    if(objectB.value.includes(dictionary.key)){
      let fullThreeMinusOne = Math.floor(dictionary.count/3);
      dictionary.count-=fullThreeMinusOne;
    }
  }
  return updatedCollection;
}
