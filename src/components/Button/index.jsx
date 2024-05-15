import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import "./button.css";

const ButtonComponent = (props) => {
	return (
		<>
			{props.variant ? (
				<Button variant={props.variant} className={props.className}>
					{props.text}
				</Button>
			) : (
				<Button className={`btn ${props.type} ${props.className}`}>
					{props.text}
				</Button>
			)}
		</>
	);
};

ButtonComponent.propTypes = {
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	variant: PropTypes.string,
	className: PropTypes.string,
};

export default ButtonComponent;
