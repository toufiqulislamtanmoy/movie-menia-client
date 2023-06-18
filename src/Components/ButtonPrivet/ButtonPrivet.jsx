import { useContext } from "react";
import { AwesomeButton } from "react-awesome-button";
import { FaDownload } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUserRole from "../../hooks/useUserRole";
import Swal from "sweetalert2";

const ButtonPrivet = ({ hostingUrl }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const [role, refetch] = useUserRole();
    const handelDownload = () => {
        // console.log("Inside button clicked",hostingUrl)
        if (!user) {
            navigate('/login', { state: { from: location } });
        } else {
            if (role.credit === 0) {
                Swal.fire({
                    title: "You don't have any credit remaining",
                    text: "You won't be buy Credit",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Buy Now'
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/pricing', { replace: true })
                    }
                })
            } else {
                axiosSecure.patch(`/user/credit/${user?.email}`).then(res => {
                    refetch();
                    if (res.data.modifiedCount > 0) {
                        window.location.href = hostingUrl;

                    }
                })
            }
        }
    };

    return (
        <button onClick={handelDownload}>

            <AwesomeButton size="large" type="primary">
                Download
                <FaDownload />
            </AwesomeButton>
        </button>
    );
};

export default ButtonPrivet;