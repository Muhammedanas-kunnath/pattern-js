
// let row=5


// for(let i=1;i<=row;i++){
//    star=''
//     for(let j=1; j<=i;j++){
//         star=star+"*"
//     }
//     console.log(star);
// }

// let row=5


// for(let i=row;i>=1;i--){
//   let star=''
//     for(let j=1; j<=i;j++){
//         star=star+"* "
//     }
//     console.log(star);
// }

let row = 5

for(let i=1;i<=row;i++){
    let star=''
      for(let k=1; k<=row-i;k++){
          star=star+" "
      }

      for(let j=1; j<=i;j++){
          star=star+"* "
      }
      console.log(star);
  }


// let row= 5
// for (let i = row ; i>=1; i--){
//     let star = ""
// for(let j=1;j<=row-i;j++){
//     star=star+" "
// }

// for(let j=1;j<=i;j++){
//     star=star+"*"
// }
// console.log(star)
// }
// for (let i = row ; i>=1; i--){
//     let star = ""
// for(let j=1;j<=row-i;j++){
//     star=star+" "
// }

// for(let j=1;j<=i;j++){
//     star=star+"*"
// }
// console.log(star)
// }