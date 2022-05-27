import Header from "../../components/header/Header";
import NavBar from "../../components/navbar/NavBar";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import PropertyLovedList from "../../components/propetyLoved/PropertyLovedList";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <div className="homecontainer">
        <Featured />
        <h1 className="homeTitle">Pesquise por tipo de acomodação</h1>
        <PropertyList />
        <h1 className="homeTitle">Casas e apartamentos que os hóspedes amam</h1>
        <PropertyLovedList />
      </div>
    </div>
  )
}

export default Home;
