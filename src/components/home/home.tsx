import styles from "./home.module.css";
import 'animate.css';
const Home = () => {
  const test = () => {
    console.log("test");
  };
  return (
    <section id={styles.home}>
      <button className="animate__animated animate__backInDown"
       onClick={test}>Enter</button>
    </section>
  );
};

export default Home;
