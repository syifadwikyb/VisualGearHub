import React, { useState } from "react";
import { auth } from "../../Config/Firebase";
import FormLabel from "../FormLabel";
import FooterAuth from "../FooterAuth";
import BorderButton from "../BorderButton";
import AuthLeft from "../AuthLeft";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

export default function RegisterMain({ type = "register" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ Validasi format email
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email.trim());
  };

  // ✅ Validasi input form
  const validateForm = () => {
    console.log("Email sebelum validasi:", email); // 🔍 Debugging email

    if (!validateEmail(email)) {
      console.log("Email tidak valid!");
      setErrorMessage("Invalid email format.");
      return false;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters.");
      return false;
    }
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return false;
    }
    return true;
  };

  // ✅ Mengupdate state sesuai input user
  const handleChangeField = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      console.log("Email input saat ini:", value); // 🔍 Debugging email di console
      setEmail(value);
    }

    if (name === "password") setPassword(value);
    if (name === "confirmPassword") setConfirmPassword(value);
  };

  // ✅ Handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validateForm()) return;

    setLoading(true);

    try {
      console.log("Mendaftarkan email:", email); // 🔍 Debugging sebelum Firebase
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await sendEmailVerification(userCredential.user);

      alert(
        "Registration successful! Please check your email to verify your account."
      );
      window.location.href = "/login"; // Redirect ke halaman login
    } catch (error) {
      console.error("Firebase Error:", error.code, error.message);
      if (error.code === "auth/email-already-in-use") {
        setErrorMessage("Email is already in use.");
      } else if (error.code === "auth/invalid-email") {
        setErrorMessage("Invalid email.");
      } else {
        setErrorMessage(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-screen">
      <div className="flex gap-6">
        <AuthLeft />

        <div className="bg-primary w-[500px] rounded-3xl p-12">
          <h1 className="text-4xl font-bold mb-2 text-black text-center">
            Register
          </h1>
          <p className="text-lg font-medium text-slate-800">
            Welcome, please enter your details
          </p>
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4 text-center">
              {errorMessage}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <FormLabel
              inputName="email"
              labelName="Email"
              inputType="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleChangeField}
            />

            <div className="relative">
              <FormLabel
                inputName="password"
                labelName="Password"
                inputType={showPassword ? "text" : "password"}
                placeholder="********"
                value={password}
                onChange={handleChangeField}
              />
              <button
                type="button"
                className="absolute right-3 top-11 text-gray-600 hover:text-black focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={24} className="text-black" />
                ) : (
                  <AiFillEye size={24} />
                )}
              </button>
            </div>

            <div className="relative">
              <FormLabel
                inputName="confirmPassword"
                labelName="Confirm Password"
                inputType={showConfirmPassword ? "text" : "password"}
                placeholder="********"
                value={confirmPassword}
                onChange={handleChangeField}
              />
              <button
                type="button"
                className="absolute right-3 top-11 text-gray-600 hover:text-black focus:outline-none"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <AiFillEyeInvisible size={24} className="text-black" />
                ) : (
                  <AiFillEye size={24} />
                )}
              </button>
            </div>

            <BorderButton
              text="Register"
              loading={loading}
              onGoogleSignIn={() => console.log("Google Sign In Clicked")}
            />
          </form>

          <FooterAuth type={type} />
        </div>
      </div>
    </div>
  );
}
