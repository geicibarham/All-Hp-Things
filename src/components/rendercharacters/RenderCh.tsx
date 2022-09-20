import Characters from "../characters/characters";
import styles from "./render.module.css";
const RenderCharacter = () => {
  return (
    <section className={styles.outer__container}>
      <Characters />
    </section>
  );
};

export default RenderCharacter;
