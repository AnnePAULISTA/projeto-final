import Footer from "../../components/footer/Footer";
import "./contact.css";

function Contact() {
  return (
    <>
      <h1>Ficou com alguma dúvida? Tem uma mensagem de amor? Manda pra mim!</h1>

      <div className="contato">
        <img
          src="https://i.ibb.co/PjSTsJV/contact-page.png"
          alt="Imagem de menina com megafone"
        />
        <form className="form-container">
          <input
            className="container"
            type="text"
            placeholder="Nome"
            required
          />
          <input
            className="container"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="container-msg"
            placeholder="Envie sua mensagem"
            required
          />
          <button className="click">Enviar!</button>
        </form>
      </div>
      <Footer />
    </>
  );
}
export default Contact;
