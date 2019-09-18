let obj = {
  a : 2,
  b : 3,
  c : 4,
  d : 5
}


function decode(messege){
  let result = '';
  let words = messege.split(' ');
  let compare = Object.keys(obj);
  words.forEach(word => {
      if(word.startsWith(compare[0])) {
          result += word[1];
      }
      else if(word.startsWith(compare[1])) {
          result += word[2];
      }
      else if(word.startsWith(compare[2])) {
          result += word[3];
      }
      else if(word.startsWith(compare[3])){
          result += word[4];
      }
      else {
          result += ' ';
      }
  }) 
  return result.toUpperCase();
}

let str = 'craft block argon meter bells brown croon droop';

function decodeWords(decode, str) {
  console.log(decode(str));
};

decodeWords(decode, str);