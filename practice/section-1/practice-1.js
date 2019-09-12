'use strict';

function collectSameElements(collectionA, collectionB) {
  let sameElements = [];
  for(let elementA of collectionA){
    if(collectionB.includes(elementA)){
      sameElements.push(elementA);
    }
  }
  return sameElements;
}
