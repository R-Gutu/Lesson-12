var list=["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
list.push(-1);
list.unshift(1000);
list.push("Last array element");
list.splice( 3 , 1 );
var listOne = list.filter( item => typeof item === "number");
var listTwo = listOne.map ( item => item*item );
console.log(Math.max.apply(null, listTwo));