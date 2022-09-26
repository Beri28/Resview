


	////
	/*fetch('http://localhost:4500/getAll')
	.then(res=>{
		return res.json()})
	.then(data=>{
		console.log(JSON.stringify(data[0]))
		var html2=data.map(user=>{
			console.log(user.rating)
			/*if(user.rating>=2 && user.rating<=2.9){
				var stars="&starf;&starf; stars"
			}
				user.rating=' '*/
			/*if(!user.rated){
				user.rating=' '
				stars="Not rated";
			}
			else if(user.rating>=2 && user.rating<=2.9){
				var stars="&starf;&starf; stars"
			}
			else if(user.rating>=3 &&user.rating<=3.9){
				var stars="&starf;&starf;&starf; stars"
			}
			else if(user.rating>=4 &&user.rating<=4.9){
				var stars="&starf;&starf;&starf; stars"
			}
			else if(user.rating==5 ){
				var stars="&starf;&starf;&starf; stars"
			}
			else if(user.rating>=1 &&user.rating<=1.9){
				var stars="&starf;&starf;&starf; stars"
			}
			//else if(!user.rated){
			//	user.rating=' '
			//	stars="Not rated";
			//}
			else{
				user.rating=' '
				stars="Not rated";
			}
			/*return `
			<div class="main">
			<div class="rest1">
				<img src="../images/image1.jpg">
				<div class="caption">
				<div class="about name">Restaurant Info!!</div>
				<div class="about location">Name: <span id="name1" class="name1">${user.restaurantName.toUpperCase()}</span> </div>
				<div class="about rating">Location:<span class="location2"> ${user.locationOne}</span>  ${user.locationTwo}</div>
				<span class="stars">Rating: ${user.rating}<span class="stars2" style="color: gold;">${stars}</span></span>
				<div class="button"><button>Rate</button> </div>
				</div>
			</div>
		</div>
			`;*/
			/*return `<div class="divone">
			<br>
			<div class="img">
			<img src="../images/image1.jpg" width="100%" height="100%">
			</div>
			<div class="divCap">
				<div class="main">
				<div class="rest1">
				   <div class="caption">
				   <div class="about name">Restaurant Info!!</div>
				   <div class="about location">Name: <span id="name1" class="name1">${user.restaurantName.toUpperCase()}</span> </div>
				   <div class="about rating">Location:<span class="location2"> ${user.locationOne}</span>  ${user.locationTwo}</div>
				   <span class="stars">Rating: ${user.rating}<span class="stars2" style="color: gold;">${stars}</span></span>
				   
				   </div>
				</div>
			   </div>  
		   </div>
			<div class="divButton">
				<button class="button1">Rate</button>  <button class="button2"> More</button>
			</div>
	   </div>`
		}).join('')
	////
    document.querySelector('.post_body').insertAdjacentHTML('afterbegin',html2)
	console.log(typeof("&starf;&starf;&starf;"))
	const d=document.getElementsByClassName('button1');
	const modal=document.querySelector(".modal");
	const clossButton=document.querySelector(".closs-button");
		function toggleModal(){
			modal.classList.toggle("show-modal");
		}
		function windowOnClick(event){
			if(event.target===modal){
				toggleModal();
			}
		}
	
		for(let i=0;i<d.length;i++){
			d[i].addEventListener('click',toggleModal)
		}
		clossButton.addEventListener("click", toggleModal);
		window.addEventListener("click", windowOnClick);
	
$(document).ready(function(){
	var value=$(".button1")
	//var value2=$(".morebutton")
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
		document.querySelector(".modalHeader").textContent=names[i];
		console.log(value[i]);
	})};
	
	});

	
    })*/

	////////////////
	fetch('http://localhost:4500/getAllRated')
.then(res=>{
    return res.json()})
.then(data=>{
    console.log(JSON.stringify(data[0]))
    var html=data.map(user=>{
		console.log(user.rating)
		if(!user.rated){
			user.rating=' '
			stars="Not rated";
		}
		else if(user.rating>=2 && user.rating<=2.9){
			var stars="&starf;&starf; stars"
		}
		else if(user.rating>=3 &&user.rating<=3.9){
			var stars="&starf;&starf;&starf; stars"
		}
		else if(user.rating>=4 &&user.rating<=4.9){
			var stars="&starf;&starf;&starf; stars"
		}
		else if(user.rating==5 ){
			var stars="&starf;&starf;&starf; stars"
		}
		else if(user.rating>=1 &&user.rating<=1.9){
			var stars="&starf;&starf;&starf; stars"
		}
		else{
			user.rating=' '
			stars="Not rated";
		}
        /*return `
		<div class="main">
		<div class="rest1">
			<img src="../images/image1.jpg">
			<div class="caption">
			<div class="about name">Restaurant Info!!</div>
			<div class="about location">Name: <span id="name1" class="name1">${user.restaurantName.toUpperCase()}</span> </div>
			<div class="about rating">Location:<span class="location2"> ${user.locationOne}</span>  ${user.locationTwo}</div>
			<span class="stars">Rating: ${user.rating}<span class="stars2" style="color: gold;">${stars}</span></span>
			<div class="button"><button>Rate</button> </div>
			</div>
		</div>
	</div>
		`;*/
		return `<div class="divone">
		<br>
		<div class="img">
		<img src="../images/image1.jpg" width="100%" height="100%">
		</div>
		<div class="divCap">
			<div class="main">
			<div class="rest1">
			   <div class="caption">
			   <div class="about name">Restaurant Info!!</div>
			   <div class="about location">Name: <span id="name1" class="name1">${user.restaurantName.toUpperCase()}</span> </div>
			   <div class="about rating">Location:<span class="location2"> ${user.locationOne}</span>  ${user.locationTwo}</div>
			   <span class="stars">Rating: ${user.rating}<span class="stars2" style="color: gold;">${stars}</span></span>
			   
			   </div>
			</div>
		   </div>  
	   </div>
		<div class="divButton">
			<button class="button1">Rate</button>  <button class="button2"> More</button>
		</div>
   </div>`
    }).join('')

	document.querySelector('.post_body').insertAdjacentHTML('afterbegin',html)
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
	
		for(let i=0;i<d.length;i++){
			d[i].addEventListener('click',toggleModal)
		}
		clossButton.addEventListener("click", toggleModal);
		window.addEventListener("click", windowOnClick);
	
$(document).ready(function(){
	var value=$(".button1")
	//var value2=$(".morebutton")
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


});