import Header from "../Components/Header/Header";
import Bestseller from "../Components/Bestseller/Bestseller";
import Bookfair from "../Components/Onlinebookfair/Bookfair";
import Topbest from "../Components/topbest/topbest";
import Offer from "../Components/Offers/Offer";
import NavBar from "../Components/Navbar/Navbar";
import Footer from "../Components/footer/footer"

const Home = () => {

  return (
    <div>
      <NavBar/>
      <Header />
      <Bestseller />
      <Bookfair />
      <Offer />
      <Topbest/>
      <Footer/>
    </div>
  );
};

export default Home;
