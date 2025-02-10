import { auth } from "../../firebase/firebase";
import { signOut } from "firebase/auth";

const LogoutButton = () => {
  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Logout
    </button>
  );
};

export default LogoutButton;