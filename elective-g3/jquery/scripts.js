console.log("script loaded");

function bindings() {
  console.log("binding called");
  let btnSort = document.getElementById("btSort");
  btnSort.onclick = handleSort;

  $("#studentList").on("click", "li", function () {
    $(this).remove();
  });

  $("#btnAdd").on("click", function () {
    let newStudent = $("#newStudent").val();
    if (newStudent) {
      $("#studentList").append("<li>" + newStudent + "</li>");
      $("#newStudent").val("");
    }
  });
}
window.onload = bindings;

function handleSort() {
  let studentList = document.getElementById("studentList");
  //   alert("btn clicked");
  let names = [];
  var lis = document.querySelectorAll("#studentList li");
  for (let index = 0; index < lis.length; index++) {
    const element = lis[index];
    names.push(element.innerHTML);
  }
  names.sort();
  console.log(names);
  studentList.innerHTML = "";
  for (let index = 0; index < names.length; index++) {
    const element = names[index];
    studentList.innerHTML += "<li>" + element + "</li>";
  }
}
