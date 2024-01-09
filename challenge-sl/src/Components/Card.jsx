import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'


// eslint-disable-next-line react/prop-types
function Card({ to, text, icon }) {
    return (
        <Link to={to}> 
            
            <Button className='cards border-0 text-black'>
             {icon} {text}
            </Button>
        </Link>
    )
}

export default Card