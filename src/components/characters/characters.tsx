import React, { useState, useEffect } from "react";
import styles from "./characters.module.css";
import Footer from "../footer/footer";

import characters from "../../data";

const Characters = () => {
  //   const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState({});
  //   const [data, setData] = useState<Character[]>([]);

//   interface Character {
//     name: string;
//     actor: string;
//     id: string;
//     image: string;
//     house?: string;
//   }
  //   useEffect(() => {
  //     fetch('./data.json')
  //       .then((response) => response.json())
  //       .then((res) => setData(res.slice(0, 5)))
  //       .catch((err) => setError(err));
  //   }, []);

  return (
    <>
      <section id={styles.characters}>
        <>
          {/* {characters.length > 0
          ? characters.map((character: Character) =>
              console.log(character.name)
          
            )
          : "Loading..."} */}

          {characters&&
            characters.map((character) => (
              <>
                <aside key={character.id}>
                  <h2>{character.name}</h2>

                  {character.image && (
                    <img
                      className={styles.img__card}
                      src={character.image}
                      alt={character.name}
                    />
                  )}
                {
                    character.house && (
                        <p>{character.house}</p>
                    )
                }

               
                    <img className={styles.icon}
                     src = {character.icon} alt={'character house icon'}/>
                
                </aside>
              </>
            ))}
        </>
      </section>

      <Footer />
    </>
  );
};
export default Characters;
