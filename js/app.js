


// ----Navagation----
const navbar = document.querySelectorAll(".navbar a");

for (let i = 0; i < navbar.length; ++i) {
  navbar[i].addEventListener('click', (e) => {
    for (let i = 0; i < navbar.length; ++i) {
      navbar[i].classList.remove("selectNavbar");
    }
    e.path[1].classList.add("selectNavbar");
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

const tc = document.getElementById('trafficChart').getContext("2d");
const trafficMultiData = [
  [2250, 2000, 1750, 1600, 1000, 750, 1500, 1250, 1300, 1800, 2000],
  [750, 1500, 1250, 1300, 1800, 2000, 2250, 2000, 1750, 1600, 1000],
  [1600, 2250, 1000, 750, 2000, 1750, 1800, 2000, 1500, 1250, 1300],
  [1300, 1000, 750, 1500, 1250, 2000, 1750, 1600, 2250, 1800, 2000]
];
const trafficSelection = document.querySelectorAll('#trafficOptions li');

for (let i = 0; i < trafficSelection.length; ++i) {
  trafficSelection[i].addEventListener('click', (e) => {
    for (let i = 0; i < trafficSelection.length; ++i) {
      trafficSelection[i].classList.remove("selectTraffic");
    }
    e.path[0].classList.add("selectTraffic");
    let choice = e.target.textContent;
    let trafficData = trafficMultiData[0];
    switch (choice) {
      case 'Hourly':
        trafficData = trafficMultiData[0];
        break;
      case 'Daily':
        trafficData = trafficMultiData[1];
        break;
      case 'Weekly':
        trafficData = trafficMultiData[2];
        break;
      case 'Monthly':
        trafficData = trafficMultiData[3];
        break;
    }
  });
}
// ---Traffic---

var trafficChart = new Chart(tc, {
    type: 'line',
    data: {
      labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
      datasets: [{
        data: trafficMultiData[0],
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
        },
        responsive: true
    }
});


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
        },
        responsive: true
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
})
