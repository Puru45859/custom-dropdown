const dropdown = document.getElementById('dropdown');
const selected = document.getElementById('selected');
const options = document.querySelectorAll('.option');

dropdown.addEventListener('click', function () {
  this.classList.toggle('open');
});

options.forEach(option => {
  option.addEventListener('click', function (e) {
    e.stopPropagation(); // prevent dropdown from closing before selection
    selected.textContent = this.textContent;

    options.forEach(opt => opt.classList.remove('selected-option'));
    this.classList.add('selected-option');

    dropdown.classList.remove('open');
  });
});

document.addEventListener('click', function (e) {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});
