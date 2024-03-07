import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer-container flex flex-col">
      <div className="footer flex flex-col justify-around bg-neutral-800 text-white">
        <div className="top-section justify-around w-full sm:hidden lg:flex  ">
          <div className="left-footer-section">
            <h2 className="text-red-500 mb-5 mt-20">Institucional</h2>
            <ul>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Quem somos</a>
              </li>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Termos e Condições de Venda</a>
              </li>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Política de Troca e Devoluções</a>
              </li>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Política de Cookies</a>
              </li>
            </ul>
          </div>
          <div className="middle-footer-section">
            <ul>
              <h2 className="text-red-500 mb-5 mt-20">Dúvidas</h2>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Como comprar</a>
              </li>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Prazos e entregas</a>
              </li>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Formas de pagamento</a>
              </li>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Programa de Parceiros</a>
              </li>
            </ul>
          </div>
          <div className="right-footer-section">
            <ul>
              <h2 className="text-red-500 mb-5 mt-20">Cliente</h2>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Minha conta</a>
              </li>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Meus pedidos</a>
              </li>
              <li className="mt-5 hover:text-red-500">
                <a href="#">Meus tickets</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="social-section bg-neutral-700 mt-28 flex flex-col items-center">
          <div className="social-text h-14 w-full flex justify-center items-center">
            <p>Siga-nos</p>
          </div>
          <div className="social-icons flex flex-row items-center justify-around w-96 h-28">
            <a
              href="https://www.youtube.com/@redeancora6759"
              target="blank"
              className="hover:text-red-500"
            >
              <FaYoutube className="text-7xl" />
            </a>
            <a
              href="https://www.facebook.com/RedeAncora"
              target="blank"
              className="hover:text-red-500"
            >
              <AiFillFacebook className="text-7xl" />
            </a>
            <a
              href="https://www.instagram.com/redeancorabr/"
              target="blank"
              className="hover:text-red-500"
            >
              <AiFillInstagram className="text-7xl" />
            </a>
          </div>
        </div>
        <div className="company-section  py-10 flex flex-row justify-center">
          <div className="company-section-logo">
            <img src="../logo/logoAncora.png" className="w-72 " />
          </div>
          <div className="company-section-desc text-white flex flex-col text-center justify-center w-4/12">
            <p>
              Empresa Nacional dos Comerciantes, Importadores e Exportadores de
              Autopecas e Franquias S/A
            </p>
            <p>CNPJ: 25.187.746/0001-87</p>
            <p className="uppercase">Atendimento</p>
            <p>De segunda a sexta das 9:00 às 18H</p>
          </div>
        </div>
      </div>
    </div>
  );
}
