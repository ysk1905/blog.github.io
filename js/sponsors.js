try{
	// Updating title of page to include "Sponsors"
	document.title += " - Sponsors"; 
	
	// Referring to several components such as filter-buttons, sponsor cards, page-header, footer-message using variables
	let headings = document.getElementsByClassName("page-header");  
	let sponsor_divisions = document.getElementsByClassName("sponsor-head");	
	let btn_all = document.getElementById("display_all");
	// let btn_title = document.getElementById("display_title");
	// let btn_media = document.getElementById("display_media");
	let btn_knowledge = document.getElementById("display_knowledge");
	let btn_present = document.getElementById("display_present");
	let btn_past = document.getElementById("display_past");
	// let titlecards = document.getElementsByClassName("title-sponsor-head");
	// let mediacards = document.getElementsByClassName("media-sponsor-head");
	let knowledgecards = document.getElementsByClassName("knowledge-sponsor-head");
	let presentcards = document.getElementsByClassName("present-sponsor-head"); 
	let pastcards = document.getElementsByClassName("past-sponsor-head"); 
	//let title_card_elements = document.getElementsByClassName("title-sponsor");
	//let media_card_elements = document.getElementsByClassName("media-sponsor");
	//let knowledge_card_elements = document.getElementsByClassName("knowledge-sponsor");
	let past_card_elements = document.getElementsByClassName("past-sponsor");
	let buttonbox = document.getElementsByClassName("filter-buttons-box");
	let past_viewtoggle = document.getElementsByClassName("view-toggle");
	let Past_ListView_Toggle=document.getElementById("past-sponsor-listview");
	let Past_GridView_Toggle=document.getElementById("past-sponsor-gridview");
	//let header = document.getElementById("page-main-header");
	let footer = document.getElementsByTagName("footer");

	// Sponsors HomePage URLs (their web presence)
	Sponsors_HomePage_Data = {
		// Top Sponsors First //
		"#SSI-Edu":'https://ssiedu.in/', 
		"#AAI-Way":'http://www.aaiway.com/', 
		
		// Past Sponsors Next //
		"#AIC-Inspire-Foundation":'http://aic-prestigeinspirefoundation.in/',
		"#Anherb-Natural":'https://anherb.com/',
		"#Big-FM":'https://bigfmindia.com/', 
		"#Golds-Gym":'https://goldsgym.in/',
		"#Indore-Meri-Jaan":'https://www.instagram.com/indore_meri_jaan/',
		"#Made-Easy":'https://www.madeeasy.in/',
		"#Manojs-Salon":'https://manojs-unisex-salon.business.site/', // 'https://www.instagram.com/explore/locations/343602639514748/manojs-unisex-salon/?hl=en',
		"#Mezzanine":'https://www.instagram.com/explore/locations/361950160842877/mezzanine-the-coffee-floor/?hl=en',
		"#ODE-Collection":'https://www.instagram.com/ode_collection/',
		"#Pizza-Express":'https://www.pizzaexpress.com/',
		"#Rolls-Mania":'https://www.rollsmania.com/',
		"#Shear-Genius":'http://www.sheargenius.co.in/',
		"#Sports-World":'https://www.instagram.com/explore/locations/903101623068843/sports-world/?hl=en',
		"#Study-Metro":'https://www.studymetro.com/',
		"#Via-Indore":'https://www.instagram.com/explore/locations/373163543425016/via-indore-restaurant/?hl=en',	
		"#Yellow-Diamond":'http://www.yellowdiamond.in/', 

		// More Links of Top Sponsors
			// Yellow-Diamond
		// "#Yellow-Diamond-Facebook":'https://www.facebook.com/YellowDiamondIndia/',
		// "#Yellow-Diamond-Instagram":'https://www.instagram.com/YellowDiamondIndia/',
		// "#Yellow-Diamond-Twitter":'https://twitter.com/YellowDiamondIN',
		// "#Yellow-Diamond-Youtube":'https://www.youtube.com/YellowDiamondIndia',
			// Big-FM
		// "#Big-FM-Facebook":'https://www.facebook.com/bigfmindia/',
		// "#Big-FM-Instagram":'https://www.instagram.com/bigfmindia/?hl=en',
		// "#Big-FM-LinkedIn":'https://www.linkedin.com/company/bigfmindia',
		// "#Big-FM-Twitter":'https://twitter.com/bigfmindia',
			// Indore Meri Jaan 
		// "#Indore-Meri-Jaan-Instagram":'https://www.instagram.com/indoremerijaan_imj/',
		// "#Indore-Meri-Jaan-Youtube":'https://www.youtube.com/channel/UCG1tN7uxqvskIXmAWovJ65g',
			// AAI Way 
		"#AAI-Way-Facebook":'https://www.facebook.com/aaiway/',
		"#AAI-Way-Twitter":'https://twitter.com/aaiway2',
		"#AAI-Way-LinkedIn":'https://linkedin.com/company/aaiway1',
	
	}

	// Adding a bullet at the beginning of each heading, and adding colon as a suffix of each heading
	for(i = 0; i < headings.length; i++){
		headings[i].innerHTML=`<span class="title-bullet"></span>`+headings[i].innerHTML;
		headings[i].innerHTML+=": ";
	}

	// Adding a line break at the end of footer
	for (j = 0; j < footer.length; j++) {
		footer[j].outerHTML = "<br/>" + footer[j].outerHTML;
	}

	// Function to display all our partners (that are, sponsors) 
	function showPartners(){			
		btn_all.classList.add("btn-dark");
		btn_all.classList.remove("btn-white");
		btn_past.setAttribute("aria-checked", "true");
		btn_all.setAttribute("tabindex", "-1");
		// btn_media.classList.remove("btn-dark");
		// btn_media.classList.add("btn-white");
		// btn_media.setAttribute("aria-checked", "false");
		// btn_media.setAttribute("tabindex", "0");
		// btn_title.classList.remove("btn-dark");
		// btn_title.classList.add("btn-white");
		// btn_title.setAttribute("aria-checked", "false");
		// btn_title.setAttribute("tabindex", "0");
		btn_knowledge.classList.replace("btn-dark", "btn-white");
		btn_knowledge.setAttribute("aria-checked", "false");
		btn_knowledge.setAttribute("tabindex", "0");
		btn_present.classList.replace("btn-dark", "btn-white");
		btn_present.setAttribute("aria-checked", "false");
		btn_present.setAttribute("tabindex", "0");
		btn_past.classList.remove("btn-dark");
		btn_past.classList.add("btn-white");
		btn_past.setAttribute("aria-checked", "false");
		btn_past.setAttribute("tabindex", "0");
		// for (i=0; i<mediacards.length; i++){ mediacards[i].style.display = "block"; }
		// for (i=0; i<titlecards.length; i++){ titlecards[i].style.display = "block"; }
		for (i=0; i<knowledgecards.length; i++){ knowledgecards[i].style.display = "block"; }
		for (i=0; i<presentcards.length; i++){ presentcards[i].style.display = "block"; }
		for (i=0; i<pastcards.length; i++){ pastcards[i].style.display = "block"; }
	}
	
	// Function to display only Title sponsors 
	// function showTitlePartners(){			
	// 	btn_all.classList.remove("btn-dark");
	// 	btn_all.classList.add("btn-white");
	// 	btn_all.setAttribute("aria-checked", "false");
	// 	btn_all.setAttribute("tabindex", "0");
	// 	// btn_media.classList.remove("btn-dark");
	// 	// btn_media.classList.add("btn-white");
	// 	// btn_media.setAttribute("aria-checked", "false");
	// 	// btn_media.setAttribute("tabindex", "0");
	// 	btn_title.classList.add("btn-dark");
	// 	// btn_title.classList.remove("btn-white");
	// 	// btn_title.setAttribute("aria-checked", "true");
	// 	// btn_title.setAttribute("tabindex", "-1");
	// 	btn_knowledge.classList.replace("btn-dark", "btn-white");
	// 	btn_knowledge.setAttribute("aria-checked", "false");
	// 	btn_knowledge.setAttribute("tabindex", "0");
	// 	btn_past.classList.remove("btn-dark");
	// 	btn_past.classList.add("btn-white");
	// 	btn_past.setAttribute("aria-checked", "false");
	// 	btn_past.setAttribute("tabindex", "0");
	// 	// for (i=0; i<mediacards.length; i++){ mediacards[i].style.display = "none"; }
	// 	// for (i=0; i<titlecards.length; i++){ titlecards[i].style.display = "block"; }
	// 	for (i=0; i<knowledgecards.length; i++){ knowledgecards[i].style.display = "none"; }
	// 	for (i=0; i<pastcards.length; i++){ pastcards[i].style.display = "none"; }
	// }

	// Function to display only Present sponsors 
	function showPresentPartners(){			
		btn_all.classList.replace("btn-dark", "btn-white");
		btn_all.setAttribute("aria-checked", "false");
		btn_all.setAttribute("tabindex", "0");
		// btn_media.classList.replace("btn-dark", "btn-white");
		// btn_media.setAttribute("aria-checked", "false");
		// btn_media.setAttribute("tabindex", "0");
		// btn_title.classList.replace("btn-dark", "btn-white");
		// btn_title.setAttribute("aria-checked", "false");
		// btn_title.setAttribute("tabindex", "0");
		btn_present.classList.replace("btn-white", "btn-dark");
		btn_present.setAttribute("aria-checked", "true");
		btn_present.setAttribute("tabindex", "-1");
		btn_knowledge.classList.replace("btn-dark", "btn-white");
		btn_knowledge.setAttribute("aria-checked", "false");
		btn_knowledge.setAttribute("tabindex", "0");
		btn_past.classList.replace("btn-dark", "btn-white");
		btn_past.setAttribute("aria-checked", "false");
		btn_past.setAttribute("tabindex", "0");
		// for (i=0; i<mediacards.length; i++){ mediacards[i].style.display = "none"; }
		// for (i=0; i<titlecards.length; i++){ titlecards[i].style.display = "none"; }
		for (i=0; i<knowledgecards.length; i++){ knowledgecards[i].style.display = "none"; }
		for (i=0; i<presentcards.length; i++){ presentcards[i].style.display = "block"; }
		for (i=0; i<pastcards.length; i++){ pastcards[i].style.display = "none"; }
	}

	// Function to display only Knowledge sponsors 
	function showKnowledgePartners(){			
		btn_all.classList.replace("btn-dark", "btn-white");
		btn_all.setAttribute("aria-checked", "false");
		btn_all.setAttribute("tabindex", "0");
		// btn_media.classList.replace("btn-dark", "btn-white");
		// btn_media.setAttribute("aria-checked", "false");
		// btn_media.setAttribute("tabindex", "0");
		// btn_title.classList.replace("btn-dark", "btn-white");
		// btn_title.setAttribute("aria-checked", "false");
		// btn_title.setAttribute("tabindex", "0");
		btn_knowledge.classList.replace("btn-white", "btn-dark");
		btn_knowledge.setAttribute("aria-checked", "True");
		btn_knowledge.setAttribute("tabindex", "-1");
		btn_present.classList.replace("btn-dark", "btn-white");
		btn_present.setAttribute("aria-checked", "false");
		btn_present.setAttribute("tabindex", "0");
		btn_past.classList.replace("btn-dark", "btn-white");
		btn_past.setAttribute("aria-checked", "false");
		btn_past.setAttribute("tabindex", "0");
		// for (i=0; i<mediacards.length; i++){ mediacards[i].style.display = "none"; }
		// for (i=0; i<titlecards.length; i++){ titlecards[i].style.display = "none"; }
		for (i=0; i<knowledgecards.length; i++){ knowledgecards[i].style.display = "block"; }
		for (i=0; i<presentcards.length; i++){ presentcards[i].style.display = "none"; }
		for (i=0; i<pastcards.length; i++){ pastcards[i].style.display = "none"; }
	}

	// Function to display only media sponsors 
	// function showMediaPartners(){			
	// 	btn_all.classList.remove("btn-dark");
	// 	btn_all.classList.add("btn-white");
	// 	btn_all.setAttribute("aria-checked", "false");
	// 	btn_all.setAttribute("tabindex", "0");
	// 	// btn_media.classList.add("btn-dark");
	// 	// btn_media.classList.remove("btn-white");
	// 	// btn_media.setAttribute("aria-checked", "true");
	// 	// btn_media.setAttribute("tabindex", "-1");
	// 	btn_knowledge.classList.remove("btn-dark");
	// 	btn_knowledge.classList.add("btn-white");
	// 	btn_knowledge.setAttribute("aria-checked", "false");
	// 	btn_knowledge.setAttribute("tabindex", "0");
	// 	// btn_title.classList.remove("btn-dark");
	// 	// btn_title.classList.add("btn-white");
	// 	// btn_title.setAttribute("aria-checked", "false");
	// 	// btn_title.setAttribute("tabindex", "0");
	// 	btn_past.classList.remove("btn-dark");
	// 	btn_past.classList.add("btn-white");
	// 	btn_past.setAttribute("aria-checked", "false");
	// 	btn_past.setAttribute("tabindex", "0");
	// 	for (i=0; i<mediacards.length; i++){ mediacards[i].style.display = "block"; }
	// 	// for (i=0; i<titlecards.length; i++){ titlecards[i].style.display = "none"; }
	// 	for (i=0; i<knowledgecards.length; i++){ knowledgecards[i].style.display = "none"; }
	// 	for (i=0; i<pastcards.length; i++){ pastcards[i].style.display = "none"; }
	// }	

	// Function to display only past sponsors 
	function showPastPartners(){
		btn_all.classList.remove("btn-dark"); btn_all.classList.add("btn-white"); btn_all.setAttribute("aria-checked", "false"); btn_all.setAttribute("tabindex", "0");
		// btn_title.classList.remove("btn-dark"); btn_title.classList.add("btn-white"); btn_title.setAttribute("aria-checked", "false"); btn_title.setAttribute("tabindex", "0");
		// btn_media.classList.remove("btn-dark"); btn_media.classList.add("btn-white"); btn_media.setAttribute("aria-checked", "false"); btn_media.setAttribute("tabindex", "0");
		btn_knowledge.classList.replace("btn-dark", "btn-white"); btn_knowledge.setAttribute("aria-checked", "false"); btn_knowledge.setAttribute("tabindex", "0");
		btn_present.classList.replace("btn-dark", "btn-white"); btn_present.setAttribute("aria-checked", "false"); btn_present.setAttribute("tabindex", "0");
		btn_past.classList.add("btn-dark"); btn_past.classList.remove("btn-white"); btn_past.setAttribute("aria-checked", "true"); btn_past.setAttribute("tabindex", "-1");
		// for (i=0; i<mediacards.length; i++){ mediacards[i].style.display = "none"; }
		// for (i=0; i<titlecards.length; i++){ titlecards[i].style.display = "none"; }
		for (i=0; i<knowledgecards.length; i++){ knowledgecards[i].style.display = "none"; }
		for (i=0; i<presentcards.length; i++){ presentcards[i].style.display = "none"; }
		for (i=0; i<pastcards.length; i++){ pastcards[i].style.display = "block"; }
	}

	// Adding functionalities to all filter buttons
	btn_all.addEventListener("click", showPartners); /* btn_media.addEventListener("click", showMediaPartners); btn_title.addEventListener("click", showTitlePartners); */ btn_knowledge.addEventListener("click", showKnowledgePartners); btn_present.addEventListener("click", showPresentPartners); btn_past.addEventListener("click", showPastPartners);

	// Triggering WOW animations to load after filter selection, by scrolling screen with a negligible amount
	btn_all.onclick = ()=>{if (btn_all.getAttribute("aria-checked") === "true") {btn_all.setAttribute("aria-checked", ""); window.scrollBy(0, 1);}}
	// btn_title.onclick = () => { if (btn_title.getAttribute("aria-checked") === "true") { btn_title.setAttribute("aria-checked", ""); window.scrollBy(0, -1); }}
	// btn_media.onclick = () => { if (btn_media.getAttribute("aria-checked") === "true") { btn_media.setAttribute("aria-checked", ""); window.scrollBy(0, 1); }}
	btn_knowledge.onclick = () => { if (btn_knowledge.getAttribute("aria-checked") === "true") { btn_knowledge.setAttribute("aria-checked", ""); window.scrollBy(0, -1); }}
	btn_present.onclick = () => { if (btn_present.getAttribute("aria-checked") === "true") { btn_present.setAttribute("aria-checked", ""); window.scrollBy(0, -1); }}
	btn_past.onclick = () => { if (btn_past.getAttribute("aria-checked") === "true") { btn_past.setAttribute("aria-checked", ""); window.scrollBy(0, -1); }}

	// Show filter buttons only when the Sponsors JS functions are loaded.
	buttonbox[0].style.display="inline-block";

	// Adding onclick functionality for sponsors webpage buttons
	for (let i in Sponsors_HomePage_Data){
		let object_i = document.querySelector(i);
		let URL = Sponsors_HomePage_Data[i];
		if (object_i) {
			object_i.addEventListener("click", ()=>{
				window.open(URL);
			});
		}
	}

	// Re-setting  WOW animations and set them again everytime window is scrolled till top (using jQuery)
	// $(window).scroll(()=>{
	// 	if ($(document).scrollTop() <= $("#page-main-header").height()/3){
	// 		$(".wow").attr("style", "");
	// 		new WOW().init();		// Re-initialising WOW animations
	// 	}
	// });

	// Adding data-trigger attribute to card elements (using jQuery)
	$(".past-sponsor").attr("data-trigger", "");
	// Adding data-trigger-once attribute to page-header and media-partners (using jQuery)
	$(".card-content, .page-header, .media-partner").attr("data-trigger-once", "");
	// $(".card, .past-sponsor").attr("style", "animation:fadeInUp;");		// Only animates once, that too often goes while loading animation shows

	// Some fun mouse actions for sponsors message
	let sponsors_message = footer[0].querySelector('.footer-contact');
	sponsors_message.onmouseover = function(){
		sponsors_message.style.transition=".7s";
		sponsors_message.style.transform="scale(1.5) scale(.67)";
		sponsors_message.style.color = "#4934ff";
		let clickpoint = sponsors_message.querySelector("span");
		clickpoint.style.textDecoration += " underline";
		setTimeout(()=>{
			clickpoint.style.textDecoration = "";
		}, 5000);
	};
	
	sponsors_message.onmousedown = function(){
		sponsors_message.style.transform="rotateZ(1deg) rotateZ(-1deg) skewX(-5deg)";
	};

	sponsors_message.onmouseup = function(){
		sponsors_message.style.transform=" skewX(0deg)";
	};

	sponsors_message.onmouseout = function(){
		sponsors_message.style.cssText="";
	};

	// // Setting List View Toggle of Past Sponsors
	// Past_ListView_Toggle.onclick=()=>{
	// 	Past_GridView_Toggle.removeAttribute("disabled");
	// 	for(let i=0; i<past_card_elements.length; i++){
	// 		past_card_elements[i].querySelector(".past-sponsor-content").classList.remove("GridView");
	// 		past_card_elements[i].querySelector(".past-sponsor-content").classList.add("ListView");
	// 	}
	// 	Past_ListView_Toggle.setAttribute("disabled", "disabled");
	// }
	// // Setting Grid View Toggle of Past Sponsors
	// Past_GridView_Toggle.onclick=()=>{
	// 	Past_ListView_Toggle.removeAttribute("disabled");
	// 	for(let i=0; i<past_card_elements.length; i++){
	// 		past_card_elements[i].querySelector(".past-sponsor-content").classList.remove("ListView");
	// 		past_card_elements[i].querySelector(".past-sponsor-content").classList.add("GridView");
	// 	}
	// 	Past_GridView_Toggle.setAttribute("disabled", "disabled");
	// }

	// Making Past Sponsors View Toggle Buttons visible after their functionality is loaded
	// past_viewtoggle[0].removeAttribute("style");

	// Initialising Bootstrap-v4 Tooltips using jQuery
	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

} 

catch(err){
	console.log("Unable to load sponsors.js completely! Error:", 
	err.message, ". In detail:",  err, 
	".\nYou may face some performance limitations of this page.");
}
