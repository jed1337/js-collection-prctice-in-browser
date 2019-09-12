'use strict';

function collectSameElements(collectionA, objectB) {
  let sameElements = [];
  for(let elementA of mapTo("key", collectionA)){
    if(objectB["value"].includes(elementA)){
      sameElements.push(elementA);
    }
  }
  return sameElements;

}

function mapTo(propertyName, collectionA) {
  let mappedCollection = [];
  for (let dictionary of collectionA){
    mappedCollection.push(dictionary[propertyName]);
  }
  return mappedCollection;
}

