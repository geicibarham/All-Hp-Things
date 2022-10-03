import Characters from "../characters/characters";
import styles from "./render.module.css";
import Filter from "../filter/filter";
const RenderCharacter = () => {
  return (
    <section className={styles.outer__container}>
      {/* <Filter /> */}
      <Characters />
    </section>
  );
};

export default RenderCharacter;
