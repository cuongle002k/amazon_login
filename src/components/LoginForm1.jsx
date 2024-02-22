import { TbAlertSmall } from "react-icons/tb";
import { CiWarning } from "react-icons/ci";
import React, { useState } from "react";
import { users } from "../users";
export default function LoginForm1({
  currentStep,
  formData,
  setCurrentStep,
  setFormData,
}) {
  const [email, setEmail] = useState(formData.email);
  const [isValid, setIsValid] = useState(true);
  const [isUser, setIsUser] = useState(true);
  const handleChange = (e) => {
    setEmail(e.target.value);
    setIsValid(true);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "") {
      setIsValid(false);
      return;
    }
    const user = users.find((user) => user.email === email);
    if (!user) {
      setIsUser(false);
      return;
    }

    setFormData({ ...formData, email });
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="mb-4">
      {!isUser && (
        <div className="pb-2 mb-4">
          <div className="modal_error  rounded-xl border-[1px] drop-shadow-md  border-red-400 p-4">
            <div className="desc flex gap-3">
              <CiWarning className="text-red-500 text-4xl" />
              <div className="desc">
                <h2 className="text-base text-red-600">There was a problem</h2>
                <p className="text-sm">
                  We cannot find an account with that email <br /> address
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        className="w-[350px] h-[367px]
    border-[1px] border-gray-300 p-4
    rounded-lg"
      >
        <h2 className="text-2xl pb-4">Sign in</h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="font-bold pb-2" htmlFor="email">
              Email or mobile phone number
            </label>
            <div className="pt-2 pb-4">
              <input
                type="text"
                id="email"
                value={email}
                onChange={handleChange}
                className={`w-full
              border-2 ${isValid ? "border-gray-400" : "border-red-500"}
              rounded-md p-1 focus:ring-offset-2 focus:ring-2`}
              />
              {!isValid && (
                <div className="text-red-500 text-sm flex pt-1  items-center">
                 <TbAlertSmall className="text-2xl font-bold" />
                  <span>Enter your email or mobile phone number</span>
                </div>
              )}
            </div>
          </div>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus
      w-full rounded-xl p-1"
          >
            Continue
          </button>
        </form>
        <div className="term_condtion py-2">
          <p className="text-sm">
            By continuing, you agree to Amazon's
            <a
              className="text-blue-600 hover:underline hover:text-red-400"
              href="#!"
            >
             {" "}
               Conditions of Use
            </a>
            {" "} and 
            <a
              className="text-blue-600 hover:underline hover:text-red-400"
              href="#!"
            >
              {" "}
              Privacy Notice
            </a>
            .
          </p>
        </div>
        <div className="help py-2 border-b-[1px] border-gray-300">
          <a
            className="text-blue-600 text-sm hover:underline hover:text-red-400"
            href="#!"
          >
            Need help
          </a>
        </div>
        <div className="desc py-4">
          <p className="font-bold text-sm pb-1">Buying for work?</p>
          <a
            className="text-blue-600 text-sm block hover:underline hover:text-red-400"
            href=""
          >
            Shop on Amazon Business
          </a>
        </div>
      </div>
     <div className="py-4">
     <span className="text text-gray-400 text-sm">
        {" "}
        New to Amazon? 
         {" "}
         </span>
     </div>
     <button className="rounded-lg w-[349px] text-sm py-1 hover:bg-gray-100 border-2 border-gray-400">
      <a href="#!">Create your Amazon account</a> 
      </button>
      

    </div>
  );
}
