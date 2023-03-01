//9. Design a method to merge two array element in zigzag manner. 

let zig = [1,3,5,7,9];
let zag = [2,4,6,8,10];
let zigzag = [];

for(let i=0;i<zig.length;i++){
  for(let j=0;j<zag.length;j++) {
  }  
  zigzag.push(zig[i]);
  zigzag.push(zag[i]);
}
console.log(zigzag);