'use strict';

function collectSameElements(collectionA, collectionB) {
  let sameElements = [];
  for(let elementA of collectionA){
    if(collectionB.flat().includes(elementA)){
      sameElements.push(elementA);
    }
  }
  return sameElements;
}
