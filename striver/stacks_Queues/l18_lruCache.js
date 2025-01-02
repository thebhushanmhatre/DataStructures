// Implement LRU Cache
// Least Recently Used
// get
// put
// remove least recently used if capacity is full
// get and put should happen in O(1)

/* 
// class LRUCache {
//   constructor(capacity) {
//     this.capacity = capacity;
//     this.lruCache = {}; // {key: {val, next}}
//     // next will be used when deleting to move the oldest

//     // pointers to keys
//     this.oldest = null;
//     this.newest = null;
//   }

//   // private helper functions
//   #deleteKey(key) {
//     delete this.lruCache[key];
//   }

//   #updateNewest(key) {
//     // update the next pointer then the newest pointer
//     if (Object.keys(this.lruCache).length > 0) {
//       this.lruCache[this.newest].next = key;
//     }
//     this.newest = key;
//   }

//   #updateOldest(key) {
//     if (key) {
//       this.oldest = key;
//     }
//   }

//   // Required functions
//   get(key) {
//     if (this.lruCache[key]) {
//       this.#updateNewest(key);
//       this.#updateOldest(this.lruCache[this.oldest].next);
//       this.lruCache[key].next = null;

//       console.log('\nafter get, DS: ', this);
//       return this.lruCache[key].val;
//     }

//     return -1;
//   }

//   put(key, val) {
//     this.#updateNewest(key);

//     if (Object.keys(this.lruCache).length == 0) {
//       this.lruCache[key] = {
//         val,
//         next: null,
//       };
//       this.#updateOldest(key);
//     } else {
//       let tempOldest = this.oldest;
//       if (tempOldest && key == this.oldest)
//         this.#updateOldest(this.lruCache[tempOldest].next); // if key is oldest, then update oldest

//       if (this.lruCache[key]) {
//         this.lruCache[key] = {
//           val,
//           next: null,
//         };
//       } else if (
//         !this.lruCache[key] &&
//         Object.keys(this.lruCache).length <= this.capacity
//       ) {
//         this.lruCache[key] = {
//           val,
//           next: null,
//         };
//       } else {
//         // capacity is full, so delete the oldest before adding
//         this.#deleteKey(tempOldest);
//         this.lruCache[key] = {
//           val,
//           next: null,
//         };
//       }
//     }
//     console.log('\nafter put, DS: ', this);
//   }
// }

// A MAJOR FLAW IN THIS
// look at next of 4 after get(8)
// 2 keys are pointing towards 8

*/

// also I implemented lfu instead of lru above - major mistake

// retryin

class LRUCache {
  constructor(capacity) {
    if (capacity <= 3) {
      throw new Error('Too small for LRU Cache');
    }
    this.capacity = capacity;
    this.size = 0;
    // linked list for storing keys (keys, not pointers)
    this.head = null; // recent (prev = null)
    this.tail = null; // (next = null)
    // hash/object for storing key,value pairs of O(1)
    this.cache = {};
    // object will contain {key: { value, next, previous }}
  }

  get(key) {
    // return the value if it exists ore return -1
    if (!this.cache[key]) {
      return -1;
    }

    // also place this key on top
    let prevKey = this.cache[key].prev;
    let nextKey = this.cache[key].next;
    if (prevKey) {
      this.cache[prevKey].next = nextKey || null; // null if key is head
    }
    if (nextKey) {
      this.cache[nextKey].prev = prevKey || null; // null if key is tail
    }

    if (key != this.head) {
      this.cache[key].next = this.head;
    }
    this.head = key;
    if (key == this.tail && this.size > 1) {
      this.tail = prevKey;
    }

    console.log(`\nGET ${key} cache:`, this);
    console.table(this.cache, ['value', 'next', 'prev']);
    return this.cache[key].value;
  }

  put(key, value) {
    // if key exists then update the value and place this key on top
    if (this.cache[key]) {
      this.cache[key].value = value;
      let prevKey = this.cache[key].prev;
      let nextKey = this.cache[key].next;
      if (prevKey) {
        this.cache[prevKey].next = nextKey || null; // null if key is head
      }
      if (nextKey) {
        this.cache[nextKey].prev = prevKey || null; // null if key is tail
      }
      if (key == this.tail) {
        this.tail = prevKey;
      }
    }
    // else add key and value
    else {
      // if capacity was full before adding, delete the least frequently used element
      if (this.capacity > this.size) {
        // just add
        this.cache[key] = {
          value,
          next: this.head,
          prev: null,
        };
        if (!this.tail) {
          // in case of adding first element
          this.tail = key;
        }
        this.size++;
      } else {
        // delete the tail and add
        // if key is tail
        if ((key = this.tail)) {
          let secondLastKey = this.cache[this.tail].prev;
          let thirdLastKey = this.cache[secondLastKey].prev;
          console.log('Capacity is full, key to delete is at tail', {
            secondLastKey,
            thirdLastKey,
          });
          this.cache[thirdLastKey].next = null;
          this.tail = thirdLastKey;
        } else {
          let secondLastKey = this.cache[this.tail].prev;
          this.cache[secondLastKey].next = null;
          this.tail = secondLastKey;
        }

        this.cache[key] = {
          value,
          next: this.head,
          prev: null,
        };
      }
    }

    if (this.head) {
      // in case of adding first element, head won't be there
      this.cache[this.head].prev = key;
    }
    this.cache[key].next = this.head;
    this.head = key;
    this.cache[this.head].prev = null;

    console.log(`\nPUT ${key}:${value} cache: `, this);
    console.table(this.cache, ['value', 'next', 'prev']);
  }
}

// INCOMPLETE
// Revisit this after DLL

// Operations
let cache = new LRUCache(4);
cache.put(2, 6);
console.log('GET 2', cache.get(2));
cache.put(4, 7);
cache.put(8, 11);
cache.put(7, 10);
console.log('GET 2', cache.get(2));
console.log('GET 8', cache.get(8));
cache.put(5, 6);
console.log('GET 7', cache.get(7));
cache.put(5, 7);

console.log('\ncache:', cache);
