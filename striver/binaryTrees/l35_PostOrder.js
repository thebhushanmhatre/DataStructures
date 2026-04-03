// Construct Unique BT using given inorder and postorder

const inorderArr = [40, 20, 50, 10, 60, 30]; //  left, root, right
const postorderArr = [40, 50, 20, 60, 30, 10]; // left, right, root

// This will be a recusrsive solution and we will be playing with the indexes
function constructBt(
  inorder,
  postorder,
  inStart = 0,
  inEnd = inorder.length - 1,
  postStart = 0,
  postEnd = postorder.length - 1,
  inMap = null,
) {
  if (!inorder.length || !postorder.length) {
    return null;
  }

  if (inStart > inEnd || postStart > postEnd) {
    return null;
  }

  if (!inMap) {
    inMap = {};
    for (let i = 0; i <= inEnd; i++) {
      inMap[inorder[i]] = i;
    }
  }

  const result = {};

  // get the root
  result.val = postorder[postEnd];
  let rootPosition = inMap[postorder[postEnd]];

  // check in the inorder to get the length of left and right subproblems
  let leftElementsCount = rootPosition - inStart;

  result.left = constructBt(
    inorder,
    postorder,
    inStart,
    rootPosition - 1,
    postStart,
    postStart + leftElementsCount - 1,
    inMap,
  );
  result.right = constructBt(
    inorder,
    postorder,
    rootPosition + 1,
    inEnd,
    postStart + leftElementsCount,
    postEnd - 1,
    inMap,
  );

  return result;
}

const root = constructBt(inorderArr, postorderArr);
console.log('\nBT constructed is ', JSON.stringify(root));
// {"val":10,"left":{"val":20,"left":{"val":40,"left":null,"right":null},"right":{"val":50,"left":null,"right":null}},"right":{"val":30,"left":{"val":60,"left":null,"right":null},"right":null}}
