import axios from "axios";
import { useState, useEffect } from "react";
import OfferCard from "../Components/OfferCard";
import img1 from "../img/banner-wide-96cebf41372b8de2d64b7e609f0fb2d3c3084f8df0f861fa8b3782231e5c31f8.jpg";
const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(reponse.data);
        setIsloading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Chargement..</p>
  ) : (
    <div className="home-content">
      <div className="home-img">
        <img src={img1} alt="Bannière" />
      </div>
      <div className="home-hero">Pret a faire du tri dans vos placards ?</div>
      {data.offers.map((offer) => {
        return <OfferCard key={offer._id} offerInfos={offer} />;
      })}
    </div>
  );
};

export default Home;
