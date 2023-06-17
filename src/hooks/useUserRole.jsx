import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useUserRole = () => {
  const { user, loading } = useContext(AuthContext);

  const { data: role = [], refetch } = useQuery({
    queryKey: ["role"],
    enabled: !loading && user != null,
    queryFn: async () => {
      const res = await fetch(`https://movie-site-server.vercel.app/role/${user.email}`);
      return res.json();
    },
    onSuccess: (data) => {
      console.log("Role data fetched:", data);
    },
  });

  useEffect(() => {
    console.log("Role state updated:", role);
  }, [role]);

  return [role, refetch];
};

export default useUserRole;
