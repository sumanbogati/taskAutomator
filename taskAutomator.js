// JavaScript Document
//Add comEle class in HTML file
$(document).ready(function(){
	let specificDay=false;
	let userSystemDate = new Date();
	let userSystemDay = userSystemDate.getDate();
	
	if(specificDay==true){
		actionTask("",userSystemDay);		//Enter specified dates here and seperate them by @
	   }
	   else{
	   	scheduleDate = new Date(2050,0,01);	//Enter date here as yyyy,mm,dd (Jan = 0 & Dec = 11)
		fullActionTask(scheduleDate,userSystemDate);
	   }

		//Commenting function
		function commentTask(){
			let commentElement = $('.comEle');
			let comment = document.createComment(commentElement.get(0).outerHTML);
			commentElement.replaceWith(comment);
		}
		//Specific days function
	   	function actionTask(taskExecutionDate,userSystemDay){
		let userDate = taskExecutionDate.split("@");
		for(i=0; i < userDate.length; i++){
			if(userDate[i]==userSystemDay){
					commentTask();
		   		}
			}
		};
		//Non specific day function
		function fullActionTask(scheduleDate,userSystemDate){
			if(userSystemDate>=scheduleDate){
			   commentTask();
			   }	
		};
});
