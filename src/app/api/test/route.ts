export const GET = async () => {
	return new Response("Just a test for GET", { status: 200 });
};

export const PUT = async (request: Request) => {
	return new Response("Just a test for PUT", { status: 200 });
};
