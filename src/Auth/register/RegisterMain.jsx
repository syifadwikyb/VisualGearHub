import FormLabel from "../FormLabel";
import FooterAuth from "../FooterAuth";
import BorderButton from "../BorderButton";
import AuthLeft from "../AuthLeft";

export default function RegisterMain({ type = "register" }) {
  return (
    <div className="flex justify-center items-center w-screen">
      <div className="flex gap-6">
        <AuthLeft />

        <div className="bg-primary w-[500px] rounded-3xl p-12">
          <h1 className="text-4xl font-bold mb-2 text-black text-center">
            Register
          </h1>
          <p className="text-lg font-medium text-slate-800">
            Welcome, please enter your detail
          </p>
          <form action="">
            <FormLabel
              inputName="name"
              labelName="Name"
              inputType="text"
              placeholder="Insert Your Name"
            />
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
            <FormLabel
              inputName="confirmPassword"
              labelName="Confirm Password"
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
