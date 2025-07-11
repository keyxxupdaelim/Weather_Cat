# Weather_Cat

**Weather_Cat**은 사용자의 위치를 기반으로 날씨 정보를 제공하고, 그에 맞는 귀여운 고양이 캐릭터를 보여주는 웹 애플리케이션입니다.  
사용자에게 날씨 확인의 재미와 직관적인 경험을 제공합니다.

---

##  프로젝트 개요

- 위치 기반 날씨 API와 외부 서비스(OpenWeatherMap)를 연동해 실시간 날씨 데이터를 제공
- 날씨 조건에 따라 다양한 고양이 캐릭터 이모티콘을 보여줘 사용자 경험을 개선
- 백엔드 및 API 연동 로직을 담당하며 전체 기능의 동작 흐름을 설계 및 구현

---

##  담당 역할 (백엔드)

- **OpenWeatherMap API** 연동을 통해 지역 날씨 정보 불러오기
- **Geolocation API**와 연동해 사용자 현재 위치 추출 및 좌표 처리
- 날씨 데이터(예: 비, 맑음, 눈 등)를 분류하여 프론트엔드에 전달하는 로직 구현
- 고양이 캐릭터 상태와 매칭되는 날씨 정보 조건 분기 처리
- **비동기 처리 및 예외 상황**(위치 권한 거부 등) 대응 로직 구현

---

##  기술 스택

- **HTML/CSS** – 기본적인 구조 설계 및 스타일링 보조
- **JavaScript (Vanilla JS)** – 날씨 API 통신, DOM 조작
- **Geolocation API** – 위치 감지
- **OpenWeatherMap API** – 외부 날씨 정보 수집
- **GitHub** – 버전 관리 및 협업

---

##  실행 방법

1. **클론**
```bash
git clone https://github.com/keyxxupdaelim/Weather_Cat.git
