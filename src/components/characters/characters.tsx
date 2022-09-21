import React, { useState, useEffect } from "react";
import styles from "./characters.module.css";
import Footer from "../footer/footer";
import characters from "../../data";
const Characters = () => {
  //   const [characters, setCharacters] = useState<Character[]>([]);

  const [data, setData] = useState(characters);
  console.log(data[0]);

  //   interface Character {
  //     name: string;
  //     actor: string;
  //     id: string;
  //     image: string;
  //     house?: string;
  //   }

  const filtergriffyndor = () => {
    const filteredgryffyindor = characters.filter(
      (character) => character.house === "Gryffindor"
    );
    setData(filteredgryffyindor);
  };

  const filterSlytherin = () => {
    const filteredSlytherin = characters.filter(
      (character) => character.house === "Slytherin"
    );
    setData(filteredSlytherin);
  };
  const filterHufflepuff = () => {
    const filteredHufflepuff = characters.filter(
      (character) => character.house === "Hufflepuff"
    );
    setData(filteredHufflepuff);
  };

  const filterRavenclaw = () => {
    const filteredRavenclaw = characters.filter(
      (character) => character.house === "Ravenclaw"
    );
    setData(filteredRavenclaw);
  };

  return (
    <>
      <button onClick={filtergriffyndor}>Gryf</button>
      <button onClick={filterSlytherin}>Sly</button>
      <button onClick={filterHufflepuff}> Huff</button>
      <button onClick={filterRavenclaw}> Rav</button>
      <section id={styles.characters}>
        <>
          {data &&
            data.map((character) => (
              <>
             
                <aside
                  style={{
                    backgroundColor: `${
                      character.house === "Gryffindor"
                        ? "#310012"
                        : `${
                            character.house === "Slytherin"
                              ? "#00381f"
                              : `${
                                  character.house === "Hufflepuff"
                                    ? "#ecb939"
                                    : `${
                                        character.house === "Ravenclaw"
                                          ? "	#222f5b"
                                          : "black"
                                      }`
                                }`
                          }`
                    }
                `,
                  }}
                  key={character.id}
                >
                  <h2>{character.name}</h2>

                  {character.image && (
                    <img
                      className={styles.img__card}
                      src={character.image}
                      alt={character.name}
                    />
                  )}

                  {character.icon && (
                    <img
                      className={styles.icon}
                      src={character.icon}
                      alt={"character house icon"}
                    />
                  )}
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
