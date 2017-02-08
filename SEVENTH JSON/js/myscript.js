$('doucment').ready(function(){

	
	$("#search").keyup(function(){

		var searchvalue =$("#search").val();
		var searchExpression = new RegExp(searchvalue,"i");
		$.getJSON('data.json', function(data)
		{
			console.log(data);
			var output ='<ul>';
			$.each(data,function(Key,Val){
				if(val.name.search(searchExpression)!=-1 || val.designation.search(searchExpression)!=-1
					|| val.age.search(searchExpression)!=-1)

			{
				output+='<li>name:' +val.name+'</li>' ;
				output+='<li>designation:' +val.designation+'</li>' ;
				output+='<li>age:' +val.age+'</li>' ;

			}
		});
			output+= '</ul>' ;

			$("#update").html(output) ;


	});    

	});
	
	});