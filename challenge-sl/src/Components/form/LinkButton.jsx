import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'


// eslint-disable-next-line react/prop-types
function LinkButton({ to, text, color, icon }) {
    return (
        <Link to={to}> 
            
            <Button className={color}>
             {icon} {text}
            </Button>
        </Link>
    )
}

export default LinkButton