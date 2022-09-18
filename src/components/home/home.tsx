import styles from "./home.module.css";
import "animate.css";
import Footer from "../footer/footer";
const Home = () => {
  const test = () => {
    console.log("test");
  };
  return (
    <>
      <section id={styles.home}>
        <button
          className="animate__animated animate__backInDown"
          onClick={test}
        >
          Enter
        </button>
      </section>

      <Footer />
    </>
  );
};

export default Home;
