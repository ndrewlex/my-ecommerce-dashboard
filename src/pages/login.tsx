import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/contexts/auth";
import { useContext, useState } from "react";

const initialFormValues = {
  email: "",
  password: "",
};

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    await login(formValues);
    setLoading(false);
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((curr) => ({ ...curr, email: e.target.value }));
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((curr) => ({ ...curr, password: e.target.value }));
  };

  return (
    <form
      className="flex m-auto h-screen flex-col items-center justify-center gap-5 max-w-[400px]"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl">Login</p>
      <div className="flex flex-col gap-5 w-full">
        <Input
          type="text"
          placeholder="Enter email"
          onChange={handleChangeEmail}
        ></Input>
        <Input
          type="password"
          placeholder="Enter password"
          onChange={handleChangePassword}
        ></Input>
      </div>
      <Button className="w-full" disabled={loading}>
        Login
      </Button>
    </form>
  );
}
