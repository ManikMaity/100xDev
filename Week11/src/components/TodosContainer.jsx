import React, { useEffect } from 'react'
import Todo from './todo'
import { useSetRecoilState } from 'recoil'
import todosAtomFamily from '../store/atoms/todosAtom'

function TodosContainer() {

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
      <Todo id={1}/>
      <Todo id={2} />
      <Todo id ={1}/>
      <Todo id={5} />
    </div>
  )
}

export default TodosContainer
