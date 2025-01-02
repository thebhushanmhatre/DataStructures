// Implement Stack using Arrays
// Implement Queue using Arrays
// Implement Stack using Queue
// Implement Queue using Stacks

// In JS, its by default available, So lets just write theory

// Implement Stack using Arrays

// We need: push(), pop(), top()
// array, lets have variable top=-1
// for push, we will add element in array and increment top
// for pop, if top >=0, return arr[top] and remove from array
// for top, same but don't remove from array

// Implement Queue using Arrays

// We need: add(), remove, top()
// array, lets have variable start=0 and end=0
// for push, add element in array at 'end' position and increment end by 1
// for remove, if start != end, remove arr[start] and increment by 1
// for top, same but don't remove

// In C++, arrays are of fixed size, so we can keep checks on size and use mudolo to insert
// as variables keeps incrementing beyond size

// Implement Stack using Queue

// We need push and pop,
// We have Queue with add() and remove()
// if size > 1, remove n-1 elements from queue add them again one by one,
// this way element added will be at the start of queue
// eg: add(1), add(2), add(3), remove()
// add(1): Q [1]
// add(2): Q [1,2] => Q [2,1] removed 1 and added back again
// add(3): Q [2,1,3] => Q [1,3,2] removed 2 and added back again => Q[3,2,1]  removed 1 and added back again
// remove(): Since Q:[3,2,1] -> return 3 as a stack should
// remove (): Since Q:[2,1] -> return 2

// Implement Queue using Stacks
// We need add() and remove()
// We have Stack with push() and pop()
// Using 2 stacks,
// For push, pop and push all the existing elements from other stack to another,
// then add new element in empty stack and pop and push back the other elements
// eg: push(1), push(2), push(3), pop()
// push(1): S1[1], S2[]
// push(2): S1[2], S2[1] => S1[2,1], S2[] => you can swap just for S1 to be main (lets skip this)
// push(3): S1[2,1], S2[] => S1[], S2[1,2] => S1[3], S2[1,2] => S1[3,2,1], S2[]
//           Here we emptied S1 in S2, then added element in S1, then added all elements back to S1
// remove(): Since S:[] -> pop from S1 : return 1 as a queue should
// remove (): Since S:[] -> return 2
// push will be O(2N)

// Can do better using something which will also require 2 Stacks
