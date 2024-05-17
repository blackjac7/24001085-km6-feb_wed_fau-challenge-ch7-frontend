import { useGoogleLogin } from "@react-oauth/google";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../redux/actions/auth";
import "./google.css";

const GoogleLogin = ({ text }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) =>
            dispatch(loginWithGoogle(navigate, codeResponse?.access_token)),
    });

    return (
			<Button className="google-login-button" onClick={() => login()}>
				{text}
			</Button>
		);
};

GoogleLogin.propTypes = {
    text: PropTypes.string,
};

export default GoogleLogin;
