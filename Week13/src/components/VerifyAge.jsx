import React from "react";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import Button from "./Button";

function VerifyAge() {
  return (
    <div className="px-4 py-12 bg-blue-950 flex flex-col items-center h-screen">
      <div className="text-4xl text-white flex gap-2 items-center justify-center">
        <TbDeviceDesktopAnalytics />
        <p className="leading-none text-[2rem]">
          <span className="text-cyan-400">Webinar</span>.gg
        </p>
      </div>

      <h3 className="text-2xl font-semibold text-white my-16">
        Verify your age
      </h3>
      <p className="text-white opacity-25">
        Please confirm that you are at least 18 years old.
      </p>
      <form action="" className="flex flex-col w-full max-w-[20rem]">
      <input type="text" placeholder="Your Birth Year" name="" id="" className="w-full text-white px-2 border border-gray-100 border-opacity-15 outline-none py-2 rounded-md bg-slate-400 bg-opacity-15 mt-8"/>
      <Button disabled={true}>Verify Your Age</Button>
      </form>
    </div>
  );
}

export default VerifyAge;
