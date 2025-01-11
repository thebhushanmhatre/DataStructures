// Design Browser history
//
// homepage = constructor
// visit
// back
// forwards

// // queries
// homepage('tuf.org');
// visit('google.com');
// visit('insta.com');
// visit('fb.com');
// back(1); // insta
// back(1); // google
// forward(1); // insta
// visit('tuf.org');
// forward(2); // tuf
// back(2); // google
// back(7); // tuf

const { Node } = require('./common-dll');

function Browser(homepage) {
  this.homepage = new Node(homepage);
  this.current = this.homepage;

  this.visit = (url) => {
    this.current.next = new Node(url, null, this.current);
    this.current = this.current.next;

    console.log('Currently on', this.current.val);
  };

  this.back = (counter) => {
    while (counter > 0 && this.current.prev) {
      this.current = this.current.prev;
      counter--;
    }

    console.log('=>', this.current.val);
    return this.current.val;
  };

  this.forward = (counter) => {
    while (counter > 0 && this.current.next) {
      counter--;
      this.current = this.current.next;
    }

    console.log('=>', this.current.val);
    return this.current.val;
  };
}

let chrome = new Browser('tuf.org');

chrome.visit('google.com');
chrome.visit('insta.com');
chrome.visit('fb.com');
chrome.back(1); // insta
chrome.back(1); // google
chrome.forward(1); // insta
chrome.visit('tuf.org');
chrome.forward(2); // tuf
chrome.back(2); // google
chrome.back(7); // tuf
