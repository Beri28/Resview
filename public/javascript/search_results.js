
	
		
$(document).ready(function(){
	console.log(typeof("&starf;&starf;&starf;"))
	const d=document.getElementsByClassName('button1');
	const modal=document.querySelector(".modal1");
	const clossButton=document.querySelector(".closs1-button");
		function toggleModal(){
			modal.classList.toggle("show-modal1");
		}
		function windowOnClick(event){
			if(event.target===modal){
				toggleModal();
			}
		}
	console.log(d[2])
		for(let i=0;i<d.length;i++){
			d[i].addEventListener('click',toggleModal)
		}
		clossButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


	var value=$(".button1")
	var ame=$(".name1")
	var location2=$('.location2')
	console.log(location2[0])
	const amount=ame.length;
	const names=[];
	const adress=[]
	for(let j=0;j<amount;j++){
			names.push(ame[j].innerHTML)
			adress.push(location2[j].innerHTML)
	}
	for(let i=0;i<value.length;i++){
	$(value[i]).click(function(){
		document.querySelector(".Restaurant_name").value=names[i].toLowerCase();
		document.querySelector(".Location_one").value=adress[i].toLowerCase();
		document.querySelector(".modalHeader1").textContent=names[i];
		console.log(value[i]);
	})};
	});