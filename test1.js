

function createCharacter(name, nickname, race, origin, attack, defense){
    return {
      name : name,  
      nickname : nickname,
      race : race,
      origin : origin,
      attack : attack,
      defense : defense,

      describe : function() {
        console.log(`${this.name} is a ${this.race} from ${this.origin}`);
      },
      evaulateFight : function(enemy){
        function attack(defense, attack) {
          if(attack - defense < 0) {
            return 0;
          }
          else {
            return attack - defense;
          }
        }
        function defense(defense, attack) {
          if(attack - defense < 0) {
            return 0;
          }
          else {
            return attack - defense;
          }
        }
        console.log(`Your opponent takes ${attack(enemy.defense, this.attack)} damage and you receive ${defense(this.defense, enemy.attack)} damage`);
      }
  }
}
const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const bilbo = createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'the Shire', 2, 1);
const frodo = createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2);
const aragorn = createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8);
const legolas = createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5);
const arwen = createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 5, 5);

console.log(gandalf);
gandalf.describe();
aragorn.evaulateFight(bilbo);
let characters = [gandalf, bilbo, frodo, aragorn, legolas, arwen];

arwen.describe();

characters.find(item => item.nickname  === 'aragorn').describe();
let onlyHalflings = characters.Object.keys(filter(function(lotr) {
  lotr[origin] === 'Hobbit'
}))
console.log(onlyHalflings);

let onlyHalflings = character.filter()

//var marvelHeroes =  heroes.filter(function(hero) {
//	return hero.franchise == “Marvel”;
//var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

//const result = words.filter(word => word.length > 6);

//console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


//console.log('hllo wrld');
//console.log(characters);



// Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
// -----------------------------------------------------------------------------------------------
// | Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
// -----------------------------------------------------------------------------------------------
// | Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
// -----------------------------------------------------------------------------------------------
// | Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
// -----------------------------------------------------------------------------------------------
// | Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
// -----------------------------------------------------------------------------------------------
// | Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
// ----------------------------------------------------------------------