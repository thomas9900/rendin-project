import PropTypes from 'prop-types'
import { Button } from "@material-ui/core"

const Btn = ({ text, color, onClick }) => {
    return (
        <Button 
        className='btn'
        onClick={onClick}
        style={{ backgroundColor: color }}
        >
            {text}
        </Button>
    )
}

export default Btn

Btn.propTypes = {
    text : PropTypes.string,
    color : PropTypes.string,
    onClick : PropTypes.func
}