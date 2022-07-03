const scrollLinks = document.querySelectorAll('a[data-scroll-link]');
if (scrollLinks.length > 0) {
  scrollLinks.forEach((scrollLink) => {
    scrollLink.addEventListener('click', scrollingOnClick);
  });

  function scrollingOnClick(e) {
    const link = e.target;
    // const headerHeight = document.querySelector('.header').offsetHeight;

    if (link.dataset.scrollLink && document.querySelector(link.dataset.scrollLink)) {
      const gotoBlock = document.querySelector(link.dataset.scrollLink);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;
      // If your header has a fixed position, use the under value
      // const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth',
      });
      e.preventDefault();
    }
  }
}
