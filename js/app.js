

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
          trafficData(0);
          break;
        case 'Daily':
          trafficData(1);
          break;
        case 'Weekly':
          trafficData(2);
          break;
        case 'Monthly':
          trafficData(3);
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

function trafficData (index) {
  trafficChart.data.datasets[0].data = trafficMultiData[index];
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
  let currentFocus;
  inp.addEventListener("input", function(e) {
      var a,
          b,
          i,
          val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });

  inp.addEventListener("keydown", function(e) {
      let x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
}

// An array containing all the member names
const names = ['Walter', 'Wilma', 'Eva', 'Edward', 'Ralph', 'Rebecca', 'Travis',
'Teressa', 'Yolanda', 'Yakovich', 'Isabel', 'Isreal', 'Paul', 'Patricia',
'Albert', 'Angela', 'Sarah', 'Saul', 'Donica', 'Daniel', 'Felicia', 'Fester',
'George', 'Gabriela', 'Harold', 'Hanna', 'Jackie', 'James', 'Kylie', 'Kyle',
'Larissa', 'Larry', 'Zachary', 'Xavier', 'Carol', 'Christopher', 'Vivian',
'Victor', 'Bethany', 'Billy', 'Naomi', 'Nicholas', 'Michael', 'Mindy'];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("memberName"), names);




// Test for local storage
  const saveSettings = document.querySelector('.saveSettings');
  // const cancelSettings = document.querySelector('.cancelSettings');
  let emailSwitch = document.querySelector('.emailSwitch input');
  let profileSwitch = document.querySelector('.profileSwitch input');
  let timezoneSelect = document.querySelector('.timezone');
  // let email,
  //     profile,
  //     timezone;

  // let storedEmail = localStorage.email;
  // let storedProfile = localStorage.profile;
  // let storedTimezone = localStorage.timezone;
  // let collection = [email, profile, timezone];
  // let storedValues = [storedEmail, storedProfile, storedTimezone];

  if (localStorage.isSaved) {
    emailSwitch.checked = JSON.parse(localStorage.email);
    profileSwitch.checked = JSON.parse(localStorage.profile);
    timezoneSelect.value = JSON.parse(localStorage.timezone);
  }

  saveSettings.addEventListener('click', () => {
    let email = emailSwitch.checked;
    let profile = profileSwitch.checked;
    let timezone = timezoneSelect.value;
    localStorage.setItem('email', email);
    localStorage.setItem('profile', profile);
    localStorage.setItem('timezone', timezone);
    // let strings = ['email', 'profile', 'timezone'];

    localStorage.isSaved = true;
    alert('Your settings have been stored');
  });
