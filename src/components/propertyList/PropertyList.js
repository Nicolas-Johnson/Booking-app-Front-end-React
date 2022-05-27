import React from 'react'
import PropertyItem from './PropertyItem';

const PropertyList = () => {
  return (
    <div className="pList">
      <PropertyItem type="Hotéis" qnt={863.185} imgUrl="https://t-cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=" />
      <PropertyItem type="Apartamentos" qnt={841.350} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" />
      <PropertyItem type="Resorts" qnt={18.002} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"  />
      <PropertyItem type="Villas" qnt={444.632} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"  />
      <PropertyItem type="Chalés alpinos" qnt={34.208} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" />
      <PropertyItem type="Casas de campo" qnt={146.506} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_cottages/5e1fd9cd716f4825c6c7eac5abe692c52cc64516.jpg"  />
      <PropertyItem type="Glamping" qnt={12.168} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_glamping/6e181b9e942c160f4605239be7ddc1728cbcc4c8.jpg"  />
      <PropertyItem type="Apart-hotéls" qnt={34.084} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_aparthotel/10e092f390b128dcff92727912299eef7824b751.jpg"  />
      <PropertyItem type="Casa de Temporada" qnt={444.632} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-holidayhomes_300/604c7484d34a9e8791c2d5a0e2df4bc8c803dc7c.jpg"  />
      <PropertyItem type="Casas de hóspedes" qnt={104.189} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_guest_house/70618d86d515349ce56296a56d2eaaf283fd1542.jpg"  />
      <PropertyItem type="Hostels" qnt={16.563} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_hostels/cd5489c0d29025a9ca9daa602ac1581ba042bc69.jpg"  />
      <PropertyItem type="Motéis americanos" qnt={13.101} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_motels/9673cd1b55cbc1e1cdaeae09d87d16aa9d84d5f7.jpg"  />
      <PropertyItem type="Cama e cafés (B&Bs)" qnt={200.754} imgUrl="https://t-cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_bed_and_breakfast/a6a4a3f904284337c187771d94a4bb6169b168d7.jpg"  />
    </div>
  )
}

export default PropertyList;
