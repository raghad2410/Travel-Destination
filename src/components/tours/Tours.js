

export default function Tours(props) {
    return (
        <>
            {props.Tour.map(ele => {
                return (
                    <div>
                        <p>
                            {ele.name}
                        </p>
                        <img src={ele.image} />
                    </div>
                )
            })}

        </>
    )
}