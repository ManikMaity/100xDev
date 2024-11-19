import React from 'react'
import { useRecoilValue } from 'recoil'
import evenSelctor from '../store/selectors/evenSelctor'

function IsEven() {

    const even  = useRecoilValue(evenSelctor);
  return (
    <div>
      {even ? "Even" : "Odd"}
    </div>
  )
}

export default IsEven
