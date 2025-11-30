import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  console.log("Token no AdminRoute:", token);

  if (!token) return <Navigate to="/login" />;

  const decoded = jwtDecode(token);

  if (!decoded.admin) {
    return <Navigate to="/" />;
  }

  return children;
}