var cast = {
  "characters": [
    {
      "name": "Jon Snow",
      "shortCode": "jon-snow",
      "actor": "Kit Harrington",
      "house": "Stark",
      "location": "The Wall"
    },
    {
      "name": "Tyrion Lannister",
      "shortCode": "tyrion",
      "actor": "Peter Dinklage",
      "house": "Lannister",
      "location": "Dragonstone"
    },
    {
      "name": "Brienne of Tarth",
      "shortCode": "brienne",
      "actor": "Gwendoline Christie",
      "house": "Stark",
      "location": "Winterfell"
    },
    {
      "name": "Eddard Stark",
      "shortCode": "ned-stark",
      "actor": "Sean Bean",
      "house": "Stark",
      "location": "unknown"
    },
    {
      "name": "Sandor Clegane",
      "shortCode": "the-hound",
      "actor": "Rory McCann",
      "house": "Clegane",
      "location": "unknown"
    },
  ]
}

$(document).ready(function () {
  var characterTemplate = $("#character-template").html();

  var compiledCharacterTemplate = Handlebars.compile(characterTemplate);

  $(".character-list-container").html(compiledCharacterTemplate(cast));



});