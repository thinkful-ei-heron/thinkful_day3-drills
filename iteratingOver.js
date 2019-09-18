let obj = {
  foo : 12,
  bar : 14,
  fum : 16,
  quux : 18,
  spam : 20
};
for(const key in obj) {
  console.log(`${key} : ${obj[key]}`);
}
//console.log(Object.keys(obj));
//console.log(Object.values(obj));
