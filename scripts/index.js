// index.js

const header = document.querySelector("header");
const navLinks = document.querySelectorAll("header nav .right a");

const swiper = new Swiper("#wrap", {
    direction: "vertical",
    mousewheel: true,
    speed: 800,
    init: true,

    on: {
        init: function () {

            // 첫 로드시 상태 설정
            if (this.activeIndex > 0) {
                header.classList.add("nav-dark");
            }

            if (navLinks[this.activeIndex]) {
                navLinks[this.activeIndex].classList.add("active");
            }
        },

        slideChange: function () {

            // active 초기화
            navLinks.forEach(link => link.classList.remove("active"));

            // INTRO 제외 전부 nav-dark 유지
            if (this.activeIndex > 0) {
                header.classList.add("nav-dark");
            } else {
                header.classList.remove("nav-dark");
            }

            // 현재 슬라이드에 맞는 메뉴 bold 처리
            if (navLinks[this.activeIndex]) {
                navLinks[this.activeIndex].classList.add("active");
            }
        }
    }
});


/* ---------------- 네비 클릭 이동 ---------------- */

navLinks.forEach((link, index) => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        swiper.slideTo(index);
    });
});
