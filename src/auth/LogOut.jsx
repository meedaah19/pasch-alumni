import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    if(handleLogout){
      navigate('/')
    }
  };

  return (
    <>
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Logout
    </button>
    
    </>
    
    
  );
};

export default LogoutButton;