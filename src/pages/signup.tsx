import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { registerUser } from "@/service/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await registerUser({ email, password });
    if (res.isSuccess) {
      navigate("/login", { replace: true });
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  return (
    <form
      className="flex m-auto h-screen flex-col items-center justify-center gap-5 max-w-[400px]"
      onSubmit={handleSubmit}
    >
      <p className="text-2xl">Sign up</p>
      <div className="flex flex-col gap-5 w-full">
        <Input
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={handleChangeEmail}
        ></Input>
        <Input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChangePassword}
        ></Input>
      </div>
      <Button className="w-full">Sign Up</Button>
    </form>
  );
}
