		deg=0;
		percent=0;
		
		setInterval(function(){
			deg+=3.6;
			$(".count").html(percent);
			if(deg<181){	
				percent++;
				$(".firstHalf").css({
					transform: "rotate("+deg+"deg)"
				});
			}
			else if(deg<361){
				percent++;
				$(".secondHalf").css({
					border:"20px solid white",
					transform:"rotate("+deg+"deg)"
				});
			}
		}, 200)