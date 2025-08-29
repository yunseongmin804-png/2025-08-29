// script.js
document.addEventListener("DOMContentLoaded", function() {
  const checks = document.querySelectorAll(".check");
  checks.forEach(check => {
    check.addEventListener("click", function() {
      const parent = this.parentNode;
      // 토글: 완료 ↔ 미완료
      if (parent.style.textDecoration === "line-through") {
        this.style.color = "#ccc";       // 체크 색상
        parent.style.color = "#000";     // 글자 색 원래대로
        parent.style.textDecoration = "none"; // 취소선 제거
      } else {
        this.style.color = "#ccc";
        parent.style.color = "#ccc";
        parent.style.textDecoration = "line-through";
      }
    });
  });
});
