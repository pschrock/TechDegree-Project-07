

// ----Alert Display----
const bellIcon = document.querySelector('.notification img');
const bellIndicator = document.querySelector('.notification span');
const alertDisplay = document.querySelector('.alertDisplay');


bellIcon.addEventListener('click', () => {
  const isntVisible = window.getComputedStyle(alertDisplay,null).getPropertyValue('display');
  if (isntVisible == 'none') {
    alertDisplay.style.display = 'block';
    bellIndicator.style.display = 'none';
  } else {
    alertDisplay.style.display = 'none';
  }
});

const alertPopLi = document.querySelectorAll('.alertDisplay li');
const alertPageLi = document.querySelectorAll('.alerts li');

function removeDisplayedAlerts (alert) {
  for (let i = 0; i < alert.length; ++i) {
    alert[i].addEventListener('click', (e) => {
      if (e.target.tagName == 'BUTTON') {
        let parent = e.target.parentNode;
        parent.style.display = 'none';
      }
    });
  }
}

removeDisplayedAlerts(alertPopLi);
removeDisplayedAlerts(alertPageLi);

// for (let i = 0; i < alertDisplayLi.length; ++i) {
//   alertDisplayLi[i].addEventListener('click', (e) => {
//     removeDisplayedAlerts(e);
//   });
// }


// ----Navagation----
const navbar = document.querySelectorAll(".navbar a");

for (let i = 0; i < navbar.length; ++i) {
  navbar[i].addEventListener('click', (e) => {
    if (e.target.tagName == 'IMG') {
      let parent = e.target.parentNode;
      for (let i = 0; i < navbar.length; ++i) {
        navbar[i].classList.remove("selectNavbar");
      }
      parent.classList.add("selectNavbar");
    }
  })
}

//In the dashboard.png, this appears as the purple bar near the top of the page with the word "Alert" in it.
//When the page loads this alert should be visible,
//but the user should be able to close the alert by clicking the X button.

//Include a notification icon in the navigation header.
  //Use the icon-bell.svg file. In the mockup, this is the bell in the top right corner of the page.


// ----Chart Widget----
//Using chart.js, create and include the information for the following chart widgets,
//as shown in the mockup for the:
  // Web Traffic (line chart)
  // Daily Traffic Bar Chart (bar chart)
  // Mobile User Pie Chart (donut chart)
// Style the charts to match the overall style of the dashboard.
// You will need to make up this data -- you can see the mockup for sample data.

const trafficMultiData = [
  [2250, 2000, 1750, 1600, 1000, 750, 1500, 1250, 1300, 1800, 2000],
  [750, 1500, 1250, 1300, 1800, 2000, 2250, 2000, 1750, 1600, 1000],
  [1600, 2250, 1000, 750, 2000, 1750, 1800, 2000, 1500, 1250, 1300],
  [1300, 1000, 750, 1500, 1250, 2000, 1750, 1600, 2250, 1800, 2000]
];
const trafficSelection = document.querySelectorAll('#trafficOptions li');

function trafficSelected(){
  for (let i = 0; i < trafficSelection.length; ++i) {
    trafficSelection[i].addEventListener('click', (e) => {
      for (let i = 0; i < trafficSelection.length; ++i) {
        trafficSelection[i].classList.remove("selectTraffic");
      }
      e.target.classList.add("selectTraffic");
      let choice = e.target.textContent;
      switch (choice) {
        case 'Hourly':
          trafficHourly();
          break;
        case 'Daily':
          trafficDaily();
          break;
        case 'Weekly':
          trafficWeekly();
          break;
        case 'Monthly':
          trafficMonthly();
          break;
      }
    });
  }
}

trafficSelected();

// ---Traffic---
const tc = document.getElementById('trafficChart').getContext("2d");
Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;
var trafficChart = new Chart(tc, {
    type: 'line',
    data: {
      labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets: [{
        data: [2250, 2000, 1750, 1600, 1000, 750, 1500, 1250, 1300, 1800, 2000],
        backgroundColor: 'rgba(116,119,191,0.35)',
        borderWidth: 1,
        lineTension: 0,
        pointRadius: 5,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgb(116,119,191)',
        pointBorderWidth: 2
      }]
    },
    options: {
        legend: {
          hidden: true,
          display: false
        },
        tooltips: {
          enabled: false
        }
    }
});

function trafficHourly () {
  trafficChart.data.datasets[0].data = trafficMultiData[0];
  trafficChart.update();
}

function trafficDaily () {
  trafficChart.data.datasets[0].data = trafficMultiData[1];
  trafficChart.update();
}

function trafficWeekly () {
  trafficChart.data.datasets[0].data = trafficMultiData[2];
  trafficChart.update();
}

function trafficMonthly () {
  trafficChart.data.datasets[0].data = trafficMultiData[3];
  trafficChart.update();
}

// ---Daily---
const dc = document.getElementById('dailyChart').getContext("2d");

var dailyChart = new Chart(dc, {
    type: 'bar',
    data: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [{
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgba(116,119,191)',
            borderWidth: 1
        }]
    },
    options: {
        legend: {
          hidden: true,
          display: false
        },
        tooltips: {
          enabled: false,
          cornerRadius: 5
        }
    }
});

// ---Mobile---
const mc = document.getElementById('mobileChart').getContext("2d");

var mobileChart = new Chart(mc, {
    type: 'doughnut',
    data: {
      labels: ['Phones', 'Tablets', 'Desktop'],
      datasets: [{
        data: [10, 15, 75],
        backgroundColor: ['#74b1bf', '#81c98f', 'rgba(116,119,191)'],
        borderWidth: 0
      }]
    },
    options: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 16,
            fontSize: 16,
            padding: 25
          }
        },
        tooltips: {
          cornerRadius: 5
        }
    }
});




// ----Social Widget----
// Create a widget (or three separate widgets) to display social network stats for Facebook, Twitter, and Google+.
  // Use the provided SVG icons for each of the social networks.
  // SVG icons are added as inline SVG's.
  // SVG fill colors have been changed to match the mockups.
  // Style the social information to match the corresponding social network.
  // Style to match the overall look and feel of the dashboard.



// ----Activity Widget----
// Create widgets that list users for both widgets.
  // Include avatars for each member (member avatars are inside images folder).
  // Add the information for each user as shown in the mockup,
    // such as Member name,
    // email address,
    // Sign up Date etc.


// ----Message Widget----
// Create a field for searching for a user.
// You don't have to add real search functionality,
// but if you attempt to get the exceeds grade, you'll need to make up some user data.
// Add a message textarea field that lets you add a message.
// Create a “Send” button and use JS to allow you to submit the form
// and display a confirmation the message was sent.
  //You won't actually submit the form, just simulate the action using JavaScript.
  // Use JS to display error messages if a user isn’t selected or message field is empty.
// Style to match the overall look and feel of the dashboard.

const sendButton = document.getElementById('sendButton');
const searchedUser = document.querySelector('.message input');
const message = document.querySelector('.message textArea');

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  if (searchedUser.value == "") {
    alert("Please input a users name you would like to send a message to.");
  } else if (message.value == "") {
    alert("Please input a message you would like to send " + searchedUser.value + ".");
  } else {
    alert("Your message to " + searchedUser.value + " has been sent.");
    searchedUser.value = "";
    message.value = "";
  }
});

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

/*An array containing all the country names in the world:*/
const names = ['Walter', 'Wilma', 'Eva', 'Edward', 'Ralph', 'Rebecca', 'Travis',
'Teressa', 'Yolanda', 'Yakovich', 'Isabel', 'Isreal', 'Paul', 'Patricia',
'Albert', 'Angela', 'Sarah', 'Saul', 'Donica', 'Daniel', 'Felicia', 'Fester',
'George', 'Gabriela', 'Harold', 'Hanna', 'Jackie', 'James', 'Kylie', 'Kyle',
'Larissa', 'Larry', 'Zachary', 'Xavier', 'Carol', 'Christopher', 'Vivian',
'Victor', 'Bethany', 'Billy', 'Naomi', 'Nicholas', 'Michael', 'Mindy'];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("memberName"), names);
