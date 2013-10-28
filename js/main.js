$(document).ready(function() {
	$('a[href^="#"]').click(function() {

		$('html, body').animate({
			scrollTop : $($(this).attr("href")).offset().top
		}, 'slow');
	});
	
	
	
	
	
	
	
	$.ajax({
		url : 'http://openweathermap.org/data/2.1/find/city?lat=48.856614&lon=2.3522219000000177&cnt=1&lang=fr&callback=?',
		dataType : 'json',
		success : function(data) {

			console.log(data);
			
			console.log(data.list[0].main.temp);
			console.log(data.list[0].main.temp  - 273.15);
			console.log(data.list[0]);
			
			$("#temp").text( parseInt(data.list[0].main.temp  - 273.15) + "°C");
			$("#icon").attr("src", "http://openweathermap.org/img/w/"+data.list[0].weather[0].icon+".png" );
			$("#city").text( data.list[0].name);
			
			$("#main").text( data.list[0].weather[0].main);
			$("#description").text("(" + data.list[0].weather[0].description + ")");
			
			
			$("#humidity span").text( data.list[0].main.humidity + "%");
			$("#wind span").text( parseInt(data.list[0].wind.speed/0.27) + " km/h");
			
			
			
		}
		
				
		
		
	});
	
	
	
	

	$.ajax({
		url : "http://openweathermap.org/data/2.1/forecast/city/524901",
		dataType : "jsonp",
		success : function(data) {
			console.log(data);
		}
	}); 

	
	
}); 