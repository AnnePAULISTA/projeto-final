import imagemPerfil from "../../assets/foto-perfil.jpeg";
import imagemMain from "../../assets/main-photo.png";
import Footer from "../../components/footer/Footer";
import "./main.css";

function Main() {
  return (
    <>
      <div className="main">
        <div>
          <img
            src={imagemMain}
            alt="Imagem de crianças de costas com mochilas ilustrativas"
          />
        </div>
        <hr></hr>
        <h1> Quem está por trás dessa idéia</h1>

        <section className="main-card-about">
          <img className="image-about" src={imagemPerfil} />
          <p>
            Oiê! eu sou a Anne, tenho 32 anos, sou mãe de duas crianças lindas e
            cursei 8 periodos de Pedagogia. As séries iniciais sempre foram
            minha maior paixão! Nos estágios observava uma dificuldade muito
            grande das famílias em dar suporte para as crianças nessa fase e
            quis trazer como todo o processo funciona e como você pode fazer sua
            parte tornando tudo mais leve.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Main;
