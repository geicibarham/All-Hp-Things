import React, { useState, useEffect } from "react";
import styles from './characters.module.css'
import Footer from "../footer/footer";

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState({});

  interface Character {
    name: string;
    actor: string;
    id: string;
    image: string;
  }
  useEffect(() => {
    fetch("https://hp-api-marcosmarp.herokuapp.com/api/characters")
      .then((response) => response.json())
      .then((res) => setCharacters(res.slice(0, 5)))
      .catch((err) => setError(err));
  }, []);

  return (
    <>
    <section id={styles.characters}>
      <>
        {/* {characters.length > 0
          ? characters.map((character: Character) =>
              console.log(character.name)
          
            )
          : "Loading..."} */}

        {characters &&
          characters.map((character: Character) => 
          
          (<> 
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name}/>
          </>)
          )}
      </>
    </section>

    <Footer />
    </>
  );
};
export default Characters;
