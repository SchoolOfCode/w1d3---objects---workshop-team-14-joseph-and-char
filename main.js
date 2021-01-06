let myHouse={ stories: 2,
             parking: "no",
             bedrooms:2,
             garden:1,
             energyEffRating : "D" }

let myCar={  colour: "red",
           wheels:4,
            powerSteering: true,
            seats:2,
            milesPerGallon: 20
          }
let myFavMovies={  Mov:"Dark Knight",
           Realeased:2008,
           LeadActor:"Christian Bale"
          }

let person = {
  name: "Ben",
  likesChocolate: true,
};

person.name = "Betty";
person.likesChocolate = false;

if(person.likesChocolate === true)
{
  console.log("Ben loves chocolate");
}
else
{
  console.log("Ben hates chocolate");
}
let desiredPleasantry = "greeting";

let bensPhrases = {
  greeting: "Well hello there!",
  farewell: "See you in another life brother",
  smallTalk: "Warm today isn't it...",
};
console.log (bensPhrases[desiredPleasantry]);

let person = {
  firstName: "firstName",
  lastName: "lastName",
  isBootcamper: false,
};

person.isBootcamper = true;
             
