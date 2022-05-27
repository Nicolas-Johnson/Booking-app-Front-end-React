import React from 'react'

const PropertyLovedListItem = ({ price, name, city, rating, avaliation, imgUrl }) => {
  return (
    <div className="lovedListItem">
      <img src={ imgUrl } alt={ name } className="lovedListItemImg" className="lovedListItemImg" />
      <span className="lovedListItem-name">{ name }</span>
      <span className="lovedListItem-city">{ city }</span>
      <span className="lovedListItem-price">Apartir de R${price}</span>
      <div className="lovedListItem-rating">
        <button>{ rating }</button>
        <span>{ avaliation }</span>
      </div>
    </div>
  )
}

export default PropertyLovedListItem;
