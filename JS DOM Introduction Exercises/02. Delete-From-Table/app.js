function deleteByEmail() {
  let inputElement = document.getElementsByName("email")[0].value;
  let emailElement = document.querySelectorAll("tbody tr td:nth-child(2)");
  let result = document.getElementById("result");

  let search = Array.from(emailElement).find(
    (x) => x.textContent == inputElement
  );

  if (search) {
    search.parentElement.remove();
    result.textContent = "Deleted.";
  } else {
    result.textContent = "Not found.";
  }
}
