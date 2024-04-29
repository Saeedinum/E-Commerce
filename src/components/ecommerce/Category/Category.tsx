import styles from "./styles.module.css";
const {category, categoryImg, categoryTitle} = styles;
import {Link} from "react-router-dom";

interface Iprops {
	id?: number;
	title?: string;
	img?: string;
	prefix?: string;
}
const Category = ({title, img, prefix}: Iprops) => {
	return (
		<div className={category}>
			<Link to={`/categories/products/${prefix}`}>
				<div className={categoryImg}>
					<img src={img} alt={title} />
				</div>
				<h4 className={categoryTitle}>{title}</h4>
			</Link>
		</div>
	);
};

export default Category;
