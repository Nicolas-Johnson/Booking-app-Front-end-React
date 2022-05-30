import React from 'react'

const SearchItem = ({imgUrl, features = null, avaliation, rate, avaliationNumber, title, subtitle, location}) => {
  return (
    <div className="searchItem">
      <img src={imgUrl} alt={title} className="searchItemImg" />
      <div className="searItemDescription">
        <h1>{ title }</h1>
        <span>{ location }</span>
        <span>{ subtitle }</span>
        <span>{ features }</span>
      </div>
      <div className="searchItemDetails">
        <div className="searchItemDetailsAvaliation">
          <div className="av">
            <p>{ avaliation }</p>
            <span>{ avaliationNumber }</span>
          </div>
          <button className="rate">{ rate }</button>
        </div>
        <button>Visualizar Preços</button>
      </div>
    </div>
  )
}

export default SearchItem;
