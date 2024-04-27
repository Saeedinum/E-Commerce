type Props = {
	loading: "idle" | "pending" | "succeeded" | "failed";
	error: string | null;
	children: React.ReactNode;
};

const Loading = ({loading, error, children}: Props) => {
	if (loading === "succeeded") {
		return <>{children}</>;
	}
	if (loading === "pending") {
		return <div>Loading</div>;
	}
	if (loading === "failed") {
		return <div>Error: {error}</div>;
	}
};

export default Loading;
