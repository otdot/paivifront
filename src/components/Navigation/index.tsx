import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { userLogout } from "../../state/userReducer";
import { User } from "../../Types";

const Navigation = () => {
  const user: User = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("logging out");
    dispatch(userLogout());
  };
  return (
    <nav>
      {user.name !== null ? (
        <>
          <Button onClick={() => navigate("/market")}>MyMarket</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      ) : (
        <Link to="/signin">Login</Link>
      )}
    </nav>
  );
};

export default Navigation;
