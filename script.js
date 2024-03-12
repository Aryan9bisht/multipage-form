var priceElement = document.querySelector(".price1");
var priceElement2 = document.querySelector(".price2");
var priceElement3 = document.querySelector(".price3");
let planPrice1 = document.querySelector(".plan1price");
let planPrice2 = document.querySelector(".plan2price");
let planPrice3 = document.querySelector(".plan3price");
const freeElements = document.querySelectorAll(".free");
var checkbox = document.getElementById("toggle");
let cssRule = ".circle4:hover { color: black; background: rgb(189,226,245); }";
let circle1 = document.querySelector(".circle");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let circle4 = document.querySelector(".circle4");
let cssRuleDefault = `
    .circle4 {
        /* Default state styles */
        /* Add your default styles here */
        color: gray;
        background: white;
    }
`;
let months = document.getElementById('months');
let years = document.getElementById('years');
let form1 = document.getElementById("form1");

// Add event listener to form1's submit event
form1.addEventListener("submit", function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Your custom submission handling logic goes here
  // For example, you can retrieve form data and perform AJAX request
});
checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    priceElement.innerHTML = `$90/yr`;
    priceElement2.innerHTML = `$120/yr`;
    priceElement3.innerHTML = `$150/yr`;
    planPrice1.innerHTML = `$10/yr`;
    planPrice2.innerHTML = `$20/yr`;
    planPrice3.innerHTML = `$20/yr`;
    freeElements.forEach(function (element) {
      element.innerHTML = "2 months free";
    });
  } else {
    planPrice1.innerHTML = `$1/mo`;
    planPrice2.innerHTML = `$2/mo`;
    planPrice3.innerHTML = `$2/mo`;
    priceElement.innerHTML = `$9/mo`;
    priceElement2.innerHTML = `$12/mo`;
    priceElement3.innerHTML = `$15/mo`;
    freeElements.forEach(function (element) {
      element.innerHTML = "";
    });
  }
});

let plan = {
  price: [],
  mode: [],
  duration: [],
};

const listEle = document.getElementsByClassName("billing");
let tSwitch = document.getElementById('toggle');
let years1 = document.getElementById('years');
let months1 = document.getElementById('months');
tSwitch.addEventListener('change',()=>{
    if (tSwitch.checked) {
        years1.style.color = 'rgb(76, 92, 116)';
        months1.style.color = 'rgb(159, 160, 169)';
    } else {
        years1.style.color = 'rgb(159, 160, 169)';
        months1.style.color = 'rgb(76, 92, 116)';
    }
})


document.getElementById("toggle").addEventListener("change", () => {
   
  Array.from(listEle).forEach((element) => {
    const children = element.children;
    Array.from(children).forEach((childElement) => {
      childElement.style.background = "white";
      childElement.style.border = "1px solid rgb(231,231,234)";
    });
  });
  plan.price[0] = [];
  plan.mode[0] = [];
  plan.duration[0] = [];
});

Array.from(listEle).forEach((element) => {
  const children = element.children;

  Array.from(children).forEach((childEle) => {
    childEle.addEventListener("click", () => {
      // Reset styles for all elements
      Array.from(children).forEach((element) => {
        element.style.background = "white";
        element.style.border = "1px solid rgb(231,231,234)";
      });

      if (childEle.className === "arcade") {
        // Your logic when the 'arcade' element is clicked
        let check = document.getElementById("toggle");
        if (check.checked) {
        
          plan.price = [90];
          plan.mode = ["Arcade"];
          plan.duration = ["Yearly"];
        } else {
          
          plan.price = [9];
          plan.mode = ["Arcade"];
          plan.duration = ["monthly"];
        }
      } else if (childEle.className === "advanced") {
        // Your logic when the 'advanced' element is clicked
        let check = document.getElementById("toggle");
        if (check.checked) {
          plan.price = [120];
          plan.mode = ["Advanced"];
          plan.duration = ["Yearly"];
        } else {
          plan.price = [12];
          plan.mode = ["Advanced"];
          plan.duration = ["Monthly"];
        }
      } else {
        // Your logic when some other element is clicked (assuming it has class 'pro')
        let check = document.getElementById("toggle");
        if (check.checked) {
          plan.price = [150];
          plan.mode = ["Pro"];
          plan.duration = ["Yearly"];
        } else {
          plan.price = [15];
          plan.mode = ["pro"];
          plan.duration = ["Monthly"];
        }
      }

      // Apply styles to the clicked element
      childEle.style.background = "rgb(248, 249, 255)";
      childEle.style.border = "1px solid rgb(142, 139, 193)";

      console.log(plan);
    });
  });
});
document.querySelector(".b2").addEventListener("click", () => {
  let f1 = document.querySelector(".formtag2");
  let f2 = document.querySelector(".formtag3");
console.log(typeof plan.mode[0]);
if (typeof plan.mode[0] === 'object') {
    alert("Please choose a plan to proceed");
} else {
    f1.style.display = "none";
    f2.style.display = "block";
    circle2.style.background = "transparent";
    circle2.style.color = "white";
    circle3.style.background = "rgb(189,226,245)";
    circle3.style.color = "black";
  }
});
document.querySelector(".b1").addEventListener("click", () => {
  let f1 = document.querySelector(".formtag2");
  let f2 = document.querySelector(".formtag");
  circle2.style.background = "transparent";
  circle2.style.color = "white";
  circle1.style.background = "rgb(189,226,245)";
  circle1.style.color = "black";
  f1.style.display = "none";
  f2.style.display = "block";
});
function validatePersonalInfo() {
    const nameInput = document.getElementById('nameIn');
    const emailInput = document.getElementById('mail');
    const phoneInput = document.getElementById('phonen');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const phoneValue = phoneInput.value.trim();

    const isNameValid = nameValue !== '';
    const isEmailValid = emailValue !== '';
    const isPhoneValid = phoneValue !== '';

   
    if (!isNameValid) {
      nameInput.style.border = '2px solid red';
      displayErrorMessage(nameInput, 'This field is required', 'name');
    } else {
      nameInput.style.border = '';
      removeErrorMessage('name');
    }

    if (!isEmailValid) {
      emailInput.style.border = '2px solid red';
      displayErrorMessage(emailInput, 'This field is required', 'email');
    } else {
      emailInput.style.border = '';
      removeErrorMessage('email');
    }

    if (!isPhoneValid) {
      phoneInput.style.border = '2px solid red';
      displayErrorMessage(phoneInput, 'This field is required', 'phone');
    } else {
      phoneInput.style.border = '';
      removeErrorMessage('phone');
    }

    return isNameValid && isEmailValid && isPhoneValid;
  }

  function displayErrorMessage(inputElement, message, id) {
    const labelElement = inputElement.previousElementSibling; // Get the label element
    if (labelElement) {
      const errorMessageSelector = `.error-message[${id}]`;
      if (!labelElement.querySelector(errorMessageSelector)) {
        const errorMessage = `<div class="error-message" ${id}>${message}</div>`;
        labelElement.innerHTML += errorMessage; // Append the error message to the label's HTML content
      }
    }
  }
  
  

  function removeErrorMessage(id) {
    const errorMessageSelector = `.error-message[${id}]`;
    const errorMessage = document.querySelector(errorMessageSelector);
    if (errorMessage) {
      errorMessage.remove();
    }
  
  }


document.getElementById("button1").addEventListener("click", () => {

  if (!validatePersonalInfo()) {
    alert('Please fill out all personal information fields.');
    // Stop the event from propagating further
  }
  else{
    let f1 = document.querySelector(".formtag2");
    let f2 = document.querySelector(".formtag");
    circle1.style.background = "transparent";
    circle1.style.color = "white";
    circle2.style.background = "rgb(189,226,245)";
    circle2.style.color = "black";
    f2.style.display = "none";
    f1.style.display = "block";
  }
});

document.getElementById("go").addEventListener("click", () => {
  let f1 = document.querySelector(".formtag2");
  let f2 = document.querySelector(".formtag3");
  f2.style.display = "none";
  f1.style.display = "block";
  circle3.style.background = "transparent";
  circle3.style.color = "white";
  circle2.style.background = "rgb(189,226,245)";
  circle2.style.color = "black";
});
let service = {
  online: [0],
  larger: [0],
  pro: [0],
};

let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");
let check = document.getElementById("toggle");

// Function to update the service object based on checkbox state

// Assuming you have event listeners set up for each checkbox
checkbox1.addEventListener('change', updateServiceData);
checkbox2.addEventListener('change', updateServiceData);
checkbox3.addEventListener('change', updateServiceData);

function updateServiceData() {
    // Update service data based on checkbox states
    service.online = checkbox1.checked ? (check.checked ? [10] : [1]) : [0];
    service.larger = checkbox2.checked ? (check.checked ? [20] : [2]) : [0];
    service.pro = checkbox3.checked ? (check.checked ? [20] : [2]) : [0];

    // Change background color of clicked checkbox's parent based on selected state
    if (this.checked) {
        this.parentNode.style.backgroundColor = 'rgb(248, 249, 255)';
        this.parentNode.style.border="1px solid rgb(102,96,180)";
    } else {
        this.parentNode.style.backgroundColor = 'white'; 
        this.parentNode.style.border="1px solid rgb(142, 139, 193);";// Revert to default background color
    }
}

// Update service data initially

document.getElementById('nextStep').addEventListener('click',()=>{
    console.log('clicked');
})
document.getElementById("nextStep").addEventListener("click", () => {
    console.log('inside');
  let f1 = document.querySelector(".formtag4");
  let f2 = document.querySelector(".formtag3");
  circle3.style.background = "transparent";
  circle3.style.color = "white";
  circle4.style.background = "rgb(189,226,245)";
  circle4.style.color = "black";
  f2.style.display = "none";
  f1.style.display = "block";
  let service1PriceElements = document.querySelector(".service1price");

  // Query selector for elements with class service2price
  let service2PriceElements = document.querySelector(".service2price");

  // Query selector for elements with class service3price
  let service3PriceElements = document.querySelector(".service3price");
  if (service.online[0] === 0) {
    document.querySelector(".service1").style.display = "none";
    console.log("inside 1");
  }
  if (service.larger[0] === 0) {
    document.querySelector(".service2").style.display = "none";
    console.log("inside 2");
  }
  if (service.pro[0] === 0) {
    document.querySelector(".service3").style.display = "none";
    console.log("inside 3");
  }

  let selectedcard = document.querySelector(".selected");
  let planName = plan.mode[0];
  let price = document.querySelector(".price");
  console.log(planName);
  selectedcard.textContent = `${planName}(${plan.duration[0]})`;
  let pricetotal = document.querySelector(".priceTotal");
  let total = 0;
  total =
    plan.price[0] + service.online[0] + service.larger[0] + service.pro[0];
  let check = document.getElementById("toggle");
  if (check.checked) {
    service1PriceElements.innerHTML = `$ 10/yr`;
    service2PriceElements.innerHTML = `$ 20/yr`;
    service3PriceElements.innerHTML = `$ 20/yr`;
    price.innerHTML = `$ ${plan.price[0]}/yr`;
    pricetotal.innerHTML = `$ ${total}/yr`;
  } else {
    service1PriceElements.innerHTML = `$ 1/mo`;
    service2PriceElements.innerHTML = `$ 2/mo`;
    service3PriceElements.innerHTML = `$ 2/mo`;
    price.innerHTML = `$ ${plan.price[0]}/mo`;
    pricetotal.innerHTML = `$ ${total}/mo`;
  }

  console.log(total);
  if (service.online[0] === undefined) {
    console.log("empty");
  }
});

  
// Add event listeners to checkboxes
checkbox1.addEventListener("change", updateServiceData);
checkbox2.addEventListener("change", updateServiceData);
checkbox3.addEventListener("change", updateServiceData);
check.addEventListener("change", updateServiceData); // For toggle switch

document.getElementById("confirm1").addEventListener("click", () => {
  let f4 = document.querySelector(".formtag4");
  let f5 = document.querySelector(".finaltag");

  f4.style.display = "none";
  f5.style.display = "flex";
});
document.querySelector(".go2").addEventListener("click", () => {
  let f4 = document.querySelector(".formtag4");
  let f5 = document.querySelector(".formtag3");
  circle4.style.background = "transparent";
  circle4.style.color = "white";
  circle3.style.background = "rgb(189,226,245)";
  circle3.style.color = "black";
  f4.style.display = "none";
  f5.style.display = "block";
});
let changeElement = document.querySelector('.change');
changeElement.addEventListener('click',()=>{
    let f4 = document.querySelector(".formtag4");
    let f5 = document.querySelector(".formtag2");
    f4.style.display = "none";
    f5.style.display = "block";
})
