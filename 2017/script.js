document.querySelector('.icon-picture').onclick = function() {
	var bg = document.querySelector('.bg');
	var content = document.querySelector('.content');

	if (bg.className === 'bg') {
		bg.classList.add('blur')
		content.style.opacity = '1';
	} else {
		bg.classList.remove('blur');
		content.style.opacity = '0';
	}
}