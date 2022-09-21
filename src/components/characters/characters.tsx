import React, { useState, useEffect } from "react";
import styles from "./characters.module.css";
import Footer from "../footer/footer";

import characters from "../../data";

const Characters = () => {
  //   const [characters, setCharacters] = useState<Character[]>([]);
  const [error, setError] = useState({});
  const [test, setTest] = useState(false);

  useEffect(() => {
    setTest(true);
  }, []);
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
          {characters &&
            characters.map((character) => (
              <>
                {/* {character.house === "test" ? "test" :
   "bla")} */}
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
