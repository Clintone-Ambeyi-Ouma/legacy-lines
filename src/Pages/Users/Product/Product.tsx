import Single from "../../../Components/Single/Single";
import { singleProduct, singleUser } from "../../../data";
import "./product.scss"

const Product = () => {
    return (
        <div className="product">
            <Single {...singleProduct} />
        </div>
    )
}

export default Product;