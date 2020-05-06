function factor(n){
    var array=[];
    var x=2;
    while(n>1){
        if(n%x==0){
            array.push(x);
            n=n/x;
            continue;
        }
        x++;
    }
    return array;
}
console.log(factor(45));