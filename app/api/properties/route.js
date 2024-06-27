import connectDb from "@/config/database";


export const GET = async (req, res) => {
    try {
        await connectDb();

        return new Response(JSON.stringify({message: 'Hello World!'}), {
            status: 200
        });
    }catch (error) {
        console.log(error);
        return new Response('Something went wrong!', {
            status: 500});
    }
};