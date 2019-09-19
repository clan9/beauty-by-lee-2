"use strict"; // Fade in-out quotes

(function () {
  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length).fadeIn(2000).delay(2000).fadeOut(2000, showNextQuote);
  }

  showNextQuote();
})(); // Navigation scroll
// Select all links with hashes


$('a[href*="#"]') // Remove links that don't actually link to anything
.not('[href="#"]').not('[href="#0"]').click(function (event) {
  // On-page links
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function () {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();

        if ($target.is(":focus")) {
          // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

          $target.focus(); // Set focus again
        }
      });
    }
  }
}); // ALL MODALS

var windowOnClick = function windowOnClick(modalName) {
  if (event.target === modalName) {
    modalName.classList.toggle('show-modal');
  }
}; // Nails


var nailsModalButton = document.querySelector('.nailsPrices');
var nailsModal = document.querySelector('.nailsModal');
var closeNailsModal = document.querySelector('.nailsClose');
nailsModalButton.addEventListener('click', function () {
  nailsModal.classList.toggle('show-modal');
});
closeNailsModal.addEventListener('click', function () {
  nailsModal.classList.toggle('show-modal');
});
window.addEventListener('click', function () {
  windowOnClick(nailsModal);
}); // Facials

var facialsModalButton = document.querySelector('.facialsPrices');
var facialsModal = document.querySelector('.facialsModal');
var closeFacialsModal = document.querySelector('.facialsClose');
facialsModalButton.addEventListener('click', function () {
  facialsModal.classList.toggle('show-modal');
});
closeFacialsModal.addEventListener('click', function () {
  facialsModal.classList.toggle('show-modal');
});
window.addEventListener('click', function () {
  windowOnClick(facialsModal);
}); // Eyes

var eyesModalButton = document.querySelector('.eyesPrices');
var eyesModal = document.querySelector('.eyesModal');
var closeEyesModal = document.querySelector('.eyesClose');
eyesModalButton.addEventListener('click', function () {
  eyesModal.classList.toggle('show-modal');
});
closeEyesModal.addEventListener('click', function () {
  eyesModal.classList.toggle('show-modal');
});
window.addEventListener('click', function () {
  windowOnClick(eyesModal);
}); // Waxing

var waxingModalButton = document.querySelector('.waxingPrices');
var waxingModal = document.querySelector('.waxingModal');
var closeWaxingModal = document.querySelector('.waxingClose');
waxingModalButton.addEventListener('click', function () {
  waxingModal.classList.toggle('show-modal');
});
closeWaxingModal.addEventListener('click', function () {
  waxingModal.classList.toggle('show-modal');
});
window.addEventListener('click', function () {
  windowOnClick(waxingModal);
}); // Massage

var massageModalButton = document.querySelector('.massagePrices');
var massageModal = document.querySelector('.massageModal');
var closeMassageModal = document.querySelector('.massageClose');
massageModalButton.addEventListener('click', function () {
  massageModal.classList.toggle('show-modal');
});
closeMassageModal.addEventListener('click', function () {
  massageModal.classList.toggle('show-modal');
});
window.addEventListener('click', function () {
  windowOnClick(massageModal);
}); // Opening Hours

var hoursModalLink = document.querySelector('.hoursLink');
var hoursModal = document.querySelector('.hoursModal');
var closeHoursModal = document.querySelector('.hoursClose');
hoursModalLink.addEventListener('click', function () {
  hoursModal.classList.toggle('show-modal');
});
closeHoursModal.addEventListener('click', function () {
  hoursModal.classList.toggle('show-modal');
});
window.addEventListener('click', function () {
  windowOnClick(hoursModal);
});