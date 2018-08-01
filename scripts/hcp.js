document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('dropdown').addEventListener("click", function() {
  	document.querySelector('.dropdown-content').classList.toggle('show');
  });
});