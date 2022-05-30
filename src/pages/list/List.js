import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar';
import SearchItem from '../../components/searchItem/SearchItem';
import SearchList from './SearchList';

const List = () => {
  const { state: { date, options, destination } } = useLocation();
  const [stateDestination /*setDestination*/] = useState(destination);
  const [stateDate /*setDate*/] = useState(date);
  const [openDate, setOpenDate] = useState(false);
  const [stateOptions /*setOptions*/] = useState(options);
  return (
    <div>
      <NavBar />
      <Header type='list'/>
      <div className="listContainer">
        <div className="listWrapper">
          <SearchList options={ stateOptions } setOpenDate={setOpenDate} openDate={ openDate } startDate={stateDate[0].startDate} endDate={stateDate[0].endDate} destination={ stateDestination } date={stateDate} />
          <div className="listResult">
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          <SearchItem imgUrl="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/281452259.jpg?k=2ea46a5666c9f5cbef92f480f756a55306093bba35080fd6b58101d4324aeb39&o=&hp=1" title="Haka Maori JericoacoaraAbre numa nova janela" subtitle="Dispondo de terraço, o Haka Maori Jericoacoara está localizado em Jericoacoara, no Ceará, a 350 metros da Praia de Jericoacoara e a 1,8 km da Praia de Mangue Seco" location="350 m da praia" rate={8.3} avaliationNumber="80 avaliações" avaliation="Muito bom"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default List;

