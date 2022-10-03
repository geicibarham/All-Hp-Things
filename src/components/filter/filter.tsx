import React, { ReactHTMLElement, useState } from "react";
import styles from "./filter.module.css";

const Filter = (props: any) => {
  const [selectedOption, setSelectedOption] = useState<String>();
  const [characterName, setcharacterName] = useState("");

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    console.log(value)
    props.filterChangeHandler(event.target.value);
  };

  const inputchangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcharacterName(event.target.value);
   
  };

  const formSubmission = (event: React.FormEvent) => {
    event.preventDefault();
  
 

const arry = characterName.split(" ")
for(let i =0;i < arry.length; i++) {
  arry[i] = arry[i].charAt(0).toUpperCase() + arry[i].slice(1);
}

const finalString = arry.join(" ");
console.log(finalString);
props.getCharacterName(finalString)
// props.getCharacterName(characterName)
  };

  return (
    <>
      <section id={styles.outer_container}>
        <div className={styles.filter}>
          <form onSubmit={formSubmission}>
            <input
              value={characterName}
              onChange={inputchangeHandler}
              id={styles.search}
              type="search"
              placeholder="Search Character By name"
            />
            <button id={styles.submit} type="submit">
              Search
            </button>
          </form>
          <select onChange={selectChange} name="houses" id={styles.houses}>
            <option value="value" selected>
              Filter By House
            </option>
            <option value="Slytherin">Slytherin</option>
            <option value="Gryffindor">Gryffindor</option>
            <option value="Hufflepuff">Hufflepuff</option>
            <option value="Ravenclaw">Ravenclaw</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Filter;
