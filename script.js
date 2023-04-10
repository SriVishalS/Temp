/* Mobile Navigation */

// assign navigation and buttons to variables
const nav = document.getElementById("mobile");
const mobileBtn = document.getElementById("menu-open");
const mobileBtnClose = document.getElementById("menu-close");

// show the mobile nav
function openNav() {
  //nav.style.display = "block";
  // stop scrolling
  document.querySelector("body").style.overflowY = "hidden";
  // mobile nav menu sliding down
  nav.style.transform = "translateY(0%)";
}

// hide the mobile nav
function closeNav() {
  //nav.style.display = "none";
  // enable scrolling
  document.querySelector("body").style.overflowY = "unset";
  // mobile nav menu sliding back up
  nav.style.transform = "translateY(-400%)";
}

/* Reservation/Price Estimation of Vehicle Rental */

// assign elements to variables
const vehicleItems = document.getElementById("vehicleItems");
const fuelItems = document.getElementById("fuelItems");
const transmissionItems = document.getElementById("transmissionItems");
const daysItem = document.getElementById("days");

// reset values to default
function resetToDefault() {
  fuelItems.options[0].selected = true;
  transmissionItems.options[0].selected = true;
  daysItem.value = "1";
}

// price calculation in real time
function calculatePrice() {
  //get selected price of chosen vehicle from its option value
  var vehicle = vehicleItems.options[vehicleItems.selectedIndex].value;

  //convert vehicle value string to integer
  vehicle = parseInt(vehicle);

  //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
  switch (vehicle) {
    // if "moto" is chosen
    case 10:
      //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = false;
      fuelItems.options[2].hidden = true;
      fuelItems.options[3].hidden = true;
      fuelItems.options[4].hidden = false;
      //show transmission type [1:manual; 2:auto]
      transmissionItems.hidden = true;
      break;

    // if "citadine" is chosen
    case 12:
      //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = false;
      fuelItems.options[2].hidden = false;
      fuelItems.options[3].hidden = false;
      fuelItems.options[4].hidden = false;
      //show transmission type [1:manual; 2:auto]
      transmissionItems.hidden = false;
      transmissionItems.options[1].hidden = false;
      transmissionItems.options[2].hidden = true;
      break;

    // if "compact" is chosen
    case 14:
      //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = false;
      fuelItems.options[2].hidden = false;
      fuelItems.options[3].hidden = false;
      fuelItems.options[4].hidden = true;
      //show transmission type [1:manual; 2:auto]
      transmissionItems.hidden = false;
      transmissionItems.options[1].hidden = false;
      transmissionItems.options[2].hidden = true;
      break;

    // if "utilitaire" is chosen
    case 16:
      //show & hide fuel options [1:essence; 2:diesel; 3:hybride; 4:electric]
      fuelItems.hidden = false;
      fuelItems.options[1].hidden = true;
      fuelItems.options[2].hidden = false;
      fuelItems.options[3].hidden = true;
      fuelItems.options[4].hidden = true;
      //show transmission type [1:manual; 2:auto]
      transmissionItems.hidden = false;
      transmissionItems.options[1].hidden = false;
      transmissionItems.options[2].hidden = true;
      break;

    default:
      break;
  }

  //get selected fuel/transmission/days values
  var fuel = fuelItems.options[fuelItems.selectedIndex].value;
  var transmission =
    transmissionItems.options[transmissionItems.selectedIndex].value;
  var days = daysItem.value;

  //convert fuel and transmission value strings to integers
  fuel = parseInt(fuel);
  transmission = parseInt(transmission);

  //calculate total value
  var total =
    (vehicle + (vehicle * fuel) / 100 + (vehicle * transmission) / 100) *
    days *
    1000; // Formula
  //round the decimals to 2 numbers
  total = total.toFixed(0);

  //assign value to rentPrice = Show the calculated price
  document.getElementById("rentPrice").value = "₹ " + total;
  return total;
}

/* Contact Form User Input and Overlay */

// get the overlay
var overlay = document.getElementById("contact-overlay");
var overlayEmpty = document.getElementById("contact-overlay-empty");

loaderFunc = () => {
  load = setTimeout(loader, 2000);
};
loader = () => {
  document.querySelector(".loaderWrapper").style.display = "none";
};

// -----------------EMAIL CONFIG-------------

sendMail = () => {
  const usrObj2 = {
    customer_name: document.getElementById("name").value,
    customer_email: document.getElementById("email").value,
    customer_car: document.getElementById("vehicleItems").value,
    customer_rate: document.getElementById("rentPrice").value,
  };
  emailjs.send("service_e49t41f", "template_m7cmz9f", usrObj2).then((res) => {
    alert("Rental Plan Is Confirmed");
  });
};
