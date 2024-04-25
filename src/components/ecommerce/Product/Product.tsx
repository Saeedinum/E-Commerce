import {Button} from "react-bootstrap";
import styles from "./styles.module.css";
const {product, productImg} = styles;

const Product = () => {
	return (
		<div className={product}>
			<div className={productImg}>
				<img
					src='https://www.bing.com/images/search?view=detailV2&ccid=jNQJttJs&id=8039502F2F44C80FE8551AEDC28B41814F85C363&thid=OIP.jNQJttJstuIyj3nGa2xSHwHaLH&mediaurl=https%3a%2f%2fwww.universetoday.com%2fwp-content%2fuploads%2f2011%2f04%2fFalcon_Heavy.3k.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.8cd409b6d26cb6e2328f79c66b6c521f%3frik%3dY8OFT4FBi8LtGg%26pid%3dImgRaw%26r%3d0&exph=3000&expw=2000&q=space+x+rockets&simid=608022187055259411&FORM=IRPRST&ck=520F8EDFD419A79F5702A7BF2B0BBA16&selectedIndex=1&itb=0'
					alt=''
				/>
			</div>
			<h2>Title</h2>
			<h3>10 EGP</h3>
			<Button variant='info' style={{color: "white"}}>
				Add to cart
			</Button>
		</div>
	);
};

export default Product;
