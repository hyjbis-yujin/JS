    const images = ["/수업용/슬라이드/img1.jpg", "/수업용/슬라이드/img2.jpg", "/수업용/슬라이드/img3.jpg"];
    let index = 0;

    const imgEl = document.querySelector("#slide-img");
    const prevBtn = document.querySelector("#prev");
    const nextBtn = document.querySelector("#next");
    
    nextBtn.addEventListener("click", () => {
      index = (index + 1) % images.length; 
      // 0 = (0 + 1) % 이미지갯수 > 1 = (1 + 1) % 이미지갯수
      imgEl.src = images[index]; // 이미지 경로를 이미지배열에 있는 순번으로 변경
    });

    prevBtn.addEventListener("click", () => {
      index = (index - 1) % images.length;
      imgEl.src = images[index];
    }); 
