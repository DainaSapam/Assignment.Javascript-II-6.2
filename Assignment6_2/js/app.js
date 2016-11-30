var num1 = 90;

var num2 = 7;

var num3 = 6;

if(num1 > num2){
	if(num1 > num3){
		console.log(num1+" is the greatest number");
	}
	else {
		console.log(num3+" is the greatest number");
	}
}
else if(num2 > num3){
	console.log(num2+" is the greatest number");
}
else{
	console.log(num3+" is the greatest number");
}