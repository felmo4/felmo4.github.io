// JavaScript function to switch tabs
function showTab(tabId, dotId) {
	// Hide all tab contents
	const tabContents = document.querySelectorAll('.tab-content');
	const footerDot = document.querySelectorAll('.app__button');
	const fixedProjects = document.getElementById('fixedProjects')
	const fixedMore = document.getElementById('fixedMore')
	tabContents.forEach(content => {
		content.classList.remove('active');
	});
	footerDot.forEach(content => {
		content.classList.remove('fade','active');
	});

	// Show the selected tab content
	const selectedTab = document.getElementById(tabId);
	selectedTab.classList.add('active');
	const selectedDot = document.getElementById(dotId);
	selectedDot.classList.add('fade','active');
	switch (tabId)  {
		case 'tab2' :
			fixedProjects.style.display = 'unset';
			fixedMore.style.display = 'none';
			break;
		case 'tab3' :
			fixedProjects.style.display = 'none';
			fixedMore.style.display = 'unset';		
			break;
		default:
			fixedProjects.style.display = 'none';	
			fixedMore.style.display = 'none';		
	}


}

// Slideshow
let filteristIndex = 1, ohomeIndex = 1, laundryIndex = 1;

showFilterist(filteristIndex);
function plusFilterist(n) {
showFilterist(filteristIndex += n);
}
function currentFilterist(n) {
showFilterist(filteristIndex = n);
}

function showFilterist(n) {
let i;
let slides = document.getElementsByClassName("mySlidesFilterist");
let dots = document.getElementsByClassName("dotFilterist");
if (n > slides.length) {filteristIndex = 1}    
if (n < 1) {filteristIndex = slides.length}
for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
}
slides[filteristIndex-1].style.display = "block";  
dots[filteristIndex-1].className += " active";
}

showOhome(ohomeIndex);
function plusOhome(n) {
showOhome(ohomeIndex += n);
}
function currentOhome(n) {
showOhome(ohomeIndex = n);
}

function showOhome(n) {
let i;
let slides = document.getElementsByClassName("mySlidesOhome");
let dots = document.getElementsByClassName("dotOhome");
if (n > slides.length) {ohomeIndex = 1}    
if (n < 1) {ohomeIndex = slides.length}
for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
}
slides[ohomeIndex-1].style.display = "block";  
dots[ohomeIndex-1].className += " active";
}

showLaundry(laundryIndex);
function plusLaundry(n) {
showLaundry(laundryIndex += n);
}
function currentLaundry(n) {
showLaundry(laundryIndex = n);
}

function showLaundry(n) {
let i;
let slides = document.getElementsByClassName("mySlidesLaundry");
let dots = document.getElementsByClassName("dotLaundry");
if (n > slides.length) {laundryIndex = 1}    
if (n < 1) {laundryIndex = slides.length}
for (i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
	dots[i].className = dots[i].className.replace(" active", "");
}
slides[laundryIndex-1].style.display = "block";  
dots[laundryIndex-1].className += " active";
}


// Scroll opacity effect
document.getElementById("tab3").addEventListener("scroll", function () {
	 let scroll2 = document.getElementById("scroll2");
	 let scroll3 = document.getElementById("scroll3");
	 let scroll4 = document.getElementById("scroll4");
	 let scrollLeft = document.getElementById("tab3").scrollLeft;
	 let scrollTop = document.getElementById("tab3").scrollTop;
	 if (scrollLeft){
		if (scrollLeft >= 1600) 
			scroll4.classList.add('scroll');
		else if (scrollLeft >= 1100) {
			scroll4.classList.remove('scroll');
			scroll3.classList.add('scroll');
		}
		else if (scrollLeft >= 500) {
			scroll2.classList.add('scroll');
			scroll3.classList.remove('scroll');
		}
		else
			scroll2.classList.remove('scroll');
	}
	else{
		if (scrollTop){
		   if (scrollTop >= 900) 
			   scroll4.classList.add('scroll');
		   else if (scrollTop >= 700) {
			   scroll4.classList.remove('scroll');
			   scroll3.classList.add('scroll');
		   }
		   else if (scrollTop >= 300) {
			   scroll2.classList.add('scroll');
			   scroll3.classList.remove('scroll');
		   }
		   else
			   scroll2.classList.remove('scroll');
	 }
	}
  });