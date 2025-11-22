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
class ModalManager {
  // 모달 관리 클래스
  constructor() {
    // 객체 초기화(기본값 설정)
    this.modals = new Map(); // 모달의 정보를 저장할 Map 객체 생성 -> 키(key), 값(value)형태로 데이터를 저장됨

    this.currentModal = null; // 열려있는 모달을 저장 => 처음엔 모달이 안 열려있어서 null로 초기화

    this.projectData = this.initializeProjectData(); // 프로젝트 데이터를 불러오는 메서드를 호출해서 결과를 변수에 저장

    // 이벤트 리스너
    this.setupModalTriggers();
  }

  initializeProjectData() {
    // projectId(1,2,3,4) 에 해당하는 프로젝트 설명/기능/기술스택 정보를 반환하는 메서드
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
   * 1. 프로젝트 보기 클릭시 -> 모달 열기
   * 2. 모달 배경 클릭 -> 모달 닫기
   * 3. ESC 클릭 -> 모달 닫기
   */

  // [todo]: 배경 클릭시 모달 닫기
  // [todo]: ESC 입력시 모달 닫기

  // 모달 트리거(버튼) 설정 메서드

  setupModalTriggers() {
    // btn-view를 클릭 했을 때 이벤트를 감지해야한다.
    document.querySelectorAll(".btn-view").forEach((btn) => {
      // 모든 .btn-view를 선택해서 각각에 클릭 이벤트 추가
      btn.addEventListener("click", (e) => {
        //e는 이벤트 객체(현재 클릭된 요소, 정보를 담음)
        console.log(e);
        const projectId = e.target.getAttribute("data-project"); // 이벤트 타겟(클릭된 버튼)에 data-project 속성 값을 가져와서 변수에 저장 -> 어떤 프로젝트를 열어야하는 지 구분하기 위함
        this.openModal(projectId); // projectId을 openModal 메서드에 전달해서 해당 값에 맞는 프로젝트 내용을 찾아 모달을 화면에 표시
      });
    });
  }

  /**
   * 모달 생성
   *
   * @param {number} projectId  // 메서드의 매개변수를 숫자타입으로 사용을 명시
   */
  createModal(projectId) {
    // 모달생성 메서드
    // 프로젝트 번호에 맞는 데이터 가져오기
    const project = this.projectData[projectId]; // projectData(프로젝트 정보를 담음)에서 해당하는 프로젝트 정보를 찾아 변수에 저장

    if (!project) return null; // 만약 해당 이벤트 타겟의 정보가 없으면 프로젝트 데이터가 없으면 빈값 반환해 더 이상 처리하지 않음

    const modal = document.createElement("div"); // html문서에 div를 생성해서 변수에 저장 -> 모달을 담기 위함
    modal.className = "modal"; // 생성한 div의 클래스 이름추가 -> styling을 위함
    modal.id = `modal-${projectId}`; // 생성한 div의 id추가 modal-{이벤트 타겟 속성 값} -> 모달 식별용

    // div(모달)의 내부 html 구조 설정
    modal.innerHTML = ` 
            <div class="modal-content">
                <div class="modal-header">
                    <h2 class="modal-title">${
                      project.title /*현재 선택된 이벤트타겟의 프로젝트 제목*/
                    }</h2>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="modal-image"></div>
                    <p class="modal-description">${
                      project.description /* 현재 선택된 이벤트 타겟의 프로젝트 설명*/
                    }</p>
                    <h3 style="margin-bottom: 15px;">주요 기능:</h3>
                    <ul class="modal-features">
                        ${project.features // 현재 선택된 이벤트 타겟의 속성에 있는 주요기능 배열을
                          .map((feature) => {
                            // 각각 순회하면서 매개변수에 저장
                            return `<li>${feature}</li>`; // li태그로 감싸서 반환
                          }) // 배열을 하나의 문자열로 구분자(쉼표) 없이 합함
                          .join("")} 
                    </ul>
                    <div style="margin-top: 30px;">
                        <h3 style="margin-bottom: 15px;">기술 스택:</h3>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                            ${project.tech // 현재 선택된 이벤트 타겟의 속성에 있는 기술스택 배열을
                              .map((tech) => `<span class="tag">${tech}</span>`) // 각각 순회하면서 매개변수에 저장 -> span태그로 감싸서 배열을 구분자 없이 문자열로 반환
                              .join("")}
                        </div>
                    </div>
                </div>
            </div>
        `;

    // [todo]: 모달 닫기 버튼에 action 넣기

    return modal; // 완성된 모달을 반환
  }

  /**
   * 모달 오픈 메서드
   *
   * 모달을 열때 이전에 생성된 모달이 있으면 그거 사용 아니면 만들어서 사용
   * @param {*} projectId // 메서드의 매개변수를 모든 타입 사용을 명시
   */
  openModal(projectId) {
    let modal = this.modals.get(projectId); // Map(this.modals)에 projectId를 key로 저장된 모달을 가져옴

    if (!modal) {
      // 만약 이전에 생성된 모달이 없으면
      modal = this.createModal(projectId); // 생성모달 메서드를 호출해서 모달을 생성
      if (modal) {
        // 모달이 생성됐으면
        document.body.appendChild(modal); // 생성된 모달을 html문서의 body태그의 마지막 자식요소로 추가

        this.modals.set(projectId, modal); // 생성된 모달의 정보(속성의 값, 생성된 모달(document.createElement("div")))를 map객체에 추가
      }
    }

    this.currentModal = modal; // 현재 열려있는 모달을 메서드에 저장
    modal.style.display = "flex"; // 모달의 display 스타일 속성을 none에서 flex로 변경 -> 모달이 화면에 보여지게 됨

    setTimeout(() => {
      modal.classList.add("active"); // modal에 class추가
    }, 10); // 0.01초 후에 실행

    // body 스크롤 잠금
  }

  /* 모달 닫기 메서드
   */
  closeModal() {
    if (this.currentModal) {
      // 만약 열려있는 모달이 있으면
      this.currentModal.classList.remove("active"); // 열려있는 모달의 해당 class를 제거

      setTimeout(() => {
        if (this.currentModal) {
          // 만약 열려있는 모달이 있으면
          this.currentModal.style.display = "none"; // 모달의 display 스타일 속성을 none으로 변경 -> 모달이 화면에서 보이지 않게 됨
          this.currentModal = null; // 열려있는 모달 상태 리셋 (아무것도 안 열린 상태로)
        }
      }, 300); // 0.3초 후에 실행
    }

    // body 스크롤 복원
  }
}

let modalMaanger; // ModalManager 인스턴스를 저장하기 위한 변수 (전역에서 접근 가능)

document.addEventListener("DOMContentLoaded", () => {
  // html문서의 모든 요소가 로드되고 이벤트 실행 -> 이벤트요소가 아직 로드되지 않은 상태에서 이벤트가 실행되는 걸 방지
  modalMaanger = new ModalManager(); // ModalManager 클래스의 객체를 생성해서 변수에 저장
});
