(function () {
  var year = document.getElementById('current-year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }
})();
