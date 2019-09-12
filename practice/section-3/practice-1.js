'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let updatedCollection = Array.from(collectionA);

  for(let dictionary of updatedCollection){
    if(objectB.value.includes(dictionary.key)){
      dictionary.count--;
    }
  }
  return updatedCollection;
}
