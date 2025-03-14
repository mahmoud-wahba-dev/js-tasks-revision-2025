let showMsgBtn = document.getElementById("show_msg_btn");
let result = document.getElementById("result");

showMsgBtn.addEventListener("click", function (e) {
  let name = document.getElementById("name").value.trim();
  let age = document.getElementById("age").value.trim();
  let hobby = document.getElementById("hobby").value.trim();

  if (name == "" || age == "" || hobby == "") {
    result.parentElement.classList.add("bg-danger");
    result.parentElement.classList.remove("bg-info");

    result.innerHTML = "برجاء مليء جميع الحقول";
  } else {
    e.preventDefault();
    result.parentElement.classList.add("bg-info");
    result.parentElement.classList.remove("bg-danger");

    result.innerHTML = ` اهلا يا ${name} عمرك ${age} و هوايتك المفضله هي ${hobby} `;
  }
});
