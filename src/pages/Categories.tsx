import {useEffect} from "react";

import Category from "@components/ecommerce/Category/Category";
import Loading from "@components/feedback/Loading/Loading";

import {useAppDispatch, useAppSelector} from "@store/hooks";
import {actGetCategories} from "@store/Categories/categoriesSlice";

import {Container, Row, Col} from "react-bootstrap";

const Categories = () => {
	const dispatch = useAppDispatch();
	const {loading, error, records} = useAppSelector((state) => state.categories);

	useEffect(() => {
		if (!records.length) {
			dispatch(actGetCategories());
		}
	}, [dispatch, records]);

	const categoriesList =
		records.length > 0
			? records.map((record) => (
					<Col xs={3} key={record.id} className='d-flex justify-content-center mb-5 mt-2'>
						<Category {...record} />
					</Col>
			  ))
			: "there are no categories";

	return (
		<Loading loading={loading} error={error}>
			<Container>
				<Row>{categoriesList}</Row>
			</Container>
		</Loading>
	);
};

export default Categories;
