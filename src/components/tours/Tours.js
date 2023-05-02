
import Tour from "../tours/tour/tour"
export default function Tours(props) {
    return (
        <>
            {props.Tour.map(ele => {
                return (
                    <>
                        <Tour tourName={ele.name} imgg={ele.image} id={ele.id} />

                    </>
                )
            })}

        </>
    )
}