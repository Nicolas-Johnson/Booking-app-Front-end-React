import React from 'react'
import FeaturedItems from './FeaturedItems';

const featured = () => {
  return (
    <div className="featured">
     <FeaturedItems location="Canoa Quebrada" prtsNbr={138}  />
     <FeaturedItems location="Fortaleza" prtsNbr={1.272}  />
     <FeaturedItems location="São Paulo" prtsNbr={2.654}  />
     <FeaturedItems location="Recife" prtsNbr={777}  />
     <FeaturedItems location="Rio de Janeiro" prtsNbr={5.012}  />
    </div>
  )
}

export default featured;
