import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function AdminRoute({ children }) {
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  console.log("Token no AdminRoute:", token);

  if (!token) return <Navigate to="/login" />;

  if (!role === "ADMIN") {
    return <Navigate to="/" />;
  }

  return children;
}