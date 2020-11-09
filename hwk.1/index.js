//TASK 1 

let num = +prompt("write a number");
    if(num % 2 ===0){;
      console.log("even")
  }else{
  console.log("odd")
  }

//TASK 2

let a = [45, -12, 0, 3, -15];
let b = [7, 52, -23, 9, -81]
let totalSum = 0;
let totalSum1 = 0;
for(let i = 0; i <= a.length-1; i++) {
    totalSum = totalSum + a[i];
} 
for(let j = 0; j <= b.length-1; j++){
  totalSum1 = totalSum1 + b[j]
}
let average = totalSum / a.length;
let average1 = totalSum1 / b.length;

console.log('Average is: ' +average);
console.log('Average is: ' +average1);

//TASK 4

  function myFn(x) {
  if (x % 3 === 0 && x % 5 === 0 && x % 7 === 0){
    return "420 is a multiple of 3, 5 and 7";
  } if (x % 3 === 0 && x % 7 === 0){
    return "21 is a multiple of 3 and 7";
  } if (x % 5 === 0 && x % 7 === 0){
    return "35 is a multiple of 3 and 7";
  } if (x % 3 === 0){
    return "24 is a multiple of 3";
  }  else {
    return "13 is not a multiple of 3, 5 or 7";
  }    
}
console.log(myFn(21));
console.log(myFn(35)); 
console.log(myFn(13));
console.log(myFn(420));
console.log(myFn(24));