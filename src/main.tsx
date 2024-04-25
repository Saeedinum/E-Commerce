import ReactDOM from "react-dom/client";
import MainLayout from "@layouts/MainLayout/MainLayout";
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import Products from "@pages/Products";
import AboutUs from "@pages/AboutUs";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";

import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/categories",
				element: <Categories />,
			},
			{
				path: "/products/:prefix",
				element: <Products />,
				loader: ({params}) => {
					if (typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)) {
						throw new Response("Bad Request", {
							statusText: "Category not found",
							status: 400,
						});
					}
					return true;
				},
			},
			{
				path: "/about-us",
				element: <AboutUs />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
]);
ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router}></RouterProvider>);
