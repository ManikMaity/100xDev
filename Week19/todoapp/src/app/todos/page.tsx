"use client"

import { userAtom } from "@/store/atoms/userAtom";
import { useRecoilState, useRecoilValue } from "recoil"

function Todos () {
    const user = useRecoilValue(userAtom);
    console.log(user);
  return (
    <div>
      Todos
    </div>
  )
}

export default Todos;
