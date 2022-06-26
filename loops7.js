let a=require ("readline-sync")
let num=a.questionInt("enter no")
if(num%3==0){
    console.log("nav")
}
else if(num%7==0){
    console.log("gurukul")
}
else if(num%3==0 && num%7==0){
    console.log("navgurukul")
}
else{
    console.log("not")
}