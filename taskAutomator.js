// JavaScript Document
$(document).ready(function(){
	
	let taskDate = new Date();
	let taskDay = taskDate.getDate();
	
//	function actionTask(taskExecutionDate,taskDay){
//		let userDate = taskExecutionDate.split("@");
//		for(i=0; i < userDate.length; i++){
//			if(userDate[i]==taskDay){
//				let commentElement = $('.comEle');
//				let comment = document.createComment(commentElement.get(0).outerHTML);
//				commentElement.replaceWith(comment);
//		   }
//		}
//	};
//	
//	actionTask("",taskDay);
	
	function fullActionTask(inputDate,taskDate){
			if(inputDate<=taskDate){
			   let commentElement = $('.comEle');
			   let comment = document.createComment(commentElement.get(0).outerHTML);
				commentElement.replaceWith(comment);
			   }	
	};
	inputDate = new Date(2019,6,13)
	fullActionTask(inputDate,taskDate);
});
