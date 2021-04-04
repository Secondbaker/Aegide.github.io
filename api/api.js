function urlExists(url, callback){
    $.ajax({
      type: 'HEAD',
      url: url,
      success: function(){
        callback(true);
      },
      error: function() {
        callback(false);
      }
    });
  }

function someCallback(){
    // do something, perhaps
}

function testAPI() {
    console.log("START")
    baseURL = "https://pokeapi.co/api/v2/pokemon/"
    startIndex = 1
    endIndex = 898
    for(index = startIndex; index <= endIndex; index++){
        url_A = baseURL + index
        url_B = baseURL + index + "/" 
        urlExists(url_A, someCallback)
        urlExists(url_B, someCallback)
        // console.info(index)
    }
    console.log("END")
}

testAPI()



/*
minPoke = 1
maxPoke = 420

function random(){

  var rand = Math.floor(minPoke + Math.random() * Math.floor(maxPoke - minPoke + 1));
  // console.log(rand)
  
  if(dict[rand]==undefined){
  	dict[rand] = 1
  }
  else{
   dict[rand] = dict[rand] + 1
  }
}

iterationSize = maxPoke * maxPoke
dict = {}

for(var i = 0; i < iterationSize; i++){
	random()
}
console.log(dict)


console.log("MISSING :")
for(var j = minPoke; j <= maxPoke; j++){
	if(dict[j]==undefined){
  	console.log(j)
  }
} 
*/

