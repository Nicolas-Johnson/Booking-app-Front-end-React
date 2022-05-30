import React from 'react'
import PropertyLovedListItem from './PropertyLovedListItem';

const PropertyLovedList = () => {
  return (
    <div className="lovedList">
      <PropertyLovedListItem imgUrl="http://www.7seasonsapartments.com/w/hi/Our_Apartments/2bsp.jpg" name="7Seasons Apartments Budapest" city="Budapest" price={454} rating={8.9} avaliation="Fabuloso" />
      <PropertyLovedListItem imgUrl="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/5a/cf/85/apartment-with-panoramic.jpg?w=900&h=-1&s=1" name="Sugar Loft Apartments" city="Rio de Janeiro" price={243.60} rating={9.1} avaliation="Fantástico" />
      <PropertyLovedListItem imgUrl="https://q-xx.bstatic.com/xdata/images/hotel/max500/40890517.jpg?k=5d3943f506472669a73f5db0bdb30066dd10d6234c2082ed10da3d6bc8220c6b&o=" name="Appartamento Benincampi" city="Roma" price={1.485} rating={9.7} avaliation="Fantástico" />
      <PropertyLovedListItem imgUrl="https://pix10.agoda.net/hotelImages/908/908884/908884_15042118230027007981.jpg?ca=4&ce=1&s=1024x768" name="LivinParis - Luxury 3 Bedroo..." city="Paris" price={2.615} rating={8.2} avaliation="Muito bom" />
    </div>
  )
}

export default PropertyLovedList;


/*
<PropertyLovedListItem imgUrl="" name="" city="" price={} rating={} avaliation="" /> 
*/