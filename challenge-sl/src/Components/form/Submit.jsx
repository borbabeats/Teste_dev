import { Button } from 'reactstrap'

// eslint-disable-next-line react/prop-types
function Submit({ text, className }) {
    return (
        <Button className={className}>{text}</Button>
    )
}

export default Submit