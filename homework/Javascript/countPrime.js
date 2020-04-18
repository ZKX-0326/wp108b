function isPrime(n){
    for(i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
x=3,y=7,z=0
for(i=x;i<=y;i++){
    if(isPrime(i)){
        z+=1;
    }
}
console.log("countPrime(%d,%d)=>%d",x,y,z);