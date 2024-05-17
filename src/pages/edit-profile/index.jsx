import { Form, Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../redux/actions/auth";
import Swal from "sweetalert2";

const EditProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [photo, setPhoto] = useState();

    const { user } = useSelector((state) => state.auth);

    const onSubmit = async (e) => {
        e.preventDefault();

        const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, update it!",
        });

        if (result.isConfirmed) {
            dispatch(
                updateProfile(
                    navigate,
                    user?.id,
                    name,
                    email,
                    password,
                    gender,
                    photo
                )
            );

            Swal.fire("Updated!", "Your car has been updated.", "success");
        }
    };

    useEffect(() => {
        if (user) {
            setName(user?.name || "");
            setEmail(user?.email || "");
            setPassword(user?.password || "");
            setGender(user?.gender || "");
        }
    }, [user]);

    return (
        <Form onSubmit={onSubmit} className="register-form">
            <h2 className="register-header">Edit Profile</h2>
            <Row>
                <Col md="12">
                    <div className="d-flex justify-content-center align-items-center">
                        <Image
                            rounded
                            className="img-fluid mb-3 photo-profile-page "
                            src={user?.photo}
                        />
                    </div>

                    <Form.Group controlId="photo" className="mb-3">
                        <Form.Label>Photo</Form.Label>
                        <Form.Control
                            type="file"
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md="12">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="gender">
                        <Form.Label>Gender</Form.Label>
                        <Form.Select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            required
                        >
                            <option value="" hidden>
                                Select Gender
                            </option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <ButtonComponent
                text="Update Profile"
                type="submit"
                className="button-gs btn-full-width"
            />
        </Form>
    );
};

export default EditProfile;
