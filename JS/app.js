// JavaScript Document


const links = document.querySelectorAll('.link');


links.forEach(links => {
	link.addEventListener('click', () => {
		links.forEach(ele => ele.classList.remove('active'));
		link.classList.add('active');
	})
})

// creating dynamic project card

const projectConatiner = document.querySelector('.project-container');

project.forEach(project => { 
		projectConatiner.innerHTML += `
<div class="project-card" data-tags="#all, ${project.tags}">
<img src="img/${project.image}" alt="">
      <div class="content">
        <h1 class="project-name">${Project one}</h1>
        <span class="tags">${project.tags}</span>
    </div>
  </div>
	`;
})




const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
let id = filterBtn.getAttribute('id');
let projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
	if(card.getAttribute('data-tags').includes(id)){
		card.classList.remove('hide');
} else{
		card.classList.add('hide');

}
})

filters.forEach(btn => btn.classList.remove('active'));
filterBtn.classList.add('active');


})