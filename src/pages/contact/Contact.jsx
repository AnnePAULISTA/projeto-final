import Footer from "../../components/footer/Footer";
import "./contact.css";

function Contact() {
  return (
    <>
      <h1>Ficou com alguma dúvida? Tem uma mensagem de amor? Manda pra mim!</h1>

      <div className="contato">
        <img
          src="https://cdn.discordapp.com/attachments/835234743108632578/1002788549940220034/WhatsApp_Image_2022-07-30_at_00.54.51.jpeg?width=466&height=385"
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
