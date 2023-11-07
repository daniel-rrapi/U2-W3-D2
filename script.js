window.addEventListener("DOMContentLoaded", () => {
  const btnReset = document.getElementById("delete");
  const btnAdd = document.getElementById("add");
  const txtInput = document.getElementById("nome");
  const form = document.getElementById("form1");

  btnReset.onclick = () => {
    localStorage.removeItem("Nome");
    txtInput.value = "";
  };

  const saveData = (event) => {
    event.preventDefault();
    localStorage.setItem("Name", txtInput.value);
  };

  form.onsubmit = saveData;
});
