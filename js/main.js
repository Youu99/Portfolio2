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
    if (window.scrollY > h2.offsetTop - window.innerHeight / 2) {
      h2.classList.add('active');
    } else {
      h2.classList.remove('active');
    }

    // 각 WORKS_list_TAB에 대한 애니메이션 조건 검사 및 적용
    tabs.forEach((tab, index) => {
      if (window.scrollY > tab.offsetTop - window.innerHeight / 2) {
        tab.classList.add('active');
      } else if (window.scrollY < tab.offsetTop - window.innerHeight) {
        tab.classList.remove('active');
      }
    });
  });
});


// ABOUT 스크롤

document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, {threshold: 0.1});

  // h2 애니메이션 적용
  const h2 = document.querySelector("#ABOUT_h2");
  h2.classList.add("ABOUT_h2-anim");
  observer.observe(h2);

  // 첫 번째 ABOUT_list 왼쪽에서 오른쪽으로
  const firstList = document.querySelectorAll(".ABOUT_list")[0];
  firstList.classList.add("ABOUT_list-anim", "from-left");
  observer.observe(firstList);

  // 두 번째 ABOUT_list 오른쪽에서 왼쪽으로
  const secondList = document.querySelectorAll(".ABOUT_list")[1];
  secondList.classList.add("ABOUT_list-anim", "from-right");
  observer.observe(secondList);
});