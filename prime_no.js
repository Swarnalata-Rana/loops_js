let a=require("readline-sync")
let num=a.question("enter no")
let i=1
let f=0
while (i<=num){
    if (num%i==0){
    f=f+1
}
    i++
}
if (f==2){
    console.log("it is a prime no")
}
else{
    console.log("it is not a prime no")
}