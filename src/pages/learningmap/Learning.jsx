import "./learning.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Learning() {
  return (
    <>
      <Header></Header>
      <img className="fluxogram" src="../src/assets/fluxograma.png" />
      <a href="https://www.soescola.com/2017/03/fases-da-alfabetizacao-da-crianca.html">
        <button class="learn-more">Saiba mais!</button>
      </a>
      <Footer />
    </>
  );
}

export default Learning;
