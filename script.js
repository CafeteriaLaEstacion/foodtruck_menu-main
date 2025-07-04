function showPage(pageNumber) {
  const pages = document.querySelectorAll('.menu-page');
  const footer = document.getElementById('site-footer');
  const header = document.querySelector('header'); // 👉 referencia al header

  pages.forEach((page, index) => {
    if (index === pageNumber - 1) {
      page.classList.remove('hidden');
    } else {
      page.classList.add('hidden');
    }
  });

  // Mostrar el footer solo en la página principal (page 1)
  if (pageNumber === 1) {
    footer.style.display = 'flex';
    header.classList.remove('hidden'); // 👉 mostrar header
  } else {
    footer.style.display = 'none';
    header.classList.add('hidden'); // 👉 ocultar header
  }
  window.scrollTo(0, 0);
}