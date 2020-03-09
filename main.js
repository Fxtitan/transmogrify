

for(let i = 0; i < 5; i++){
console.log('loop' + i)
}













// so takes in one param
// add 9000 to the param
const biggify = (num) => {
  const total = num + 9000;
  return total;
}
biggify(1000)
console.log(biggify(1000))

const reversify = (str) => {
  let reverse = '';
  for(let char of str){
    reverse = char + reverse;
  }
  return reverse;
}
console.log(reversify("how in the world does this work"))

const titleify = (str) => {


}


const crazify = (str) => {
  
}

const nasafy = (start) => {
  let empty = [];
  for(i = start; start > 0; i --){
empty.push(i);
  }
  return empty + 'Blast Off!'
}
nasafy(10)




if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}
