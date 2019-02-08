// Goal is to replicate the results of the map function without using .map
//I will do so by creating a function that will push modified values from an existing array,
//into a brand new array just as the new one would.

var words = ["ground", "control", "to", "major", "tom"];
var Fresh_array = [];

function topfunction(OG_array, cb) {
    OG_array.forEach(function(word,i) {
      var magic = mappyboi(word);
      Fresh_array.push(magic);
    //   console.log(magic);
    })
  };

function mappyboi(index) {
  return (index.length)
  }

topfunction(words,mappyboi)

console.log(Fresh_array);