import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/auth";
import { useContext } from "react";

export default function ProfilePage() {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      ProfilePage
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
