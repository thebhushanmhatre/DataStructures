// You are given a molecule represented as a string. The string consists of characters 'C', 'H' and 'O', where 'C' represents a carbon atom and 'H' represents a hydrogen atom.
// The weight of carbon is 12 units, the weight of hydrogen is 1 unit and weight of oxygen is 16 units.

// Restraints:
// Number in the string if present would be single digit (1 - 9)

// Find the total weight of the molecule. The molecule can also contain brackets, which means that the atoms inside the brackets are multiplied by the number following the closing bracket. For example, in the molecule C2(CH4)3(H2O)2, the weight of the molecule is calculated as follows:

// Example: CH4 = 12 + 4*1 = 16
// Example: H20 = 2*1 + 16 = 18
// Example: C2H5OH = 2*12 + 6*1 + 16 = 46
// Example: C2(CH4)3(H2O)2 = 2*12 + 3*(12 + 4*1) + 2*(16 + 2*1) = 2*12 + 3*16 + 2*18 = 24 + 48 + 36 = 108
// Example: C2(C3(H20)2)3(H2O)2 = 2*12 + 3*(3*12 + 2*(16 + 2*1)) + 2*(16 + 2*1) = 24 + 3*(36 + 2*18) + 2*18 = 24 + 3*72 + 36 = 24 + 216 + 36 = 276

function calculateMoleculeWeight(molecule) {
  let stack = [];
  let totalWeight = 0,
    n = molecule.length;
  let weightsMap = {
    C: 12,
    H: 1,
    O: 16,
  };

  for (let i = 0; i < n; i++) {
    let currentItem = molecule[i];
    if (weightsMap[currentItem]) {
      // if current item is H, C, or O
      // next item doesn't matter
      stack.push(weightsMap[currentItem]);
    } else if (currentItem == '(' || currentItem == ')') {
      // if current item is brackets
      // if opening bracket, just add it
      if (currentItem == '(') {
        stack.push(currentItem);
      }
      // if bracket closes, keep popping and adding  until opening bracket and then add the sum again for total
      // no need to take care of following number since sum will be added in stack again
      if (currentItem == ')') {
        let sum = 0;
        let counter = 0;
        while (stack[stack.length - 1] != '(') {
          if (counter > 10) {
            break;
          }
          counter++;
          sum += stack.pop();
        }

        stack.pop(); // throw the opening bracket
        stack.push(sum);
      }
    } else {
      // if current item is number
      // check whatever is at the top of stack just multiply with it and add to total and pop
      let prevWt = stack.pop(); // asuming something is in stack
      stack.push(prevWt * parseInt(currentItem));
    }
  }

  // iterate over stack to get the total
  totalWeight = stack.reduce((acc, item) => acc + item, 0);
  console.log('Total weight of', molecule, 'is', totalWeight);

  return totalWeight;
}

calculateMoleculeWeight('CH4');
calculateMoleculeWeight('H2O');
calculateMoleculeWeight('C2H5OH');
calculateMoleculeWeight('C2(CH4)3(H2O)2');
calculateMoleculeWeight('C2(C3(H2O)2)3(H2O)2');
