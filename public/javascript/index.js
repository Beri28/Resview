
const modal=document.querySelector(".modal");

// This line is the original code that was working           const trigger=document.querySelector(".rate");
//the code below is just a test
//the code below is just a test
const trigger3=document.getElementsByTagName("button")

const clossButton=document.querySelector(".closs-button");
		function toggleModal(){
			modal.classList.toggle("show-modal");
		}
		function windowOnClick(event){
			if(event.target===modal){
				toggleModal();
			}
		}
//trigger.addEventListener("click", toggleModal);//Original working code


//the code below is just a test
for(let i=0;i<5;i++){
	trigger3[i].addEventListener("click",toggleModal);
}
clossButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
