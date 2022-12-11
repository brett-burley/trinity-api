const raw = "我亲爱的孩子，我知道时间很晚了。你玩了一天，累了，现在是睡觉的时候了。但是你说你想在睡觉前听一个故事[1]。所以现在我给你讲一个很老的关于猴子[2]的故事。这只猴子很强大，也很聪明，但是有的时候他也很淘气[3]。他需要去学习什么是爱，去学习怎么去帮助别人。"
let text = '';

for(let i = 0; i < raw.length; i++) {
  const c = raw[i];
  const regex = /\d/;
  if(c !== '[' && c !== ']' && !c.match(regex)) {
    text += c;
  }
}

const result = [];
let tmp = '';
let line = [];
for(let j = 0; j < text.length; j++) {
  let c = text[j];
  tmp += c;
  if(c === '，') {
    line.push(tmp);
    tmp = '';
  }

  if(c === '。') {
    line.push(tmp);
    result.push(line);
    line = [];
    tmp = '';
  }
}

console.log(result);

/*
const str = text.replace(regex, '');

const lines = str.split(' ');
console.log(lines);
*/
