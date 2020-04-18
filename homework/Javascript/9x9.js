for(i=1;i<=9;i++){
    for(j=1;j<=9;j++){
        process.stdout.write("%d*%d=%d \t",i,j,i*j)
    }
    process.stdout.write("\n");
}