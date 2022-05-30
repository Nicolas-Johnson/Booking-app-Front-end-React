import { format, setDate } from 'date-fns';
import React from 'react'
import { DateRange } from 'react-date-range';

const SearchList = ({ openDate, startDate, endDate, destination, date, setOpenDate, options: { adults, children, room } }) => {
  return (
    <div className="listSearch">
      <h1 className="listTitle">Pesquisar</h1>
      <div className="listItem">
        <label>Destino/nome da acomodação:</label>
        <input type="text" placeholder={ destination } />
      </div>
      <div className="listItem">
        <label>Data de entrada </label>
        <span className="listItemtextSpan" onClick={() => setOpenDate(!openDate)}>{`${format(startDate, "dd/MM/yyyy")} até ${format(endDate, "dd/MM/yyyy")}`}</span>
        {openDate && <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={ date } />}
        <div className="listItemOptions">
          <label>Opções</label>          
          <div className="listOptionsItem">
            <span className="listOptionText">Preço Minimo<small>. (por noite)</small></span>
            <input type="number" className="listOptionInput" />
          </div>
          <div className="listOptionsItem">
            <span className="listOptionText">Preço Maximo<small>. (por noite)</small></span>
            <input type="number" min={1} className="listOptionInput1" />
          </div>
          <div className="listOptionsItem">
            <span className="listOptionText">{adults > 1 ? "Adultos" : "Adulto"}</span>
            <input min={1} type="number" className="listOptionInput" placeholder={ adults } />
          </div>
          <div className="listOptionsItem">
            <span className="listOptionText">{children === 1 ? "Criança" : "Crianças"}</span>
            <input min={0} type="number" className="listOptionInput" placeholder={ children } />
          </div>
          <div className="listOptionsItem">
            <span className="listOptionText">{room > 1 ? "Quartos" : "Quarto"}</span>
            <input min={1} type="number" className="listOptionInput" placeholder={ room } />
          </div>
          <button className="listOptionsBtn">Pesquisar</button>
        </div>
      </div>
    </div>
  )
}

export default SearchList;
