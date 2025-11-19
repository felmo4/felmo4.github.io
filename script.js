
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


//Radio
document.getElementById("radio").addEventListener("click", function () {
	this.classList.add('scroll');
	const audio = document.getElementById("myAudio");
    audio.play();
});


// Slideshow
let ohomeIndex = 1

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


// Scroll opacity effect
document.getElementById("tab3").addEventListener("scroll", function () {
	 let scroll2 = document.getElementById("am-scroll2");
	 let scroll3 = document.getElementById("am-scroll3");
	 let scrollLeft = this.scrollLeft;
	 let scrollTop = this.scrollTop;
	 if (scrollLeft){
		if (scrollLeft >= 1000) {
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
		   if (scrollTop >= 900) {
			   scroll3.classList.add('scroll');
		   }
		   else if (scrollTop >= 500) {
			   scroll2.classList.add('scroll');
			   scroll3.classList.remove('scroll');
		   }
		   else
			   scroll2.classList.remove('scroll');
	 }
	}
  });

document.getElementById("tab2").addEventListener("scroll", function () {
	 let scroll2 = document.getElementById("p-scroll2");
	 let scroll3 = document.getElementById("p-scroll3");
	 let scroll4 = document.getElementById("p-scroll4");
	 let scroll5 = document.getElementById("p-scroll5");
	 let scrollLeft = this.scrollLeft;
	 let scrollTop = this.scrollTop;
	 if (scrollLeft){
		if (scrollLeft >= 3500) {
			scroll5.classList.add('scroll');
		}
		else if (scrollLeft >= 2500) {
			scroll4.classList.add('scroll');
			scroll5.classList.remove('scroll');
		}
		else if (scrollLeft >= 1500) {
			scroll3.classList.add('scroll');
			scroll4.classList.remove('scroll');
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
		   if (scrollTop >= 1800) {
			   scroll5.classList.add('scroll');
		   }
		   else if (scrollTop >= 1100) {
			   scroll4.classList.add('scroll');
			   scroll5.classList.remove('scroll');
		   }
		   else if (scrollTop >= 600) {
			   scroll3.classList.add('scroll');
			   scroll4.classList.remove('scroll');
		   }
		   else if (scrollTop >= 50) {
			   scroll2.classList.add('scroll');
			   scroll3.classList.remove('scroll');
		   }
		   else
			   scroll2.classList.remove('scroll');
	 }
	}
  });
