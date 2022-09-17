import styles from "./home.module.css";
import Nav from "../nav/nav";
const Home = () => {
  const test = () => {
    console.log("test");
  };
  return (
    <section id={styles.home}>
      <button onClick={test}>Enter</button>
    </section>
  );
};

export default Home;
