let testTree = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};

let testTree2 = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: null,
      right: {
        val: 4,
        left: null,
        right: {
          val: 5,
          left: null,
          right: {
            val: 6,
            left: null,
            right: null,
          },
        },
      },
    },
    right: null,
  },
  right: {
    val: 7,
    left: {
      val: 8,
      left: null,
      right: null,
    },
    right: null,
  },
};

// Diameter is the longest path in a BT
// Not necessary for it to have root in the path

// ex 1
let testTree3 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: null,
  },
  right: {
    val: 3,
    left: {
      val: 4,
      left: {
        val: 5,
        left: {
          val: 6,
          left: null,
          right: null,
        },
        right: null,
      },
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: {
        val: 8,
        left: null,
        right: {
          val: 9,
          left: null,
          right: null,
        },
      },
    },
  },
};

//      1
// 2         3
//        4     7
//      5         8
//    6             9
//
// diameter here would be from 6 to 9 i.e. 6-5-4-3-7-8-9 i.e length = 6

function getHeight(root, diameter) {
  if (!root) return 0;

  let leftHeight = getHeight(root.left, diameter);
  let rightHeight = getHeight(root.right, diameter);

  diameter[0] = Math.max(leftHeight + rightHeight, diameter[0]);

  return 1 + Math.max(leftHeight, rightHeight);
}

function calculateDiameter(root) {
  let diameter = [0]; // Since number cannot be passed as reference in JS, using it as object i.e. Array
  getHeight(root, diameter);
  return diameter[0];
}

// console.log('Diameter of BT: ', calculateDiameter(testTree));
// console.log('Diameter of BT: ', calculateDiameter(testTree2));
console.log('Diameter of BT: ', calculateDiameter(testTree3));
