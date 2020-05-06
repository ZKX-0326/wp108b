function neg(a){
    for(i=0;i<a.length;i++){
        for(j=0;j<a[i].length;j++){
            a[i][j]=a[i][j]*-1;
        }
    }
    return a;
}
var a=[[1,2],[3,4]];
console.log(neg(a));