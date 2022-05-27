import React from 'react'

const PropertyItem = ({ type, imgUrl, qnt }) => {
  return (
    <div className="pListItem">
      <img className="pListImg" src={ imgUrl } alt={ type } />
      <div className="pListTitles">
        <h1>{type}</h1>
        <p>{ qnt } {type.toLowerCase()}</p>
      </div>
    </div>
  )
}

export default PropertyItem;
