// a) Write a method that gives you the sum of all numbers that are mulitpliers of 3 and 4 under 1000

var sum = () => {
	var num = 0
	for(var i = 0; i <= 1000; i++){
		if (i%3===0 || i%4 ===0){
			num += i
		}		
	}
	return num
}


// b) Write a function that takes in one parameter "length" and prints out that many stars - example:
//  3 --> ***
//  5 --> *****


var stars = (num) =>{
var string = ''	
	if (num > 0){ 
		for(var i = 1; i <= num; i++){
		string = string + '*'
	}
		return string
	} else {
		return false
	}

}



// c) Write a function that takes in one parameter "length" prints out a square of that length. Hint: you can user the previous function for this one.
// example:        
//  3 -->  ***
//            ***
//            ***
//  5 --> *****
//          *****
//          *****
//          *****
//          *****


var square = (num) =>{
var string = ''

	if (num > 0){ 
		for(var i = 1; i <= num; i++){
		string = string + '*'
	}
	    for(var i = 1; i <= num; i++){
		console.log(string)
	} 

	} else {
		return false
	}

}



// d) Write a function that takes a number and gives the factorial of this number. Example:
// 5 -> 120
// 6 - 720

var factorial = (num) =>{
    if (num < 0){
    	return -1
    } else if (num === 0) {
    	return 1
    } else {
    	return (num * factorial(num -1))
    }
}











