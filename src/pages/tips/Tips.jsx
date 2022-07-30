import "./tips.css";
import Footer from "../../components/footer/Footer";

function Tips() {
  return (
    <>
      <section className="box-tips">
        <div className="card-tips1">
          <h3>Peça ajuda com a lista de compras</h3>
          <p>
            Crianças são naturalmente curiosas e transformam tudo em
            brincadeira. Peça ajuda quando for montar a lista de compras do mês,
            usando encarte de mercados, solicite que ela pegue papel, lápis e
            faça a lista com sua supervisão.
          </p>
        </div>

        <div className="card-tips2">
          <h3>Estimule sempre a leitura</h3>
          <p>
            Monte uma pequena biblioteca em casa com livros simples e adequados
            para a faixa etária. Crie o hábito da leitura em momentos pontuais
            do dia, pós almoço, antes de dormir e etc. Sempre sente-se e leia
            junto para que ela se sinta acolhida e saiba que é um momento de
            vocês.
          </p>
        </div>

        <div className="card-tips3">
          <h3>Faça brincadeiras usando letras e palavras</h3>
          <p>
            Existe uma brincadeira muito bacana e que ajuda muito a criança
            nessa fase, chama-se "eu vejo com o meu olhinho". Você só precisa
            pedir que ela indique algo na natureza, na rua ou em casa com uma
            determinada letra, depois é sua vez. Ela vai prestar atenção em cada
            palavra que você achar com a letra escolhida e assim fixar sons,
            fonemas e começar à entender as diferenças de uma para outra.
          </p>
        </div>

        <div className="card-tips4">
          <h3>Faça cartões com nome dos objetos de casa</h3>
          <p>
            A alfabetização é feita na repetição e fixação dos sons das
            palavras. Ao ouvir determinado nome de um objeto e ter contato
            direto com a escrita dele, a criança absorve aos poucos que aquelas
            letras formam a palavra, que nomeiam cada objeto do nosso dia a dia.
          </p>
        </div>

        <div className="card-tips5">
          <h3>Brinque de inventar histórias</h3>
          <p>
            Contar e ouvir histórias sempre será um dos mais importantes
            estímulos que a criança pode receber nessa fase. Através da
            imaginação, ela absorve e aprende grande parte das palavras,
            expressões e sons que fazemos ao ler.
          </p>
        </div>

        <div className="card-tips6">
          <h3>Cante/escute canções com rimas</h3>
          <p>
            A rima é uma forma de repetição de sílabas que prende a atenção da
            criança. Ao tentar reproduzir os sons ela entende que várias
            palavras são amigas, primas e que fazem o mesmo barulhinho.
          </p>
        </div>
      </section>

      <img
        className="image-tips"
        src="https://cdn.discordapp.com/attachments/835234743108632578/1002788550162514012/WhatsApp_Image_2022-07-30_at_00.54.50_1.jpeg?width=360&height=385"
        alt="Imagem de três crianças olhando pra cima"
      />

      <Footer />
    </>
  );
}

export default Tips;
