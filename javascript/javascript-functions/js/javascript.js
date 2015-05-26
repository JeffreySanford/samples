function plus(a, b) {
  var sum = a + b;
  return sum;
}

console.log(plus(2, 2));

function morePlus(a, b) {
  return (
    console.log(a + b),
    console.log(this),
    console.log(arguments)
  )  
}

morePlus(2, 2);

var info = {
  full_name : "Jeffrey Sanford",
  title: "author",
  links : [
    { blog : "jeffreysanford.github.io"},
    { twitter: "https://twitter.com/jeffreysanford"}
  ],
  plus : function(a,b) {
    return (
      console.log(this),
      console.log(a +b),
      console.log(arguments),
      console.log(this.title)
    )
  }
}

info.plus(2,2);