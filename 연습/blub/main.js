function switchOn() { // 함수정의
    const imgEl = document.querySelector("img"); // img태그를 imgEl에 저장
    if (imgEl.classList.contains("on")){ // 만약 img태그에 class on이 있다면
        imgEl.src = "images/b_off.png";// 이미지 경로를 b_off.png로 경로를 변경하고
    }else imgEl.src = "images/b_on.png";// 아니라면 b_on.png로 변경해라
    imgEl.classList.toggle("on")// img태그에 class on이 있다면 삭제 없다면 추가
}