import {useEffect} from "react";

import Category from "@components/ecommerce/Category/Category";
import Loading from "@components/feedback/Loading/Loading";
import GridList from "@components/common/GridList/GridList";

import {useAppDispatch, useAppSelector} from "@store/hooks";
import {actGetCategories} from "@store/Categories/categoriesSlice";

import {Container} from "react-bootstrap";

const Categories = () => {
	const dispatch = useAppDispatch();
	const {loading, error, records} = useAppSelector((state) => state.categories);

	useEffect(() => {
		if (!records.length) {
			dispatch(actGetCategories());
		}
	}, [dispatch, records]);

	return (
		<Loading loading={loading} error={error}>
			<Container>
				<GridList records={records} renderItem={(record) => <Category {...record} />} />
			</Container>
		</Loading>
	);
};

export default Categories;
