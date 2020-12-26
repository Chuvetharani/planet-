import React from "react";
import "./styles.css";
import Planet from './Planet'

export default function Planets() {
  let [planets, setPlanets] = React.useState([
    {
      "id":"mercury",
      liked: "🤍",
      "isFavourite":false,
      "name":"Mercury"
    },
    {
      "id":"venus",
      liked: "🤍",
      "isFavourite":false,
      "name":"Venus"
    },
    {
      "id":"earth",
      liked: "🤍",
      "isFavourite":false,
      "name":"Earth"
    },
    {
      "id":"mars",
      liked: "🤍",
      "isFavourite":false,
      "name":"Mars"
    },
    {
      "id":"ceres",
      liked: "🤍",
      "isFavourite":false,
      "name":"Ceres"
    },
    {
      "id":"jupiter",
      liked: "🤍",
      "isFavourite":false,
      "name":"Jupiter"
    },
    {
      "id":"saturn",
      liked: "🤍",
      "isFavourite":false,
      "name":"Saturn"
    },
    {
      "id":"pluto",
      liked: "🤍",
      "isFavourite":false,
      "name":"Pluto"
    },
    {
      "id":"haumea",
      liked: "🤍",
      "isFavourite":false,
      "name":"Haumea"
    },
    {
      "id":"makemake",
      liked: "🤍",
      "isFavourite":false,
      "name":"Makemake"
    },
    {
      "id":"eris",
      liked: "🤍",
      "isFavourite":false,
      "name":"Eris"
    }
  ]);
   
  const handleLike = (id) => {
    const planetsCopy = planets.map((planet) => {
      const planetsCopy = { ...planet };
      if (planetsCopy.id === id) {
        if (planetsCopy.liked === "🤍") {
          planetsCopy.liked = "❤️";
          planetsCopy.isFavourite = true;
          
        } else {
          planetsCopy.liked = "🤍";
          planetsCopy.isFavourite = false;
        }
      }
      return planetsCopy;
    });
    setPlanets(planetsCopy);
  };
  var result = planets.filter(fav => fav.isFavourite === true); 
        console.log(result);
    return (
      <>
        <div className="heading"> Planet List</div>
        {planets.map((planet) => (
          <Planet
            id={planet.id}
            name={planet.name}
            liked={planet.liked}
            handleLike={handleLike}
          />
        ))}
        <div>
            {planets.filter(fav => fav.isFavourite === true).map(favPlanet => (
              <h1 className="txt">
                {favPlanet.name}
              </h1>
            ))}
        </div>
      </>
    );
  }