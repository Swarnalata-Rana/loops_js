let a=require ("readline-sync")
let num=a.questionInt("how many time you need usre input ")
i=1
sum=0
while(i<=num){
    let num2=a.questionInt("enter no ")
    sum=sum+i
    i++
    // console.log(sum)
    // i++
}
console.log(sum)
// input 100 , out put 5050