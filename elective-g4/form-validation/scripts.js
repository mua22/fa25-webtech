console.log("scripts.js loaded");

function validateForm(e) {
  e.preventDefault(); // Prevent form submission for validation
  const term = document.getElementById("term").value;
  const termNode = document.getElementById("term");
  if (term.trim() === "") {
    // alert("Search term cannot be empty");
    termNode.style.border = "2px solid red";
    return false;
  }
  return true;
}

function binding() {
  document.getElementById("gForm").onsubmit = validateForm;
}

// setTimeout(binding, 1000); // big No

window.onload = binding;
