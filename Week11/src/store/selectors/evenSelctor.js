import { selector } from "recoil"
import counterAtom from "../atoms/counter"

const evenSelctor = selector({
    key: "evenSelctor", // unique ID
    get : function ({get}) {
        const count = get(counterAtom); 
        return count % 2 === 0
    } // get function returns the value to which the selector will be resolved
})

export default evenSelctor
