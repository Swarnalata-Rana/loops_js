let a=require ("readline-sync")
let num=a.questionInt("how many time you need usre input ")
i=1
sum=0
while(i<=num){
    let num2=a.questionInt("enter no ")
    sum=sum+i
    i++
}
console.log(sum)
// take 10 user input and total sum