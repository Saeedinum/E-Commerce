import Product from "@components/ecommerce/Product/Product";
import GridList from "@components/common/GridList/GridList";
import Loading from "@components/feedback/Loading/Loading";

import {useEffect} from "react";
import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "@store/hooks";
import {actGetProducts, productsCleanUp} from "@store/Products/productsSlice";

import {Container} from "react-bootstrap";

const Products = () => {
	const params = useParams();
	const dispatch = useAppDispatch();
	const {loading, error, records} = useAppSelector((state) => state.products);

	useEffect(() => {
		dispatch(actGetProducts(params.prefix as string));

		return () => {
			dispatch(productsCleanUp());
		};
	}, [dispatch, params]);

	return (
		<Loading loading={loading} error={error}>
			<Container>
				<GridList records={records} renderItem={(record) => <Product {...record} />} />
			</Container>
		</Loading>
	);
};

export default Products;
