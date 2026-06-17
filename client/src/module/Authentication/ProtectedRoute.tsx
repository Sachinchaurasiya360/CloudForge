import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import apiClient from "../../utils/axios";

type AuthState = "checking" | "authenticated" | "unauthenticated";

export default function ProtectedRoute() {
  const [status, setStatus] = useState<AuthState>("checking");

  useEffect(() => {
    let active = true;

    apiClient
      .get("/auth/me")
      .then(() => {
        if (active) setStatus("authenticated");
      })
      .catch(() => {
        if (active) setStatus("unauthenticated");
      });

    return () => {
      active = false;
    };
  }, []);

  if (status === "checking") {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-white">
        <svg
          className="h-6 w-6 animate-spin text-[#6c5ce7]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <circle className="opacity-20" cx="12" cy="12" r="10" />
          <path className="opacity-80" d="M4 12a8 8 0 018-8" />
        </svg>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
