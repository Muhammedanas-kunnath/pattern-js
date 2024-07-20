let row = 5;

for (let i = row; i >= 1; i--) {
  star = "";
  for (let j = 1; j <= i; j++) {
    star = star + "*";
  }
  console.log(star);
}



for(let i=1;i<row;i++){
    let star=''

      for(let j=0; j<=i;j++){
          star=star+"*"
      }
      console.log(star);
  }

