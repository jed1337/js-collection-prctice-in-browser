'use strict';

function collectSameElements(collectionA, objectB) {
  let sameElements = [];
  for(let elementA of collectionA){
    if(objectB['value'].includes(elementA)){
      sameElements.push(elementA);
    }
  }
  return sameElements;
}
