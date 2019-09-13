/*global createUpdatedCollection*/
'use strict';

describe('practice-3-4', () => {

  const collectionA = [
    /*3*/	'a', 'a', 'a',
    /*7*/	'e', 'e', 'e', 'e', 'e', 'e', 'e',
    /*11*/	'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h', 'h',
    /*20*/	't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't', 't',
    /*9*/	'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f', 'f',
    /*8*/	'c', 'c', 'c', 'c', 'c', 'c', 'c', 'c',
    /*7*/	'g', 'g', 'g', 'g', 'g', 'g', 'g',
    /*6*/	'b', 'b', 'b', 'b', 'b', 'b',
    /*5*/	'd-5'
  ];


  const objectB = {value: ['a', 'd', 'e', 'f']};

  it('Counting the same elements in Collection A and get a new Collection C, if element includes "-", ' +
    'plus the right side number to count of this element. the elements in C should like {key:"a", count: 3}. ' +
    'then Get the same elements both in key properties of Collection C and value property of Collection B, ' +
    'counting them and following the rule which is full three minus one in Collection C, ' +
    'ouput the new Collection C', () => {

    const result = createUpdatedCollection(collectionA, objectB);

    expect(result).toEqual([
      {key: 'a', count: 2},
      {key: 'e', count: 5},
      {key: 'h', count: 11},
      {key: 't', count: 20},
      {key: 'f', count: 6},
      {key: 'c', count: 8},
      {key: 'g', count: 7},
      {key: 'b', count: 6},
      {key: 'd', count: 4}
    ]);
  });
});
