import Header from "../header/Header"
import { useParams } from 'react-router-dom'
import { useState } from 'react'



export default function TourDetails(props) {
    const { id } = useParams()
    const city = props.dataJson.find(city => city.id === id);


    const [showMore, setShowMore] = useState(false);

    const showMore1 = () => {
        setShowMore(!showMore);
    }

    return (
        <>
            <Header></Header>
            <section>
                {city && (
                    <p>{showMore ? city.info : `${city.info.slice(0, 240)}...`}</p>
                )}
                <button onClick={showMore1} > {showMore ? 'See Less' : 'See More'}</button>
            </section>
        </>
    )
}
