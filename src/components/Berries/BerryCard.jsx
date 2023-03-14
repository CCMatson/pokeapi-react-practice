import { Link } from 'react-router-dom'

const BerryCard = (props) => {
  return ( 
    <>
      <Link to={`/berry/${props.berry.index}`}>
        {props.berry.name}
      </Link>
      <br/>
    </>
  )
}

export default BerryCard;