

let adder= function(num1, num2){

	let sum= num1+ num2;
	return sum;
}

let res=adder(3,5);
console.log(res);

var add= function(num1, num2){

	let sum= num1+ num2;
	return sum;
}
 
 console.log(add(4,5))

let myMul=function(num1, num2){
	let mul=num1* num2;
	return mul;
}

console.log(myMul(2,2))

var arr=[1,2,3,4,5];

console.log(arr[0]);

console.log(arr.length);

console.log(arr[arr.length-1])


console.log(arr[arr.length-arr.length])

console.log(arr.unshift(2));

console.log(`hey whats up ${arr.length} lol`);

console.log(arr.unshift(" some"));

arr.shift();
console.log(arr)

arr.unshift(1);
console.log(arr)


console.log(arr.pop());

arr.push(9);
console.log(arr);


arr.splice(1,0,"lol")
console.log(arr)


let example = function( name= "hey" , count =0){
	return  name + " " + count
 }

 console.log(example("john", 5));



 for (var i =0; i <= arr.length-1; i++) {
 	// var ele= arr[i];
 	console.log(arr[i])
 }
 console.log(ele)

 for (var j= arr.lenght-1 ; j >= 0 ; j--) {
 	var ele = arr[j];
 	console.log(ele);
 }
 console.log(arr);
