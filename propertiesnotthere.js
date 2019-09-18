'use strict';
let obj1 = {
  name : 'Fred',
  jobTitle : 'Chef'
};
let obj2 = {
  name : 'Chuck',
  jobTitle : 'Prep Cook',
  boss : 'Fred'
};
let obj3 = {
  name : 'Dylan',
  jobTitle : 'Sous Chef',
  boss : 'Fred'
};
let obj4 = {
  name : 'Randy',
  jobTitle : 'Dishwasher',
  boss : 'Fred'
};
let obj5 = {
  name : 'Nelly',
  jobTitle : 'General Manager',
  boss : 'Fred'
};
  
let arr = [obj1, obj2, obj3, obj4, obj5];


arr.forEach(
  index => {
    if (Object.keys(index).length !== 3) {
      console.log(`${index.jobTitle} ${index.name} reports to no one!`);
    }
    else {
      console.log(`${index.jobTitle} ${index.name} reports to ${index.boss}.`);
    }
  });
