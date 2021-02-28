const button = document.querySelector('.hide');
const secondThirdYear = button.parentElement.nextElementSibling;
secondThirdYear.style.display='none';
const firstYear = button.parentElement.nextElementSibling.nextElementSibling;
const span = button.firstElementChild;
button.addEventListener('click',()=>{
	if(secondThirdYear.style.display==="none")
	{
		secondThirdYear.style.display="flex";
		firstYear.style.display="flex";
		span.classList.remove('fa-angle-down');
		span.classList.add('fa-angle-up');
		button.title="collapse";
	}
	else
	{
		secondThirdYear.style.display="none";
		firstYear.style.display="none";
		span.classList.remove('fa-angle-up');
		span.classList.add('fa-angle-down');
		button.title="expand";
	}
});
let WebTeamHeading = document.querySelector("#WebTeamHead");
WebTeamHeading.onclick = () => {
	button.click();
}