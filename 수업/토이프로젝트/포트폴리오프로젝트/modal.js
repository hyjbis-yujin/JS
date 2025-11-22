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
    this.modals = new Map(); // 모달의 정보를 저장할 Map 객체 생성

    this.currentModal = null; // 열려있는 모달을 저장 => 처음엔 모달이 안 열려있어서 null로 초기화

    this.projectData = this.initializeProjectData(); // 프로젝트 데이터를 불러오는 메서드를 호출해서 결과를 변수에 저장

    // 이벤트 리스너
    this.setupModalTriggers();
  }

  initializeProjectData() {
    // project-datad(속성)의 값에 데이터를 담은 메서드
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

  setupModalTriggers() {
    // 모달을 열기위한 트리거(버튼) 설정 메서드
    // 프로젝트 보기 버튼 클릭시 모달 열기
    // btn-view를 클릭 했을 때 이벤트를 감지해야한다.
    document.querySelectorAll(".btn-view").forEach((btn) => {
      // 모든 .btn-view를 선택해서 각각에 클릭 이벤트리스너를 추가
      btn.addEventListener("click", (e) => {
        //e는 이벤트 객체(현재 클릭된 요소에 대한 정보를 담음)
        console.log(e);
        const projectId = e.target.getAttribute("data-project"); // 이벤트 타겟(클릭된 버튼)에 data-project 속성값을 가져와서 변수에 저장 -> 어떤 프로젝트의 모달이 열렸는 지 확인을 위함
        this.openModal(projectId); // 이벤트 타겟의 data-project속성 값을 openModal 메서드에 전달해서 해당 값에 맞는 프로젝트 내용을 찾아 모달에 표시 함
      });
    });
  }
}
