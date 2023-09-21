import {describe,expect,it,vi } from 'vitest'
import {render,screen,fireEvent} from '@testing-library/react'
import React  from 'react'
describe('first', () => {

 it('a',()=>{
   const A = <h1>A</h1>
       render(A)
       screen.debug()
       expect(screen.getByText('A')).toBeTruthy()
 })
 })