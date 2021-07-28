const str1 = ["one", "two"];
const str2 = ["three", "four"];

const strNumbers = [...str1, ...str2 ];

console.table(strNumbers);

const strNumbersBis = [];

strNumbersBis.push( ...str1 , ...str2 );

console.table(strNumbersBis);