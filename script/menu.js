
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".m_menu > a").forEach(menu => {
      menu.addEventListener("click", function (event) {
        event.preventDefault(); // 기본 이동 방지

        let target = event.target;
        
        // 만약 클릭된 요소가 .fa-angle-down이면, 가장 가까운 a 태그를 찾아 적용
        if (target.classList.contains("fa-angle-down")) {
          target = target.closest("a");
        }

        let parentLi = target.closest(".m_menu");
        let subMenu = parentLi.querySelector(".sub");
        let icon = parentLi.querySelector(".fa-angle-down"); // 회전할 아이콘 선택

        if (subMenu) {
          let isOpen = subMenu.classList.contains("active");

          // 모든 서브메뉴 닫기 및 아이콘 초기화 (여러 개 열고 싶다면 주석 처리)
          document.querySelectorAll(".sub").forEach(sub => {
            sub.classList.remove("active");
            sub.style.maxHeight = null;
          });
          document.querySelectorAll(".fa-angle-down").forEach(icon => {
            icon.classList.remove("rotated");
          });

          // 현재 클릭한 메뉴만 열기/닫기
          if (!isOpen) {
            subMenu.classList.add("active");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px"; // 부드러운 열림
            icon.classList.add("rotated"); // 아이콘 180도 회전
          }
        }
      });
    });
  });
