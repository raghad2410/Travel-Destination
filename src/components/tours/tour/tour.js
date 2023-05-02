import { Link } from 'react-router-dom'




export default function Tour(props) {
    return (
        <div key={props.id}>
            <Link to={`/city/${props.id}`}>
                <div key={props.id}>
                    <p>{props.tourName}</p>
                    <img src={props.imgg} />
                </div>
            </Link>
        </div>
    )
}