import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import MailList from '../../components/mailList/MailList';
import NavBar from '../../components/navbar/NavBar';

const Hotel = () => {
  const photos = [
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281682619.jpg?k=b46ecfe67e4949f830d5237bfbfadf893dec52ae1c94af9add2653d6ef007f76&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/174137653.jpg?k=b168d7bac04e3a4cab6f52ecf42806b8acc803a627baefdb08acaccbf43718af&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281687866.jpg?k=2143ee6972da350da4946689434248e81c99d189b248db09941ac4ac6ca6345f&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/39568774.jpg?k=f126d4457718c54029662fa868b002662a93518baa7d0ddaed9145b97d8681d8&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/274059877.jpg?k=279e6de33d56c10da9823bbedb0e129da76066fa465b2d06c5521ff263008522&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/274059857.jpg?k=f0a2af6bc633f8ea6f6b582447cc99f4fb7702a4b9ec5ebc0c30057863e776e6&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281682616.jpg?k=b12594b83d77c2ff92d8608bcec7cf8f74d389f0a27095ea950ebaf6a3ff5b97&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/274059885.jpg?k=1d0309168c8925d64233b2deac8d13ccd55afdcb38a06f22f7f547054840d6fc&o=&hp=1"
    },
    {
      src: "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/274059875.jpg?k=905bbb8c92b3e9b59744f289a5eff410fa4ddc9dd929c6c267a5bdf89490e898&o=&hp=1"
    }
  ];
  return (
    <div>b
      <NavBar />
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reservar agora</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance">Exelente Localização - 500m do centro</span>
          <div className="hotelImages">
            {photos.map(({ src }) => (
              <div key={src} className="hotelImgWrapper">
                <img src={src} alt="" className="hotelImg"/>
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsText">
              <h1 className="hotelTitle">Fique no coração de Punta del Este</h1>
              <p className="hotelDesc">Você se qualifica para um desconto Genius em TAS D VIAJE Suites - Hostel Boutique! Para economizar nesta acomodação, basta fazer o login. <br/><br/>Esta acomodação está a 1 minuto de caminhada da praia. Localizado no centro de Punta del Este, o TAS D VIAJE Suites - Hostel Boutique oferece acomodações confortáveis e econômicas com Wi-Fi gratuito. O albergue dispõe de um bar animado, onde você pode relaxar e desfrutar de uma bebida.<br/><br/>Os quartos do TAS D VIAJE Suites - Hostel Boutique incluem ar-condicionado, TV a cabo e banheiro privativo. Você pode desfrutar de vistas espetaculares do mar a partir de seu quarto.<br/><br/>No TAS D VIAJE Suites você vai encontrar uma recepção 24 horas, bem como churrasqueira, casa noturna e restaurante. Você também pode relaxar no animado lounge de uso comum.</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Destaques da acomodação</h1>
              <span>Situada no verdadeiro coração de Punta del Este, esta acomodação possui uma nota de localização excelente: 9,7</span>
              <h2><b>R$957</b> (8 noites)</h2>
              <button>Reservar agora</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotel;
