import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "./button.css";

const ButtonComponent = (props) => {
    return (
        <>
            {props.variant ? (
                // Default button
                <Button variant={props.variant}>{props.text}</Button>
            ) : (
                // Custom button class
                <Button className={`btn ${props.type}`}>{props.text}</Button>
            )}
        </>
    );
};

ButtonComponent.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.string,
    variant: PropTypes.string,
};

export default ButtonComponent;
