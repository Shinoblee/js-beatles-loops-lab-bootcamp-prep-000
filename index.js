function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}

function johnLennonFacts(facts){
  const arr = [];
  let i = 0;
  while (i < facts.length){
    arr.push(`${facts[i]}!!!`);
    i++;
  }
  return arr;
}

function iLoveTheBeatles(num){
  let arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  }while (num < 15);
  
  return arr;
}