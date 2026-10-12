const searchInp = document.querySelector('#search');
const students = document.querySelectorAll('.student');
const noResults = document.querySelector('#no-results');

searchInp.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  let visible = 0;
  students.forEach(s => {
    const name = s.dataset.name.toLowerCase();
    if (name.includes(term)) {
      s.style.display = '';
      visible++;
      // Bonus: highlight match
      if (term) {
        const rx = new RegExp(`(${term})`, 'gi');
        s.innerHTML = s.dataset.name.replace(rx, '<mark>$1</mark>')
          + ' — ' + s.textContent.split('—')[1].trim();
      } else {
        s.textContent = s.dataset.name + ' — '
          + s.textContent.split('—')[1].trim();
      }
    } else {
      s.style.display = 'none';
    }
  });
  noResults.style.display = visible === 0 ? 'block' : 'none';
});