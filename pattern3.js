let row=5


for(let i=1;i<=row;i++){
    let star=""
    for(let j=1; j<=i;j++){
        star=star+"*"
    }
    for(let k=1; k<=(row-i)*2;k++){
        star=star+" "
    }
  
    for(let j=1; j<=i;j++){
        star=star+"*"
    }
    console.log(star)
}
    
for(let i=row-1;i>=1;i--){
    let star=""
    for(let j=1; j<=i;j++){
        star=star+"*"
    }
    for(let k=1; k<=(row-i)*2;k++){
        star=star+" "
    }
  
    for(let j=1; j<=i;j++){
        star=star+"*"
    }
    console.log(star)
}




    
    
    
   
    
    
    
    
    


