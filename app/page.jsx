import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomaProperty from "@/components/HomaProperty";
import connectDb from "@/config/database";
const HomePage = async () => {
    await connectDb()
    return (
        <>
        <Hero/>
        <InfoBoxes/>
        <HomaProperty/>
        </>
    )
}

export default HomePage;