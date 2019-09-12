'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let updatedCollection = Array.from(collectionA);

  let subtractValue = 1;
  for(let dictionary of collectionA){
    if(objectB.value.includes(dictionary.key)){
      dictionary.count-=subtractValue;
      subtractValue = updateSubtractValue(subtractValue);
    }
  }
  return updatedCollection;
}

function updateSubtractValue(subtractValue) {
  subtractValue++;
  if (subtractValue % 4 === 0) {
    subtractValue = 1;
  }
  return subtractValue;
}
