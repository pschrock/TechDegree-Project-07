


// ----Navagation----
const navbar = document.querySelectorAll(".navbar a");
const dashboard = navbar[0];
const members = navbar[1];
const visits = navbar[2];
const settings = navbar[3];

for (let i = 0; i < navbar.length; ++i) {
  navbar[i].addEventListener('click', (e) => {
    for (let i = 0; i < navbar.length; ++i) {
      navbar[i].classList.remove("selected");
    }
    e.path[1].classList.add("selected");
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
