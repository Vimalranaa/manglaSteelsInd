function loading() {
	document.querySelectorAll(".bar").forEach(function(current) {
	  let startWidth = 0;
	  const endWidth = current.dataset.size;

	  const interval = setInterval(frame, 20);
  
	  function frame() {
		if (startWidth >= endWidth) {
		  clearInterval(interval);
		} else {
			startWidth++;
			current.style.width = `${endWidth}%`;
			current.firstElementChild.innerText = `${startWidth}%`;
		  }
	   }
	});
  }
  
  setTimeout(loading, 1000);









  const control = document.getElementById("direction-toggle");
const marquees = document.querySelectorAll(".marquee");
const wrapper = document.querySelector(".wrapper");

control.addEventListener("click", () => {
  control.classList.toggle("toggle--vertical");
  wrapper.classList.toggle("wrapper--vertical");
  [...marquees].forEach((marquee) =>
    marquee.classList.toggle("marquee--vertical")
  );
});