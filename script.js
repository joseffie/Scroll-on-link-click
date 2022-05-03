const links = document.querySelectorAll('a[data-goto]');
if (links.length > 0) {
	links.forEach(link => {
		link.addEventListener('click', scrollingOnClick);
  });

	function scrollingOnClick(e) {
		const link = e.target;
		if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
			const gotoBlock = document.querySelector(link.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

			// If the link is clicked while opening the burger menu.
      // Write the script for the burger menu yourself.
			if (
				burger.classList.contains('_active') ||
				nav.classList.contains('_active')
			) {
				nav.classList.remove('_active');
				burger.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			});
			e.preventDefault();
		}
	}
}
