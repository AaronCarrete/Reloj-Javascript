const container = document.querySelector('.hour');
const btn = document.querySelector('.constop');
let id = 0;

const updateHour = setInterval(() => {
	const date = new Date();
	container.innerHTML = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
}, 1000);


btn.onclick = e => {
	clearInterval(1);
	btn.innerText = 'Continue';
	id++; 
	e.preventDefault();
};


