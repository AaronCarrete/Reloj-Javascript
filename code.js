window.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.hour');
	const btn = document.querySelector('.constop');
	// let id = 0;

	const updateHour = setInterval(() => {
		const date = new Date();
		container.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
		let id = 1;
	}, 1000);


	btn.addEventListener('click', e => {

		if (btn.innerText === 'Continue') {
			const updateHour = setInterval(() => {
			const date = new Date();
			container.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
			}, 1000);
			let id = 1;
			btn.innerText = 'Stop';
		} else if (btn.innerText === 'Stop') {
			for (i=0; i<100; i++) {
    			window.clearInterval(i);
    			btn.innerText = 'Continue';
			}

			
		}

		e.preventDefault();
	});


})