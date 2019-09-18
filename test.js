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
      }
      /*evaulateFight : function( species[attack] , species[defense]){
        console.log(`Your opponent takes ${} damage and you recieve ${} damage`)
      }*/
  }
}
const gandalf = createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6);
const bilbo = createCharacter()
console.log(gandalf);
gandalf.describe();
let characters = []



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