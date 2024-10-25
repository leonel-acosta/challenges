import Chance from "chance";
export default function handler(request, response) {
  var Chance = require("chance");

  var chance = new Chance();

  const randomCharacter = {
    firstName: chance.first(),
    lastName: chance.last(),
    twitterName: chance.twitter(),
    geohash: chance.geohash(),
  };

  console.log("Backend test");

  response.status(200).json(randomCharacter);
  console.log(randomCharacter);
}
