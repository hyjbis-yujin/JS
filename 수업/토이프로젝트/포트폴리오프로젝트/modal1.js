/**
 * 모달 manage class
 *
 * 주요 기능:
 *  - 데이터 관리
 *  - 모달 생성 및 표시
 *  - 모달 열기/닫기 제어
 *  - 키모드 단축키 지원(ESC 키)
 *  - 배경 클릭으로 닫기
 */
class ModalMaanger {
  constructor() {
    this.modals = new Map();

    this.currentModal = null;

    this.projectData = this.initializeProjectData();

    // 이벤트 리스너
    this.setupModalTriggers();
  }

  initializeProjectData() {
    return {
      1: {
        title: "E-Commerce Platform",
        description:
          "심층적인 사용자 경험과 원활한 결제 프로세스를 갖춘 최첨단 전자상거래 플랫폼입니다. 이 프로젝트는 최신 웹 기술을 활용하여 빠른 성능과 확장 가능한 아키텍처를 제공합니다.",
        features: [
          "실시간 재고 관리 시스템",
          "다양한 결제 옵션 통합",
          "관리자 대시보드",
          "사용자 리뷰 및 평가 시스템",
          "반응형 디자인",
          "고급 검색 필터",
          "장바구니 및 위시리스트 기능",
          "안전한 주문 추적",
        ],
        tech: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      },
      2: {
        title: "Dashboard App",
        description:
          "실시간 데이터 분석과 아름다운 시각화를 제공하는 강력한 대시보드 애플리케이션입니다. 다양한 차트와 그래프를 통해 비즈니스 인사이트를 제공합니다.",
        features: [
          "실시간 데이터 업데이트",
          "인터랙티브 차트 및 그래프",
          "사용자 정의 대시보드",
          "데이터 내보내기 기능",
          "알림 시스템",
          "다크 모드 지원",
          "데이터 필터링 및 검색",
          "모바일 친화적 인터페이스",
        ],
        tech: ["Vue.js", "Chart.js", "Firebase", "Vuetify"],
      },
      3: {
        title: "Social Media App",
        description:
          "실시간 커뮤니케이션과 소셜 네트워킹을 결합한 혁신적인 소셜 미디어 플랫폼입니다. 사용자들이 실시간으로 연결하고 상호작용할 수 있습니다.",
        features: [
          "실시간 채팅 및 메시징",
          "게시물 공유 및 댓글 시스템",
          "라이브 알림",
          "사진 및 동영상 업로드",
          "사용자 프로필 관리",
          "친구 및 팔로우 시스템",
          "해시태그 및 트렌딩 기능",
          "내용 기반 추천 시스템",
        ],
        tech: ["React", "Socket.io", "PostgreSQL", "AWS S3"],
      },
      4: {
        title: "Task Management",
        description:
          "팀 협업을 위한 포괄적인 프로젝트 관리 도구로, 작업 추적, 팀 커뮤니케이션, 진행 상황 모니터링을 한 곳에서 제공합니다.",
        features: [
          "칸반 보드 및 리스트 보기",
          "실시간 팀 협업",
          "파일 첨부 및 공유",
          "마일스톤 및 마감일 관리",
          "진행률 추적",
          "댓글 및 토론 기능",
          "사용자 역할 및 권한",
          "Git 통합",
        ],
        tech: ["Angular", "RxJS", "Docker", "MySQL", "JWT"],
      },
    };
  }

  /**
   * 트리거 설정
   *
   * 1. 프로젝트 보기 클릭시 -> 모달 열길
   * 2. 모달 배경 클릭 -> 모달 닫기
   * 3. ESC 클릭 -> 모달 닫기
   */
  setupModalTriggers() {
    // 프로젝트 보기 버튼 클릭시 모달 열기
    // btn-view를 클릭 했을 때 이벤트를 감지해야한다.
    document.querySelectorAll(".btn-view").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        console.log(e);
        const projectId = e.target.getAttribute("data-project");
        this.openModal(projectId);
      });
    });

    // [todo]: 배경 클릭시 모달 닫기
    // [todo]: ESC 입력시 모달 닫기
  }

  /**
   * 모달 생성
   *
   * @param {number} projectId
   */
  createModal(projectId) {
    // 프로젝트 번호에 맞는 데이터 가져오기
    const project = this.projectData[projectId];

    // validation
    if (!project) return null;

    // 모달 생성
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.id = `modal-${projectId}`;

    modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">${project.title}</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-image"></div>
                    <p class="modal-description">${project.description}</p>
                    <h3 style="margin-bottom: 15px;">주요 기능:</h3>
                    <ul class="modal-features">
                        ${project.features
                          .map((feature) => {
                            return `<li>${feature}</li>`;
                          })
                          .join("")}
                    </ul>
                    <div style="margin-top: 30px;">
                        <h3 style="margin-bottom: 15px;">기술 스택:</h3>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${project.tech
                              .map((tech) => `<span class="tag">${tech}</span>`)
                              .join("")}
                        </div>
                    </div>
                </div>
            </div>
        `;

    // [todo]: 모달 닫기 버튼에 action 넣기

    return modal;
  }

  /**
   * 모달을 열때 이전에 생성된 모달이 있으면 그거 사용 아니면 만들어서 사용한다.
   * @param {*} projectId
   */
  openModal(projectId) {
    let modal = this.modals.get(projectId);

    if (!modal) {
      modal = this.createModal(projectId);
      if (modal) {
        // DOM에 body에 마지막에 요소로 추가
        document.body.appendChild(modal);

        // 객체의 map으로 관리한다.
        this.modals.set(projectId, modal);
      }
    }

    this.currentModal = modal;
    modal.style.display = "flex";

    setTimeout(() => {
      modal.classList.add("active");
    }, 10);

    // body 스크롤 잠금
  }

  closeModal() {
    if (this.currentModal) {
      this.currentModal.classList.remove("active");

      setTimeout(() => {
        if (this.currentModal) {
          this.currentModal.style.display = "none";
          this.currentModal = null;
        }
      }, 300);
    }

    // body 스크롤 복원
  }
}

let modalMaanger;

document.addEventListener("DOMContentLoaded", () => {
  modalMaanger = new ModalMaanger();
});

// 파일 저장
/* 
1.git status
2.git add .
3.git commit -m "모달 class생성"
4.git add .
5.git commit -m "모달 트리거 메소드 생성"
6.git add .
7.git commit -m "모달 생성 메소드 생성"
8.git push git에 올리기
 */

// map : 배열을 순회해서ㅏ 수정을 하고 배열로 반환
// join : 합쳐서 문자열로 반환 (''빈칸으로 구분)

/* 숙제 */
// todo : 배경 클릭 시 모달 닫기
// todo : ESC 클릭 시 모달 닫기
// 주석 달기
// 깃에 올리기
