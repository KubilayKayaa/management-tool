const menu = ["01", "02", "03", "04", "05", "06"];
const context = [
  "Domain Selection",
  "General Info",
  "Vehicle And Operation",
  "Actors",
  "Contextual Factors",
  "Occurence Assesment",
];

const mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  simulateTouch: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    speed: 1000,

    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        "<p class='tab-navigation-text'>" +
        context[index] +
        "</p>" +
        "</span>"
      );
    },
  },
});

$(document).ready(function () {
  const tabNavigation = document.querySelectorAll(".tab-navigation-text");
  tabNavigation[0].classList.add("active");

  const swiper = document.querySelector(".swiper-container .swiper-slide");

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type == "attributes") {
        let activeSlide;
        for (
          let i = 0;
          i <
          document.querySelectorAll(".swiper-container .swiper-slide").length;
          i++
        ) {
          if (
            document
              .querySelectorAll(".swiper-container .swiper-slide")
              [i].classList.contains("swiper-slide-active")
          ) {
            activeSlide = document
              .querySelectorAll(".swiper-container .swiper-slide")
              [i].getAttribute("aria-label")
              .split("/")[0]
              .split(" ")[0];
          }
        }

        if (activeSlide == 1) {
          $(".swiper-button-prev").addClass("none");
          $(".tool-tab .swiper-button-next").addClass("none");
        } else {
          $(".swiper-button-prev").removeClass("none");
          $(".tool-tab .swiper-button-next").removeClass("none");
        }

        if (activeSlide == 6) {
          $(".tool-tab .swiper-button-next").addClass("none");
          $('.save-report').removeClass('none')
        } else {
          $('.save-report').addClass('none')
        }

        for (let i = 0; i < tabNavigation.length; i++) {
          tabNavigation[i].classList.remove("active");
        }

        tabNavigation[activeSlide - 1].classList.add("active");
      }
    });
  });

  observer.observe(swiper, {
    attributes: true,
  });
});

$('.save-report').click(function(){
    $('.tool').addClass('none');
    $('.redirect-homepage').removeClass('none');
    setTimeout(() => {
        window.location.href = 'dashboard-home.html'
    }, 1000);
})