import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import styles from "./characters.module.css";
import Footer from "../footer/footer";
import characters from "../../data";
import Filter from "../filter/filter";
import filter from "../../assets/images/filter.png";

const Characters = (props: any) => {
  const [data, setData] = useState(characters);
  const [filtercomponent, setShowFilter] = useState(false);
  const [filteredSchool, setFilteredSchool] = useState<String>();
  const [character, setCharacter] = useState("");
  const [characterfound, setCharacterfound] = useState("");

  const filterChangeHandler = (selectedSchool: string) => {
    setFilteredSchool(selectedSchool);
    universalFilter(selectedSchool);
  };

  const universalFilter = (selectedSchool: string) => {
    const filteredata = characters.filter(
      (character) => character.house === selectedSchool
    );
    setData(filteredata);
    setCharacterfound("");
    setShowFilter(false);
  };
  const getCharacterName = (typedname: string) => {
    setCharacter(typedname);
    filteDataByTypedCharacter(typedname);
    setShowFilter(false);
  };

  const filteDataByTypedCharacter = (typedname: string) => {
    const datatyped = characters.filter(
      (character) => character.name === typedname
    );
    if (datatyped.length === 0) {
      setData(data);
      setCharacterfound("No Characters Found!");
    } else {
      setData(datatyped);
    }
  };

  const showFilter = () => {
    setShowFilter(true);
    setCharacterfound('')
  };

  return (
    <>
      <nav className={styles.nav}>
        <div>
     
          <h1 id={styles.title}>Riddikulusϟ</h1>
    
        </div>
        {!filtercomponent && (
          <>
            <span id={styles.text}>
              Filter Characters
              <img
                onClick={showFilter}
                id={styles.filter}
                src={filter}
                alt="filter icon"
              />
            </span>
          </>
        )}
      </nav>

      {filtercomponent && (
        <Filter
          getCharacterName={getCharacterName}
          filteredSchool={filteredSchool}
          filterChangeHandler={filterChangeHandler}
          universalFilter={universalFilter}
        />
      )}
{
   <span id={styles.characterFound}>{characterfound}</span>
}
  
      {!filtercomponent && (
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
      )}

      <Footer />
    </>
  );
};
export default Characters;
