function calculateMinCostToFromRope(a) {
  //your code here
	a.preventDefault();
	var inputElement = doucement.querySelector("input").value;
	var arr = inputElement.spilt(",");
	arr.sort( function (a,b) {
		return a-b;
	});
	var cost = 0;
	while(arr.lenght > 1){
		var res = Number(arr[0]) + Number(arr[1]);
		arr.splice(0 , 2);
		arr.push(res);
		cost += res;
		arr.sort(function(a , b) {
			return a - b;
			
		});
	}
	document.getElementById("result").textCotent = cost;
}
  
  
  
}  
