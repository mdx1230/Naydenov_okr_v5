let ddiv=document.getElementById("output");
	document.addEventListener("keydown",function(event)
	{
		if(event.key==" ")
		{
			ddiv.textContent+="_";
		}
		else{
			ddiv.textContent+=event.key;
		}
		
	});
