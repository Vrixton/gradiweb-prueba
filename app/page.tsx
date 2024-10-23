import Image from "next/image"
import Layout from "@/app/components/layout/layout"
import TopBar from "@/app/components/top-bar/top-bar"
import HeaderTitle from "@/app/components/header-title/header-title"

export default function Home() {
  return (
    <Layout>
      <div className="home-container">
        <TopBar />
        <HeaderTitle />
        <div className="cont-carousel">
          <div className="cont-carousel-arrows">
            <button className="carouser-btn-left">left</button>
            <button className="carouser-btn-right">right</button>
          </div>
          <div className="carousel-item">
            <button>Add to cart</button>
            <div className="carousel-item--info">
              <h3 className="carousel-item--title">title</h3>
            </div>
          </div>
        </div>
        <div className="cont-btn">
          <button>Browse all products</button>
        </div>
        <div className="footer">
          <h2 className="footer--title">Join the green revolution without commitment</h2>
          <p className="footer--info"> If you are missing something and don't want to miss future promotions  or our future products</p>
          <div className="footer--cont-form">
            <input type="text" />
            <button>send</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
