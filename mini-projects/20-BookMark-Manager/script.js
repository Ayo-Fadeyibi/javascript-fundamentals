// Get DOM elements
const mainSection = document.getElementById('main-section');
const formSection = document.getElementById('form-section');
const bookmarkListSection = document.getElementById('bookmark-list-section');
const categoryDropdown = document.getElementById('category-dropdown');
const addBookmarkButton = document.getElementById('add-bookmark-button');
const viewCategoryButton = document.getElementById('view-category-button');
const closeFormButton = document.getElementById('close-form-button');
const addBookmarkButtonForm = document.getElementById('add-bookmark-button-form');
const nameInput = document.getElementById('name');
const urlInput = document.getElementById('url');
const categoryList = document.getElementById('category-list');
const closeListButton = document.getElementById('close-list-button');
const deleteBookmarkButton = document.getElementById('delete-bookmark-button');
const categoryNameElements = document.querySelectorAll('.category-name');

// Get bookmarks from local storage
function getBookmarks() {
  const bookmarks = localStorage.getItem('bookmarks');
  
  // If no bookmarks key, return empty array
  if (!bookmarks) {
    return [];
  }
  
  try {
    const parsed = JSON.parse(bookmarks);
    
    // Check if it's a valid array
    if (!Array.isArray(parsed)) {
      return [];
    }
    
    // Check if all items are valid bookmark objects
    const isValidBookmarks = parsed.every(bookmark => {
      return (
        typeof bookmark === 'object' &&
        bookmark !== null &&
        'name' in bookmark &&
        'category' in bookmark &&
        'url' in bookmark
      );
    });
    
    // If not all valid, return empty array
    if (!isValidBookmarks) {
      return [];
    }
    
    return parsed;
  } catch (error) {
    return [];
  }
}

// Toggle between main section and form section
function displayOrCloseForm() {
  mainSection.classList.toggle('hidden');
  formSection.classList.toggle('hidden');
}

// Toggle between main section and bookmark list section
function displayOrHideCategory() {
  mainSection.classList.toggle('hidden');
  bookmarkListSection.classList.toggle('hidden');
}

// Add bookmark button click handler
addBookmarkButton.addEventListener('click', () => {
  const selectedCategory = categoryDropdown.value;
  
  // Update category name in form
  categoryNameElements[0].textContent = selectedCategory;
  
  // Show form section, hide main section
  displayOrCloseForm();
});

// Close form button click handler
closeFormButton.addEventListener('click', () => {
  displayOrCloseForm();
});

// Add bookmark form submission
addBookmarkButtonForm.addEventListener('click', () => {
  const name = nameInput.value.trim();
  const url = urlInput.value.trim();
  const category = categoryDropdown.value;
  
  // Validate inputs
  if (!name || !url) {
    alert('Please fill in all fields');
    return;
  }
  
  // Get existing bookmarks
  const bookmarks = getBookmarks();
  
  // Add new bookmark
  bookmarks.push({
    name: name,
    category: category,
    url: url
  });
  
  // Save to local storage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  
  // Reset form inputs
  nameInput.value = '';
  urlInput.value = '';
  
  // Hide form, show main section
  displayOrCloseForm();
});

// View category button click handler
viewCategoryButton.addEventListener('click', () => {
  const selectedCategory = categoryDropdown.value;
  
  // Update category name in bookmark list section
  categoryNameElements[1].textContent = selectedCategory;
  
  // Get bookmarks for this category
  const bookmarks = getBookmarks();
  const categoryBookmarks = bookmarks.filter(bookmark => bookmark.category === selectedCategory);
  
  // Display bookmarks
  if (categoryBookmarks.length === 0) {
    categoryList.innerHTML = '<p>No Bookmarks Found</p>';
  } else {
    let html = '';
    categoryBookmarks.forEach(bookmark => {
      html += `
        <div class="bookmark-item">
          <input type="radio" id="${bookmark.name}" name="bookmark" value="${bookmark.name}">
          <label for="${bookmark.name}">
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
          </label>
        </div>
      `;
    });
    categoryList.innerHTML = html;
  }
  
  // Show bookmark list section
  displayOrHideCategory();
});

// Close list button click handler
closeListButton.addEventListener('click', () => {
  displayOrHideCategory();
});

// Delete bookmark button click handler
deleteBookmarkButton.addEventListener('click', () => {
  const selectedRadio = document.querySelector('input[name="bookmark"]:checked');
  
  if (!selectedRadio) {
    alert('Please select a bookmark to delete');
    return;
  }
  
  const bookmarkName = selectedRadio.value;
  const currentCategory = categoryNameElements[1].textContent;
  
  // Get all bookmarks
  const bookmarks = getBookmarks();
  
  // Filter out the selected bookmark
  const updatedBookmarks = bookmarks.filter(bookmark => {
    return !(bookmark.name === bookmarkName && bookmark.category === currentCategory);
  });
  
  // Save updated bookmarks
  localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  
  // Refresh the display
  const categoryBookmarks = updatedBookmarks.filter(bookmark => bookmark.category === currentCategory);
  
  if (categoryBookmarks.length === 0) {
    categoryList.innerHTML = '<p>No Bookmarks Found</p>';
  } else {
    let html = '';
    categoryBookmarks.forEach(bookmark => {
      html += `
        <div class="bookmark-item">
          <input type="radio" id="${bookmark.name}" name="bookmark" value="${bookmark.name}">
          <label for="${bookmark.name}">
            <a href="${bookmark.url}" target="_blank">${bookmark.name}</a>
          </label>
        </div>
      `;
    });
    categoryList.innerHTML = html;
  }
});
