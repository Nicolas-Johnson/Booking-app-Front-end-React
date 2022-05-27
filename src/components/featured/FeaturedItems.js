import React from 'react'

const FeaturedItems = ({ location, prtsNbr }) => {
  return (
    <div className="featuredItem">
        <div className="featuredTitles">
          <h1>{ location }</h1>
          <h2>{ prtsNbr } acomodações</h2>
        </div>
      </div>
  )
}

export default FeaturedItems;
