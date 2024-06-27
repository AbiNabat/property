import Link from "next/link";
import InfoBox from "@/components/InfoBox";


const InfoBoxes = () => {
    return (
        <>
            <section>
                <div className="container-xl lg:container m-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                        <InfoBox
                        heading='Fo rentors'
                        background= 'bg-gray-100'
                        textColor='text-gray-800'
                        buttonInfo={{
                            text: 'Browse',
                            link: '/properties',
                            backgroundColor: 'bg-gray-100'
                        }}>Some text about it </InfoBox>
                        <InfoBox
                            heading='Fo rentors'
                            background= 'bg-green-300'
                            textColor='text-gray-800'
                            buttonInfo={{
                                text: 'About it',
                                link: '/properties',
                                backgroundColor: 'bg-gray-100'
                            }}>i know what i meen </InfoBox>

                    </div>
                </div>
            </section>

        </>
    )
}

export default InfoBoxes;