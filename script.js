function toggleMenu() {
  var navbarNav = document.getElementById('navbarNav');
  navbarNav.classList.toggle('show');
}
function slowScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }



function slowScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  }

  function slowScroll(target) {
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
  }
  

// Select multiple elements using a class name
var buttons = document.getElementsByClassName("btn");

// Loop through the buttons and add event listeners
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    console.log("Button clicked!");
  });
}
var element = document.getElementById("top");

function animateElement() {
  element.style.opacity = "0";
  setTimeout(function() {
    element.style.opacity = "1";
  }, 1000);
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all video cards
    var videoCards = document.querySelectorAll('.card');
  
    // Attach a click event listener to each video card
    videoCards.forEach(function (card) {
      card.addEventListener('click', function () {
        // Get the iframe element within the clicked card
        var iframe = this.querySelector('iframe');
  
        // Toggle the "playing" class to indicate the video is playing
        this.classList.toggle('playing');
  
        // Check if the video is currently playing
        var isPlaying = this.classList.contains('playing');
  
        // Play or pause the video based on its current state
        if (isPlaying) {
          iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        } else {
          iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        }
      });
    });
  });
  
  // Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get all the podcast card elements
    var podcastCards = document.getElementsByClassName('card-p');
  
    // Attach hover event listeners to each podcast card
    for (var i = 0; i < podcastCards.length; i++) {
      // Add a class on mouseenter to apply the animation effect
      podcastCards[i].addEventListener('mouseenter', function () {
        this.classList.add('animate__animated', 'animate__pulse');
      });
  
      // Remove the class on mouseleave to reset the animation
      podcastCards[i].addEventListener('mouseleave', function () {
        this.classList.remove('animate__animated', 'animate__pulse');
      });
    }
  });
  function isElementInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to add animation class to the section when it is in the viewport
  function animateSectionOnScroll() {
    var section = document.querySelector('#overview');
    if (isElementInViewport(section)) {
      section.classList.add('animated-section');
      // Remove the event listener once the animation is applied
      window.removeEventListener('scroll', animateSectionOnScroll);
    }
  }

  // Function to scroll smoothly to a specific element
  function slowScroll(target) {
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }

  // Add event listener to trigger the animation on scroll
  window.addEventListener('scroll', animateSectionOnScroll);
  var img = document.createElement('img');
  img.src = '/Users/Kamila/Downloads/animation.gif';

  var isPlaying = false; // Track the playing state

  function toggleAnimationAndSound() {
    var audio = document.getElementById("myAudio");
    var button = document.getElementById("playButton");
  
    if (isPlaying) {
      // Stop the audio
      audio.pause();
      audio.currentTime = 0;
  
      // Remove the animation classes
      button.classList.remove("animate__animated", "animate__bounce");
    } else {
      // Start playing the audio
      audio.play();
  
      // Add the animation classes
      button.classList.add("animate__animated", "animate__bounce");
    }
  
    // Toggle the playing state
    isPlaying = !isPlaying;
  }
  
  function slowScroll(target) {
    // Add smooth scrolling behavior
    document.querySelector(target).scrollIntoView({
      behavior: 'smooth'
    });
  }

  document.addEventListener('DOMContentLoaded', function() {
    // Get references to the cards
    var cards = document.querySelectorAll('#overview .card-r');
  
    // Add mouseover event listeners to the cards
    cards.forEach(function(card) {
      card.addEventListener('mouseover', function(event) {
        // Increase the size of the card when the mouse touches it
        card.style.transform = 'scale(1.1)';
      });
  
      card.addEventListener('mouseout', function(event) {
        // Reset the size of the card when the mouse leaves it
        card.style.transform = 'scale(1)';
      });
    });
  
    // Add click event listeners to the buttons
    // ...
  
  });
