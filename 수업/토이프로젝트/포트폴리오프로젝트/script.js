
/* aos */

// section를 기준으로 애니메이션 실행
const section = document.querySelector("section");

// section 내부 모든 data-aos 요소 선택
const aosElements = section.querySelectorAll("[data-aos]");

aosElements.forEach(el => {
  el.setAttribute("data-aos-anchor", "section");      // 기준 요소 지정
  el.setAttribute("data-aos-anchor-placement", "bottom"); // 컨테이너 top이 뷰포트 top에 닿을 때
});


const titEl = document.querySelectorAll(".section-title");

titEl.forEach(tit => {
  tit.setAttribute("data-aos", "fade-zoom-in");
  tit.setAttribute("data-aos-easing", "ease-in-back");
  tit.setAttribute("data-aos-delay", "10");
  tit.setAttribute("data-aos-offset", "0");
  tit.setAttribute("duration", "200");
});

const infoEl = document.querySelectorAll(".info-item");

infoEl.forEach((info, i) => {
  info.setAttribute("data-aos", "fade-up");
  info.setAttribute("data-aos-delay", i * 100); 
});

  AOS.init({
    startEvent: 'DOMContentLoaded', // dom이 완성되기 전에 미처 이벤트를 받지못하는 dom요소가 생길 수 있기때문에 권장 필수x
     duration: 1000,
     once: false, // 스크롤을 내릴 때 애니메이션이 한 번만 실행될지 여부
     mirror: false, // 스크롤을 올릴 때도 애니메이션이 다시 실행될지 여부
     
  });

    
/* gsap */

/*cursor */

gsap.set(".mouse", {xPercent: -50, yPercent: -50});

let xSetter = gsap.quickSetter(".mouse", "x", "px")
let ySetter = gsap.quickSetter(".mouse", "y", "px") 

window.addEventListener("mousemove", e => {  
  xSetter(e.x)
  ySetter(e.y)
});

/* intro */
const titles = document.querySelectorAll(".tit");

titles.forEach(tit => {
  const text = tit.textContent;
  tit.textContent = "";


  for(let i = 0; i < text.length; i++){
  const span = document.createElement("span");
  span.textContent = text[i];
  tit.appendChild(span);  
}

})

gsap.from(".tit > span", {
  opacity: 0,
  y: 20,
  stagger: 0.1,
  duration: 0.6,
  ease: "power2.out"
});

 /* about me */ 

gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".about", 
    start: "top 80%",
    end: "top 70%", 
    once: false,
    toggleActions: "restart resume restart reset",
  },
  onComplete: () => statTl.restart()
});

tl.from(".about-image",{xPercent: 50, duration: 1.2})
  .from(".about-text",{xPercent: -50, opacity : 0, duration: 1.2}, "<");

const statTl = gsap.timeline({ paused: true });

const items = gsap.utils.toArray(".stat-item",);

items.forEach((item, i) => {
  statTl.from(item, {
    y:20,
    opacity : 0,
    duration: 1,
    ease: "elastic.out(0.5, 0.6)"
  },"-=0.7");
});


/* Projects */

/* gsap.registerPlugin(ScrollTrigger);

const row = document.querySelector(".projects-row");
const projects = document.querySelector(".projects");

gsap.to(row, {
  x: () => -(row.scrollWidth - window.innerWidth),
  ease: "none",

  scrollTrigger: {
    trigger: projects,
    start: "center center",               
    end: () => "+=" + (row.scrollWidth - window.innerWidth),
    scrub: true,
    pin: projects,                        
    pinSpacing: false,                   
    invalidateOnRefresh: true,
    markers: true
  }
});
 */
/* 1. projects에 스크롤이 중간쯤 왔을 때 고정
2. 콘텐츠가 로고선에 맞춰져야함
2. 스크롤이 끝나고 내려가야함 */
 

/* const totalScroll = row.scrollWidth - section.clientWidth;

gsap.to(sectionEl, {
  x: () => -totalScroll,
  ease: "none",
  scrollTrigger: {
    trigger: ".projects",
    start: "top top",
    end: () => "+=" + totalScroll,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    toggleActions: "restart resume restart reset",
  },
});
window.addEventListener("resize", () => ScrollTrigger.refresh());
 */








/*   AOS.init({
    startEvent: 'DOMContentLoaded', // dom이 완성되기 전에 미처 이벤트를 받지못하는 dom요소가 생길 수 있기때문에 권장 필수x
     duration: 1000,
  });

/* // setter
smoother.smooth(1.5);

// getter
let duration = smoother.smooth(); */

  // 숙제 aos문서 읽어보기
  // aos js이벤트효과 적용시켜보기


/********************************************************************** */
  /* 슷자증가 */


// 숫자 올리는 함수 
function animateCounter(element, target, duration = 2000) { // 숫자 올라가는 애니메이션 함수 정의
  let start = 0; // 0부터 시작 (카운트 시작점)
  const increment = target / (duration / 16); // 타겟까지 증가하는 속도 계산 (16ms ≈ 1프레임, 60fps 기준)

  function updateCounter() { // 화면에 숫자를 계속 갱신하는 내부 함수
    start += increment; // start(현재 값)에 increment(증가량)을 계속 더해서 숫자를 조금씩 올림
    if (start < target) { // 아직 목표 숫자(target)에 도달하지 않았으면
      element.textContent = Math.floor(start); // 현재 숫자를 정수로 내림(Math.floor)하여 화면에 표시
      requestAnimationFrame(updateCounter); // 다음 프레임에서 updateCounter()를 다시 실행 (60fps 기준 부드럽게 반복)
    } else { // 목표 숫자에 도달했거나 초과한 경우
      element.textContent = target;  // 정확히 목표 숫자를 표시하고 종료
    }
  }

  updateCounter(); // updateCounter()를 처음 한 번 호출해서 애니메이션 시작
}



const statObserver = new IntersectionObserver((entries, observer) => { 
  // IntersectionObserver : 특정 요소가 화면(뷰포트)에 들어오거나 나갈 때를 감지하는 브라우저 내장 객체 
  // 보일 때 true, 안보일 때 false
  // new IntersectionObserver(콜백) → 관찰자(Observer)를 생성하는 생성자 함수
  // entries : 감시 중인 모든 요소의 상태정보 배열
  // observer : 현재 IntersectionObserver 인스턴스 자체

  entries.forEach(observerEntry => { // 감시 중인 각 요소의 상태 정보를 하나씩 순회

    // 보일 때
    if (observerEntry.isIntersecting) { // observerEntry.isIntersecting이 true이면 → 화면에 나타난 상태
      const targetNum = +observerEntry.target.getAttribute("data-target"); 
      // targetNum : data-target 속성값(문자열)을 가져와서 숫자로 변환
      // 앞의 + 기호는 문자열을 숫자로 변환하는 "단항 덧셈 연산자"
      // 예: +"1500" → 1500 (Number로 바뀜)

      animateCounter(observerEntry.target, targetNum, 2000); 
      // observerEntry.target → 현재 화면에 나타난 요소
      // targetNum → 목표 숫자
      // 2000 → 2초 동안 숫자 카운트 애니메이션 실행

      observer.unobserve(observerEntry.target); 
      // 이 요소에 대한 관찰을 중지 (한 번만 실행되게)
      // 즉, 스크롤을 다시 해도 중복 실행되지 않음
    }
  });
});



document.querySelectorAll(".stat-number").forEach(stat => { 
  // .stat-number 클래스를 가진 모든 요소를 찾아서 각각 순회

  statObserver.observe(stat); 
  // 각 요소를 statObserver(IntersectionObserver)에 등록
  // → 화면에 등장할 때마다 위에서 정의한 콜백 함수가 실행됨
});





/* ****************************************************************** */



/* 아이콘 이벤트 */


const skillObserver = new IntersectionObserver((entries , observer) => { //화면에 요소가 들어오거나 나갈 때 실행되는 감시자
  // entries: 화면에 들어오거나 나간 요소들의 정보가 담긴 배열
  // observer: 감시 중인 요소들을 제어할 수 있는 도구
  
  entries.forEach(entry => { // 감시 중인 모든 요소들을 하나씩 순회하면서 처리
    if(entry.isIntersecting){ // 요소가 화면(Viewport)에 들어왔는지 확인 (true면 들어옴)

      setTimeout(() => {   // 5초(5000ms) 뒤에 한번 실행되는 코드
        entry.target.style.opacity = "1"; // 요소의 투명도를 1로 변경 => 보여지게 함 => 
      }, 5000); // 5초

      
      observer.unobserve(entry.target);  // 감시를 종료함 → 한 번 실행된 후 다시 감시하지 않음 (중복 실행 방지)
    }
  });

});

// 모든 .skill-icon 요소를 선택해서 각각 감시 시작
document.querySelectorAll(".skill-icon").forEach(skill => {
  skillObserver.observe(skill); // skillObserver가 각 요소를 관찰하도록 설정

});




/* recusive function 재귀함수*/

function count(max = 10, current = 0) {
  undefined(current < max){
    console.log(current)
    count(max, ++current)
  }
}

count(10, 0)



//알트 쉬프트 에프

// 재귀함수
// git 형상관리

//git 사용이유
//1. 코드의 형상을 관리해주는 툴이다. 누가 해당 코드를 작성했는 지 코듸의 history 관리 코드 툴

// 장점
// 1.코드 history 관리
// 2. 코드의 책임
// 3. 코드에 가지를 쳐서 안전한 코드 관리가 가능하다.




// error 
// 1. 코드가 실행은 되는데 의도한 바와 다름 => 아이콘이 보이지 않는 상태에서 이벤트 실행시점이 되면 아이콘이 2초 뒤에 보여야하는데 2000이라는 숫자가 보임
// 2. 이벤트가 첫번째 요소에만 적용되고 있음

// 1. 아이콘이 보이지 않는상태 => 아이콘 이벤트 함수정의 => forEach로 아이콘을 순회 => 이벤트가 시작되는 시점필요 for문 => 
// 2. 1초 뒤 아이콘이 보여야함

  //observer = startObserver
  // entries = 이벤트 타겟을 가르킴


  //숙제 

  // 1. 아이콘을 없앴다가 5초 뒤에 띄우기
  //2. 코드 주석
    



