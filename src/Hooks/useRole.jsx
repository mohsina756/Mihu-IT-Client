import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosOpen from "./useAxiosOpen";

const useRole = () => {
  const { user, loading } = useAuth();
  const axiosOpen = useAxiosOpen();
  const { data: Role, isPending: isRoleLoading } = useQuery({
    queryKey: [user?.email, "Role"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosOpen.get(`/users/hr/${user.email}`);
      console.log(res.data);
      return res.data;
    },
  });
  return [Role, isRoleLoading];
};

export default useRole;
