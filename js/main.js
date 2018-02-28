function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
Handlebars.registerHelper("formatName", function (property1, property2) {
  return new Handlebars.SafeString("Hello my name is <strong>" + property1 + "</strong> and I live at <strong>" + property2 + "</strong>");
});

Handlebars.registerHelper("formatPhoneNumber", function (property) {
  if (property) {
    var phone = property.toString();
    return "(" + phone.substr(0, 3) + ") " + phone.substr(3, 3) + "-" + phone.substr(6, 4);
  }
});

Handlebars.registerHelper("makeBold", function (options) {
  return new Handlebars.SafeString("<strong>" + options.fn(this) + "</strong>");
});

Handlebars.registerHelper("toLower", function (options) {
  return options.fn(this).toLowerCase();
});

$(document).ready(function () {
  var characterTemplate = $("#character-template").html();

  var compiledCharacterTemplate = Handlebars.compile(characterTemplate);
  var $characterList = $(".character-list-container");

  var characterId = getParameterByName("id");
  console.log("Character id: ", characterId);

  $.ajax("./character-details-partial.html").done(function (charDetailsPartial) {
    $("body").append(charDetailsPartial);
    Handlebars.registerPartial("characterDetailsPartial", $("#character-details-partial").html());
  });

  $.ajax("./data/cast.json").done(function (cast) {
    if ($("body").hasClass("page-cast-details")) {
      $(".character-list-container").html(compiledCharacterTemplate(cast.characters[characterId]));
    } else {
      $(".character-list-container").html(compiledCharacterTemplate(cast));
    }
  });

  $(".character-list-container").on("click", ".view-details", function () {
    console.log("Button clicked");
  });

});