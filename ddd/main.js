// -------------------------------
// localStorage에 글쓴이 데이터 저장
// -------------------------------
const authors = ["홍길동", "김철수", "이영희"];
if (!localStorage.getItem("authors")) {
  localStorage.setItem("authors", JSON.stringify(authors));
}

// select에 옵션 추가
const authorSelect = document.getElementById("author");
const savedAuthors = JSON.parse(localStorage.getItem("authors"));
savedAuthors.forEach(name => {
  const option = document.createElement("option");
  option.value = name;
  option.textContent = name;
  authorSelect.appendChild(option);
});

// -------------------------------
// Form 제출 이벤트
// -------------------------------
const form = document.getElementById("postForm");
form.addEventListener("submit", function (e) {
  if (!this.checkValidity()) {
    e.preventDefault();
    alert("입력값을 확인해주세요!");
  } else {
    e.preventDefault();
    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());
    data.category = formData.getAll("category"); // 체크박스 여러 개
    console.log("제출 데이터:", JSON.stringify(data, null, 2));
    alert("게시물이 등록되었습니다!");
  }
});

// -------------------------------
// 엔터키 입력 시 submit 트리거
// -------------------------------
form.addEventListener("keydown", function (e) {
  if ((e.key === "Enter" || e.keyCode === 13) && e.target.tagName !== "TEXTAREA") {
    e.preventDefault(); // textarea에서는 줄바꿈 허용
    form.requestSubmit(); // 최신 브라우저용
  }
});

// -------------------------------
// textarea blur 이벤트
// -------------------------------
const textarea = document.getElementById("content");
textarea.addEventListener("blur", function () {
  if (this.value.trim() !== "") {
    alert("환영합니다!");
  }
});

// -------------------------------
// 페이지 로드 완료 후 제목 입력창에 자동 포커스 주기
// -------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const titleInput = document.getElementById("title1");
  if (titleInput) {
    titleInput.focus(); // 커서 깜박임
  }
});
