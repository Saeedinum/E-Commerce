import ContentLoader from "react-content-loader";

type Props = {
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
	children: React.ReactNode;
};

const MyLoader = () => (
	<ContentLoader speed={2} width={535} height={258} viewBox='0 0 535 258' backgroundColor='#efebeb' foregroundColor='#d1d4ff'>
		<circle cx='81' cy='81' r='76' />
		<rect x='27' y='174' rx='0' ry='0' width='116' height='13' />
	</ContentLoader>
);

const Loading = ({loading, error, children}: Props) => {
	if (loading === "succeeded") {
		return <>{children}</>;
	}
	if (loading === "pending") {
		return <MyLoader />;
	}
	if (loading === "failed") {
		return <div>Error: {error}</div>;
	}
};

export default Loading;
