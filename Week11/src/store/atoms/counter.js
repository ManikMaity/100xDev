import { atom } from "recoil";

export const counterAtom = atom({
    key: "counter",
    default: 1,
});

export default counterAtom;