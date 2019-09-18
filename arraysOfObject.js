let obj1 = {
  name : 'Fred',
  jobTitle : 'Chef'
}
let obj2 = {
  name : 'Chuck',
  jobTitle : 'Prep Cook'
}
let obj3 = {
  name : 'Dylan',
  jobTitle : 'Sous Chef'
}
let obj4 = {
  name : 'Randy',
  jobTitle : 'Dishwasher'
}
let obj5 = {
  name : 'Nelly',
  jobTitle : 'General Manager'
}

let arr = [obj1, obj2, obj3, obj4, obj5];
arr.forEach(function(index){
  console.log(index);
});