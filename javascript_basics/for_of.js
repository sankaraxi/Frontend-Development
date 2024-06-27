// example of for of
// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for( const key of Object.keys(clothingItem) ) {
//     console.log(key, ":", clothingItem[key])
// }

//dynamically access a property name.
function testBracketsDynamicAccess() {
    var dynamicKey;
    var rand = Math.random()
    if(rand < 0.5) {
      console.log(rand)
      dynamicKey = "speed";
     }else{
       console.log(rand)
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }

testBracketsDynamicAccess();
console.log();
//for each
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);