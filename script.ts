const usernameInput = document.getElementById("username") as HTMLInputElement;
const submitButton = document.getElementById("submit") as HTMLButtonElement;

usernameInput.focus();
submitButton.addEventListener("click", handleClick);

function handleClick(e: Event) {
  e.preventDefault();
  const message = `${usernameInput.value}님 반갑습니다!`;
  alert(message);
}
