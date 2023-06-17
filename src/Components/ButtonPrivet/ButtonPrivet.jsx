import { useContext } from "react";
import { AwesomeButton } from "react-awesome-button";
import { FaDownload } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const ButtonPrivet = ({ hostingUrl }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleVerifyLoginUser = () => {
        // console.log("Inside button clicked",hostingUrl)
        if (!user) {
            navigate('/login', { state: { from: location } });
        } else {
            window.location.href = hostingUrl;
        }
    };

    return (
        <button onClick={handleVerifyLoginUser}>

            <AwesomeButton size="large" type="primary">
                Download
                <FaDownload />
            </AwesomeButton>
        </button>
    );
};

export default ButtonPrivet;