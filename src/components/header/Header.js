import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faBed, faCar, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOption] = useState(false);
  const navigate = useNavigate();
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
    room: 1,
  });

  const [date, setDate] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
  }])

  const handleOptions = (name, action) => {
    setOptions(prev => {
      return {
        ...prev,
        [name]: action === 'i' ? options[name] +1 : options[name] -1,
      };
    });
  }

  const hadleSearch = () => {
    navigate("/hotels", { state: { destination, date, options } })
  }

  const { adults, children, room } = options;

  return (
    <div className="Header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerlist">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed} />
            <span>Hospedagens</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Voos</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Aluguel de carros</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Atrações</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Taxi (aeroport)</span>
          </div>
        </div>
        {type !== 'list' &&
        <>
          <h1 className="headerTitle">Descontos para sempre? É Genius.</h1>
          <p className="headerDesc">
          Viajar compensa – libere descontos imediatos de 10% ou mais com uma conta grátis na Booking.com
          </p>
          <button className="headerBtn">Faça login / Cadastrar-se</button>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input type="text" placeholder="Para onde você vai?" className="headerSearchInput" onChange={(e) => setDestination(e.target.value)}/>
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span onClick={() => setOpenDate(!openDate)} className="headerSerachText">{`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={ true }
                onChange={ item => setDate([item.selection])}
                moveReangeOnFirstSelection={ false }
                ranges={ date }
                className="date"
                minDate={new Date()}
              />}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span onClick={() => setOpenOption(!openOptions)} className="headerSerachText">{`${adults} ${adults === 1 ? "adulto" : "adultos"} · ${children} ${children === 1 ? "criança" : "crianças"} ·  ${room} ${room === 1 ? 'quarto' : "quartoS"}`}</span>
              {openOptions &&
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adultos</span>
                    <div className="optionCounter">
                      <button disabled={adults <= 1} onClick={() => handleOptions('adults', 'd')}className="optionCounterButton">-</button>
                      <span className="optionCounterNumber">{ adults }</span>
                      <button className="optionCounterButton" onClick={() => handleOptions('adults', 'i')}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Criança</span>
                    <div className="optionCounter">
                      <button disabled={children === 0} className="optionCounterButton" onClick={() => handleOptions('children', 'd')}>-</button>
                      <span className="optionCounterNumber">{ children }</span>
                      <button className="optionCounterButton" onClick={() => handleOptions('children', 'i')}>+</button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Quarto</span>
                    <div className="optionCounter">
                      <button disabled={room <= 1} className="optionCounterButton" onClick={() => handleOptions('room', 'd')}>-</button>
                      <span className="optionCounterNumber">{ room }</span>
                      <button className="optionCounterButton" onClick={() => handleOptions('room', 'i')}>+</button>
                    </div>
                  </div>
                </div>
              }
            </div>
            <div className="headerSearchItem">
              <button onClick={hadleSearch} className="headerBtn">Pesquisar</button>
            </div>
          </div>
        </>
        }
      </div>
    </div>
  )
}

export default Header;
