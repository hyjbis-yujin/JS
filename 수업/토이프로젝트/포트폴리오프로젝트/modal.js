/**
 * 모달 manage class
 *
 * 주요 기능:
 *  - 데이터 관리
 *  - 모달 생성 및 표시
 *  - 모달 열기/닫기 제어
 *  - 키모드 단축키 지원(ESC 키)
 *  - 배경 클릭으로 닫기 b
 */
class ModalManager {
  // 모달 관리 클래스
  constructor() {
    // 객체 초기화(기본값 설정)
    this.modals = new Map(); // 모달의 정보를 저장할 Map 객체 생성

    this.currentModal = null; // 열려있는 모달을 저장 => 처음엔 모달이 안 열려있어서 null로 초기화

    this.projectData = this.initializeProjectData(); // 프로젝트 데이터를 불러오는 메서드를 호출해서 결과를 변수에 저장
  }
}
