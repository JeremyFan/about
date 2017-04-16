document.querySelector('.icon-picture').onclick = function() {
	var bg = document.querySelector('.bg');
	var cover = document.querySelector('.cover');
	var content = document.querySelector('.content');

	if (bg.className === 'bg') {
		bg.classList.add('blur')
		cover.classList.add('shadow');
		content.style.opacity = '1';
	} else {
		bg.classList.remove('blur');
		cover.classList.remove('shadow');
		content.style.opacity = '0';
	}
}