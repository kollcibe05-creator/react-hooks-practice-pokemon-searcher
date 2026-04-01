import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemonItem}) {
  const {name, hp, sprites} = pokemonItem
  const [flip, setFlip] = useState(false)
  return (
    <Card>
      <div onClick={() => setFlip(!flip)}>
        <div className="image">
          <img src={flip ? sprites.back : sprites.front} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
