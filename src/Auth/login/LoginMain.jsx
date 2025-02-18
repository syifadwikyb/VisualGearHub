import { useNavigate } from "react-router-dom";
import BorderButton from "../BorderButton";
import FormLabel from "../FormLabel";
import FooterAuth from "../FooterAuth";
import "../../App.css";
import AuthLeft from "../AuthLeft";

export default function LoginMain({ type = "login" }) {
  const navigate = useNavigate();

  const HandleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    console.log("Login");
    navigate("/products");
  };

  return (
    <div className="flex justify-center items-center w-screen">
      <div className="flex gap-6">
        <AuthLeft/>

        <div className="bg-primary w-[500px] rounded-3xl p-20">
          <h1 className="text-5xl font-bold mb-6 text-black text-center">
            Login
          </h1>
          <p className="text-lg font-medium text-slate-800 mb-6">
            Welcome, please enter your detail
          </p>
          <form onSubmit={HandleLogin}>
            <FormLabel
              inputName="email"
              labelName="Email"
              inputType="text"
              placeholder="example@gmail.com"
            />

            <FormLabel
              inputName="password"
              labelName="Password"
              inputType="password"
              placeholder="********"
            />
          </form>
          <BorderButton text="Login" type="submit" />
          <FooterAuth type={type} />
        </div>
      </div>
    </div>
  );
}
