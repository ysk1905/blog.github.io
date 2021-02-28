try{
	
	// Updating title of page to include "Sponsors"
	document.title += " - E-Summit"; 
	
	// Necessary Declaration(s)
	top_target = document.querySelector(".back-to-top");
	top_front = document.querySelector(".top");
	box_items = document.querySelectorAll(".content-block");
	box_item_heads = document.querySelectorAll(".content-block .esummit-head > .head-content");
	box_item_contents = document.querySelectorAll(".card");

	// Back to Top view toggle on scroll with jQuery (copied from scrollme.js)
	$(function () {
		$(document).scroll(function () {
			let $top_content = $(".top");
			let $top_again = $(".back-to-top");
			let $top_again_rocket = $(".back-to-top i.fa-space-shuttle");
			
			$top_again.toggleClass('d-none', $(this).scrollTop() < $top_content.height());

			if ($(document).scrollTop() < $top_content.height()){
				$top_again_rocket.attr("style", "");
			}
			// Resetting WOW animations and set them again everytime window is scrolled till top
			// if ($(document).scrollTop() < $top_content.height()/2){
			// 	$(".wow").attr("style", "");
			// 	new WOW().init();
			// }
		});
	});	

	// Making FAQ section load on clicking FAQsToggle Button (using jQuery)
	FAQsToggle = $("#FAQ_Reveal_Button");
	FAQsToggle.click(()=>{
		FAQsToggle.toggleClass("d-none");
		$(".FAQs .head-content").html("Frequently Asked Questions");
		window.scrollBy(0, 10); 	// Causes WOW appear as fadeInUp animation to trigger and Qs cards in FAQs to reveal directly on clicking FAQsToggle button
	});

	// Defining clearHash function, to remove #sectionID in URL (if any appears due to internal linking)
	clearHash = ()=> {history.replaceState(null, null, window.location.pathname + window.location.search);
	// clearHash = ()=> {location.hash = "";history.replaceState("", document.title, document.URL.replace("#", ""));
	}

	// Setting height of top-indent to match with navbar
	let $top_indent = $(".top-indent");
	$top_indent.height($("nav.navbar").outerHeight());

	// Moving from top to contents on clicking top (suggests as an alternative to oscillating arrow)
	top_front.onclick = function(){
		history.replaceState(null, null, ''); //location.hash = "";
		window.scroll(0, window.innerHeight + $top_indent.height());
	}

	// Setting up Read More... text clipping of some selected longer texts using jQuery
	$ReadMoreLink = $(".text-expansion-link");
	$extra_text = $(".clipped-text");
	$ReadMoreLink.attr("style", "");
	// $extra_text.attr("style", "display:none");
	// Needs to act separately for each element
	$ReadMoreLink.on("click", function(){
		$(this).toggleClass('d-none');
		// $(this).next().toggleClass("d-inline");

	});

	// Setting top_target space-shuttles animation with CSS and JS
	top_target.onclick = ()=>{
		top_target.querySelector("i.fa-space-shuttle").style.animation="launch-and-settle .75s";
		setTimeout(clearHash, 1000);
	};

	// // Adding class "wow" to esummit_divisions
	// for (let box_item=0; box_item < box_items.length; box_item++){
	// 	let wow_class = ""; 	// Using 'let' keyword, setting the scope of wow_class to local scope
	// 	if (box_item==0) {wow_class = "wow-unit";}
	// 	else {wow_class = "wow";}
	// 	box_items[box_item].classList.add(wow_class, "fadeInUp");
	// }

	// // Adding class "wow" to esummit_division cards
	// for (let item=0; item < box_item_contents.length; item++){
	// 	box_item_contents[item].classList.add("wow", "fadeInUp");
	// }
	
	// Adding attribute "data-trigger-once" to esummit_divisions
	for (let box_item=0; box_item < box_items.length; box_item++){
		let trigger_attribute = "data-trigger-once"; 	// Using 'let' keyword, setting the scope of trigger_attribute to local scope
		// if (box_item!=0) {trigger_attribute = "data-trigger";}
		box_items[box_item].setAttribute(trigger_attribute, "");
	}

	// Adding attribute "data-trigger-once" to esummit_division cards
	for (let item=0; item < box_item_contents.length; item++){
		box_item_contents[item].setAttribute("data-trigger-once", "");
	}

	// Adding attribute "data-trigger-once" to page-main-header
	// $("#page-main-header").attr("data-trigger-once", "");

	// Adding attribute "data-trigger" to esummit_division headings
	for (let item=0; item < box_item_heads.length; item++){
		let trigger_attribute = "data-trigger"; 	// Using 'let' keyword, setting the scope of trigger_attribute to local scope
		if (item==0) {trigger_attribute = "data-trigger-once";}
		box_item_heads[item].setAttribute(trigger_attribute, "");
	}

} 

catch(err){
	console.log("Unable to load Esummit.js Completely! Error:", err.message, ". [ In detail:",  err, ". ]\nYou may face some performance limitations of this page.");
}
