import { useEffect, useState } from "react"
import axios from "axios"
import TopBar from "@/app/components/top-bar/top-bar"
import HeaderTitle from "@/app/components/header-title/header-title"
import CarouselProducts from "@/app/components/carousel-products/carousel-products"
import Footer from "@/app/components/footer/footer"

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://gradistore-spi.herokuapp.com/products/all");
        setProducts(response.data.products.nodes);
      } catch (error) {
        console.error(error)
      }
    };

    fetchProducts();
  }, []);

 

  return (
      <div className="home-container">
        <TopBar />
        <HeaderTitle />
        <CarouselProducts products={products} />
        <div className="cont-btn">
          <button className="btn-all-products">Browse all products</button>
        </div>
        <Footer />
      </div>
  );
}

export default HomePage