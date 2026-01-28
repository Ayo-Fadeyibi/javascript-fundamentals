const form = document.querySelector('#form');
const nameInput = document.querySelector('#full-name');
const emailInput = document.querySelector('#email');
const orderInput = document.querySelector('#order-no');
const productInput = document.querySelector('#product-code');
const quantityInput = document.querySelector('#quantity');
const checkBoxes = document.querySelectorAll('#complaints-group input[type="checkbox"]');
const complaintDescription = document.querySelector('#complaint-description');
const otherComplaintCheckbox = document.querySelector('#other-complaint');
const radioButtons = document.querySelectorAll('#solutions-group input[type="radio"]');
const solutionDescription = document.querySelector('#solution-description');
const otherSolutionRadio = document.querySelector('#other-solution');

function isValidName(name) {
   if(name.trim() === '') {
      return false;
   }
   return true;
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
  if(!regex.test(email)) {
    return false;
  }
  return true;
}

function isValidOrderNumber(orderNo) {
  const regex = /^2024\d{6}$/; 
  if(!regex.test(orderNo)) {
    return false;
  }
  return true;
}

function isValidProductCode(productCode) {
  const regex = /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/;
  if(!regex.test(productCode)) {
    return false;
  }
  return true;
}

function isValidQuantity(quantity) {
  if(quantity < 1){
    return false;
  }
  return true;
}

function isAtLeastOneCheckboxChecked() {
  for (const checkbox of checkBoxes) {
    if (checkbox.checked) {
      return true;
    }
  }   
  return false;
}

function isValidComplaintDescription(description) {
  if(otherComplaintCheckbox.checked && description.length < 20) {
    return false;
  } 
  return true;
}

function isValidSolutionDescription(description) {
  if(otherSolutionRadio.checked && description.length < 20) {
    return false;
  } 
  return true;
}

function isRadioButtonSelected() {
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      return true;
    }
  }     
  return false;
}

function validateForm() {
  let object = {
    "full-name": false,
    "email": false,
    "order-no": false,
    "product-code": false,
    "quantity": false,
    "complaints-group": false,
    "complaint-description": false,
    "solutions-group": false,
    "solution-description": false
  }

  if(isValidName(nameInput.value)) {
    object["full-name"] = true;
  }
  if(isValidEmail(emailInput.value)) {
    object.email = true;
  } 
  if(isValidOrderNumber(orderInput.value)) {
    object["order-no"] = true;
  } 
  if(isValidProductCode(productInput.value)) {
    object["product-code"] = true;
  } 
  if(isValidQuantity(quantityInput.value)) {
    object.quantity = true;
  }
  if(isAtLeastOneCheckboxChecked()) {
    object["complaints-group"] = true;
  }
  if(isValidComplaintDescription(complaintDescription.value)) {
    object["complaint-description"] = true;
  } 
  if(isRadioButtonSelected()) {
    object["solutions-group"] = true;
  }
  if(isValidSolutionDescription(solutionDescription.value)) {
    object["solution-description"] = true;
  }
  return object;
}

function isValid(object){
  for (const key in object) {
    if(object[key] === false){
      return false;
    } 
  }
  return true;
}

form.addEventListener('change', (event) => {
    const element = event.target;
    let isValidField = false;

    if (element === nameInput) {isValidField = isValidName(element.value)}
    else if (element === emailInput) {isValidField = isValidEmail(element.value)}
    else if (element === orderInput) {isValidField = isValidOrderNumber(element.value)}
    else if (element === productInput) {isValidField = isValidProductCode(element.value)}
    else if (element === quantityInput) {isValidField = isValidQuantity(element.value)}
    else if (element.type === 'checkbox') {isValidField = isAtLeastOneCheckboxChecked()}
    else if (element === complaintDescription) {isValidField = isValidComplaintDescription(element.value)}
    else if (element === solutionDescription) {isValidField = isValidSolutionDescription(element.value)}
    else if (element.type === 'radio') {isValidField = isRadioButtonSelected()};

    const targetToStyle = (element.type === 'checkbox' || element.type === 'radio')
        ? element.closest('fieldset')
        : element;

    if (isValidField) {
        targetToStyle.style.borderColor = "green";
    } else {
        targetToStyle.style.borderColor = "red"; 
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const validationResults = validateForm(); 
    const messageBox = document.querySelector('#message-box');
    
    if (!isValid(validationResults)) {
        for (const key in validationResults) {
            const isValidField = validationResults[key];
            
            let element;
            if (key === "complaints-group") {
                element = document.querySelector('#complaints-group');
            } else if (key === "solutions-group") {
                element = document.querySelector('#solutions-group');
            } else {
                element = document.getElementById(key);
            }
            
            if (element) {
                const targetToStyle = (element.tagName === 'FIELDSET')
                    ? element
                    : element;

                if (!isValidField) {
                    targetToStyle.style.borderColor = "red";
                } else {
                    targetToStyle.style.borderColor = "green";
                }
            }
        }
        
        messageBox.innerText = "Please fix the errors highlighted in red.";
        messageBox.style.color = "red";
    } else {
        messageBox.innerText = "Form submitted successfully!";
        messageBox.style.color = "green";
    }
});
