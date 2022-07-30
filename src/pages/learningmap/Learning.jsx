import "./learning.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Learning() {
  return (
    <>
      <Header></Header>
      <img
        className="fluxogram"
        src="https://cdn.discordapp.com/attachments/835234743108632578/1002788549701156905/WhatsApp_Image_2022-07-30_at_00.54.49.jpeg?width=513&height=385"
      />
      <a href="https://www.soescola.com/2017/03/fases-da-alfabetizacao-da-crianca.html">
        <button class="learn-more">Saiba mais!</button>
      </a>
      <Footer />
    </>
  );
}

export default Learning;
