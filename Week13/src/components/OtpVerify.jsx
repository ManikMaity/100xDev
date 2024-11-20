import React, { useRef, useState } from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import Button from "./Button";

function OtpVerify({length = 6, onOtpSubmit}) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);


  console.log(otp, inputRefs);

  function handleChange(e, index){

    let value = e.target.value;
    if (isNaN(value)) return;

    value = value.substring(value.length - 1)

    setOtp(prev => {
        const newOpt = [...prev];
        newOpt[index] = value;
        return newOpt;
    })

    if (index == otp.length - 1){
        console.log("OTP Completed")
    }
    else {

        inputRefs.current[index + 1].focus();
    }
  }

  function handleBack(e, index){
      console.log(e.key);
      if (index == 0) return;
      if (e.key === "ArrowLeft"){
        inputRefs.current[index- 1].focus()
      }
      else {
        return;
      }
  }


  return (
    <div className="px-4 py-12 bg-blue-950 flex flex-col items-center h-screen">
      <div className="text-4xl text-white flex gap-2 items-center justify-center">
        <TbDeviceDesktopAnalytics />
        <p className="leading-none text-[2rem]">
          <span className="text-cyan-400">Webinar</span>.gg
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-white my-16">
        Check Your Email For A Code
      </h3>
      <p className="text-white opacity-25">
        Please enter the code in the box below to verify your email.
      </p>
      <form action="" className="flex flex-col w-full max-w-[20rem]">
        <div className="flex gap-2 justify-between mt-8">
          {otp.map((num, index) => (
            <input
              key={index}
              type="text"
                ref={(input) => inputRefs.current[index] = input}
              placeholder="0"
              value={num}
              name=""
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleBack(e, index)}
              id=""
              className="w-10 h-10 flex items-center justify-center text-center text-white border border-gray-100 border-opacity-15 outline-none rounded-md bg-slate-400 bg-opacity-15"
            />
          ))}
        </div>
        <Button disabled={true}>Verify Your Age</Button>
      </form>
    </div>
  );
}

export default OtpVerify;
