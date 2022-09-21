import styles from "./home.module.css";
import "animate.css";
import Footer from "../footer/footer";
import { Link } from 'react-router-dom'
const Home = () => {

  return (
    <>
      <section id={styles.home}>

      <Link to="/characters">
        <button id="enter"className="animate__animated animate__backInDown">
          Enter
        </button>
        </Link>
      </section>

      <Footer />
    </>
  );
};

export default Home;
