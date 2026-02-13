// Get DOM elements
const generateBtn = document.getElementById('generate-btn');
const sortBtn = document.getElementById('sort-btn');
const arrayContainer = document.getElementById('array-container');
const startingArray = document.getElementById('starting-array');

// Generate a random integer between 1 and 100, inclusive
function generateElement() {
  return Math.floor(Math.random() * 100) + 1;
}

// Generate an array of five random integers
function generateArray() {
  const arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push(generateElement());
  }
  return arr;
}

// Create and return an empty div element, and append it to array container
function generateContainer() {
  const div = document.createElement('div');
  arrayContainer.appendChild(div);
  return div;
}

// Populate an HTML element with span elements showing array values
function fillArrContainer(element, arr) {
  // Clear existing content
  element.innerHTML = '';
  
  // Create a span for each number in the array
  arr.forEach(num => {
    const span = document.createElement('span');
    span.textContent = num;
    element.appendChild(span);
  });
}

// Check if first integer is less than or equal to second
function isOrdered(a, b) {
  return a <= b;
}

// Swap elements at index and index+1 if they're not in order
function swapElements(arr, index) {
  if (!isOrdered(arr[index], arr[index + 1])) {
    // Swap the elements
    const temp = arr[index];
    arr[index] = arr[index + 1];
    arr[index + 1] = temp;
  }
}

// Highlight the elements being compared
function highlightCurrentEls(element, index) {
  const children = element.children;
  
  // Highlight element at index
  if (children[index]) {
    children[index].style.border = '3px dashed red';
  }
  
  // Highlight element at index + 1
  if (children[index + 1]) {
    children[index + 1].style.border = '3px dashed red';
  }
}

// Store the current array globally
let currentArray = [];

// Generate button click handler
generateBtn.addEventListener('click', () => {
  // Generate new random array
  currentArray = generateArray();
  
  // Clear array container - remove all children except starting-array
  while (arrayContainer.children.length > 1) {
    arrayContainer.removeChild(arrayContainer.lastChild);
  }
  
  // Fill starting array with the generated numbers
  fillArrContainer(startingArray, currentArray);
});

// Sort button click handler - Bubble Sort implementation
sortBtn.addEventListener('click', () => {
  if (currentArray.length === 0) {
    alert('Please generate an array first!');
    return;
  }
  
  // Clear array container - remove all children except starting-array
  while (arrayContainer.children.length > 1) {
    arrayContainer.removeChild(arrayContainer.lastChild);
  }
  
  // Create a copy of the array to sort
  const arrToSort = [...currentArray];
  
  // Fill the existing starting-array div and highlight first two elements
  fillArrContainer(startingArray, arrToSort);
  highlightCurrentEls(startingArray, 0);
  
  // Bubble Sort algorithm with visualization
  const n = arrToSort.length;
  let swapped = true;
  
  while (swapped) {
    swapped = false;
    
    for (let i = 0; i < n - 1; i++) {
      // Check if swap is needed
      if (!isOrdered(arrToSort[i], arrToSort[i + 1])) {
        swapElements(arrToSort, i);
        swapped = true;
      }
      
      // Create a new step div showing the current state
      const stepDiv = generateContainer();
      fillArrContainer(stepDiv, arrToSort);
      
      // Highlight the next pair to compare (if there is one)
      if (i + 1 < n - 1) {
        highlightCurrentEls(stepDiv, i + 1);
      }
    }
  }
});
