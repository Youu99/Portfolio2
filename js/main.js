$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });


//   파티클

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 355,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.48927153781200905,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 2,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 2,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });


//   스크롤 이벤트

document.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;
  
    // #RES_h2 태그 애니메이션 처리
    if (scrollPosition > 100) { 
      document.querySelector('#RES_h2').style.opacity = 1;
      document.querySelector('#RES_h2').style.transform = 'translateX(0)';
    } else {
      document.querySelector('#RES_h2').style.opacity = 0;
      document.querySelector('#RES_h2').style.transform = 'translateX(-100%)';
    }
  
    // #EX_ED 태그 애니메이션 처리
    setTimeout(function() {
      if (scrollPosition > 100) { // 조건은 #RES_h2와 동일
        document.querySelector('#EX_ED').style.opacity = 1;
        document.querySelector('#EX_ED').style.transform = 'translateX(0)';
      } else {
        document.querySelector('#EX_ED').style.opacity = 0;
        document.querySelector('#EX_ED').style.transform = 'translateX(-100%)';
      }
    }, 300); // h2 뒤에 나타나게 타임아웃 설정
  
    // #SKILL 태그 애니메이션 처리
    setTimeout(function() {
      if (scrollPosition > 100) {
        document.querySelector('#SKILL').style.opacity = 1;
        document.querySelector('#SKILL').style.transform = 'translateX(0)';
      } else {
        document.querySelector('#SKILL').style.opacity = 0;
        document.querySelector('#SKILL').style.transform = 'translateX(100%)';
      }
    }, 300); // EX_ED와 동시에 나타나게 타임아웃 설정 
  });




//   스킬 게이지 바 이벤트
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.skill').forEach(function(skill) {
      var percentage = skill.dataset.percentage;
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      var circleBg = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      var circleProgress = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      
      svg.setAttribute("viewBox", "0 0 180 180");
      circleBg.setAttribute("cx", "90");
      circleBg.setAttribute("cy", "90");
      circleBg.setAttribute("r", "85");
      circleBg.setAttribute("stroke", "#f0f0f0");
      circleBg.setAttribute("stroke-width", "10");
      
      circleProgress.setAttribute("cx", "90");
      circleProgress.setAttribute("cy", "90");
      circleProgress.setAttribute("r", "85");
      circleProgress.setAttribute("stroke", "#A263C1");
      circleProgress.setAttribute("stroke-width", "10");
      circleProgress.setAttribute("stroke-dasharray", "534.07"); // 2 * π * 85
      circleProgress.setAttribute("stroke-dashoffset", "534.07");
      
      svg.appendChild(circleBg);
      svg.appendChild(circleProgress);
      skill.appendChild(svg);
      
      setTimeout(function() {
          circleProgress.style.strokeDashoffset = (1 - (percentage / 100)) * 534.07;
      }, 100);
  });
});



// WORKS 스크롤 애니메이션


document.addEventListener("DOMContentLoaded", function() {
  const h2 = document.querySelector('#WOR_h2');
  const tabs = document.querySelectorAll('.WORKS_list_TAB');

  // 스크롤 이벤트 리스너 등록
  window.addEventListener('scroll', () => {
    // h2 태그 애니메이션 조건 검사 및 적용
    if (window.scrollY > h2.offsetTop - window.innerHeight / 1.2) {
      h2.classList.add('active');
    } else {
      h2.classList.remove('active');
    }

    // 각 WORKS_list_TAB에 대한 애니메이션 조건 검사 및 적용
    tabs.forEach((tab, index) => {
      if (window.scrollY > tab.offsetTop - window.innerHeight / 1.2) {
        tab.classList.add('active');
      } else if (window.scrollY < tab.offsetTop - window.innerHeight) {
        tab.classList.remove('active');
      }
    });
  });
  
});



// ABOUT 스크롤

document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null, // viewport가 관찰 대상의 root
    rootMargin: '0px',
    threshold: 0.1 // 10% 요소가 보이면 callback 실행
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
      } else {
        entry.target.classList.remove('enter');
      }
    });
  }, observerOptions);

  // 'ABOUT_h2' 요소에 대한 관찰자 등록
  const aboutH2 = document.querySelector('#ABOUT_h2');
  observer.observe(aboutH2);
  aboutH2.classList.add('from-left');

  // 'ABOUT_list' 클래스를 가진 모든 요소에 대한 관찰자 등록
  const aboutLists = document.querySelectorAll('.ABOUT_list');
  aboutLists.forEach((el, index) => {
    if (index % 2 === 0) { // 첫 번째 요소는 왼쪽에서
      el.classList.add('from-left');
    } else { // 두 번째 요소는 오른쪽에서
      el.classList.add('from-right');
    }
    observer.observe(el);
  });
});






// CONTACT 태그

document.addEventListener('scroll', function() {
  var contactH2 = document.getElementById('CONTACT_h2');
  var contactH2Position = contactH2.getBoundingClientRect().top;
  var screenPosition = window.innerHeight;

  // 스크롤 내릴 때
  if (contactH2Position < screenPosition) {
    contactH2.style.opacity = '1';
    contactH2.style.transform = 'translateY(0)';
  } else {
    // 스크롤 올릴 때
    contactH2.style.opacity = '0';
    contactH2.style.transform = 'translateY(20px)';
  }
});


// A 태그 자연스럽게 이동하는 이벤트
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault(); // 기본 앵커 이동 방지

    var target = document.querySelector(this.getAttribute('href'));
    if (target) { // 대상 요소가 존재하는지 확인
      window.scrollTo({ // 스크롤 이동
        top: target.offsetTop, // 대상 요소의 상단 위치
        behavior: 'smooth' // 부드러운 스크롤 효과 적용
      });
    }
  });
});


// 팝업창 슬라이드

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 팝업창 이미지 스크롤



// 팝업창 연결

document.addEventListener('DOMContentLoaded', function() {
  // 'Details' 링크에 대한 클릭 이벤트 리스너 설정
  document.querySelectorAll('.Details').forEach(function(detailLink) {
    detailLink.addEventListener('click', function(e) {
      e.preventDefault(); // 기본 동작 방지
      var targetId = this.getAttribute('data-target'); // data-target 속성 값 가져오기
      var targetDiv = document.querySelector('.WORKS_Det#work' + targetId); // 대상 div 선택

      // 모든 WORKS_Det 숨기기
      document.querySelectorAll('.WORKS_Det').forEach(function(div) {
        div.style.display = 'none';
      });

      // 선택한 WORKS_Det 보이기
      if(targetDiv) {
        targetDiv.style.display = 'block';
        // body 스크롤 숨기기
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // 모든 '닫기' 버튼에 대한 클릭 이벤트 리스너 설정
  document.querySelectorAll('.Det_btn').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
      // 모든 WORKS_Det 숨기기
      document.querySelectorAll('.WORKS_Det').forEach(function(div) {
        div.style.display = 'none';
      });

      // body 스크롤 다시 보이게 하기
      document.body.style.overflow = '';
    });
  });
});