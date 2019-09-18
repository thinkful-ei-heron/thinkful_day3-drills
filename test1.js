

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
let onlyHalflings = characters.filter(n => (n.race === 'Hobbit'));
console.log(onlyHalflings);

//To add a weapon, we would add a key called 'weapon' and then add the appropriate value for each object. 
//We can do this manually by adding the appropriate code to the factory function (weapon : weapon), and
//modifying the const declarations for each character appropriately 
//(const arwen = createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 5, 5, 'Hadhafang');).
//For modifying the describe method, we would just edit the text within the back-ticks by adding
//"who uses a ${weapon}." To change the factory function and the methods, we could write a smaller object with
//the addition of the weapon key : value pair and the modified describe function, then run Object.assign(obj1, obj2),
//to merge the changes into the original factory function.