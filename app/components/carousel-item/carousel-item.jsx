import CarouselStars from "@/app/components/carousel-stars/carousel-stars"

const CarouselItem = ({ product }) => (
    <div className="item-carousel">
        <div className="item-carousel__img" style={{ 
        backgroundImage: `url(${ product.featuredImage.url })`}}>
            <button className="btn-add-cart">Add to cart</button>
        </div>
        <div className="item-carousel__data">
            <p className="title">{ product.title }</p>
            <div className="cont-data">
                <div className="item-carousel__stars">
                <CarouselStars tags={ product.tags } /> <p className="inventory">({ product.totalInventory })</p>
                </div>
                <div className="item-carousel__price">
                    <p className="last-price">{ product.prices.min.currencyCode === 'EUR' ? '€' : '' }{ product.prices.min.amount }</p>
                    <p className="price">{ product.prices.max.currencyCode === 'EUR' ? '€' : '' }{ product.prices.max.amount }</p>
                </div>
            </div>
        </div>
    </div>
)

export default CarouselItem


