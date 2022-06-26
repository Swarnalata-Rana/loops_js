let a=require("readline-sync")
let num=a.question("enter no")
let f=0
let i=1
while(i<num){
   if(num%i==0)
   f=f+i
   i++
}
if (f==num){
   console.log("perfect number")
}
else{
   console.log("not perfect number")
}