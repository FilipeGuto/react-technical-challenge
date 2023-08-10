import BaseTextInput from '@/features/core/components/base-text-input'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import React from 'react'
import SelectComponent from '@/features/core/components/select/select-component'
import Logo from '@/icons/Logo'

export default function index() {
  const options = [
    { id: 1, name: 'Relevância'},
    { id: 2, name: 'Valor'},
  ]

  return (
    <div className='bg-base h-screen w-screen'>
      <header className='bg-gradient-to-br from-header to-purple-800 h-20 w-full px-default flex'>
        <div className="w-1/2 grid content-center" >
          <Logo />
        </div>
        <div className='w-1/2 grid content-center'>
          <BaseTextInput 
          testId={'search'}
          placeholder={'O que você está procurando?'}
          />
        </div>
      </header>
      <span className='h-20 w-full px-default flex'>
        <div className='w-1/4 flex content-center items-center gap-2'>
          <div><AiOutlineHome size={24} color={'#838383'} /></div>
          <div><IoIosArrowForward size={24} color={'#838383'} /></div>
          <p className='text-title text-sm font-bold'>Todos os produtos</p>
        </div>
        <div className='w-3/4 grid content-center'>
        <p className='text-title text-xl font-bold'>
          Produtos mais buscados
        </p>
        </div>
        <div className='w-1/4 grid content-center'>
          <p className='text-title text-sm font-normal text-right'>
            Produtos ordenados por:
          </p>
        </div>
        <div className=' grid content-center pl-5'>
          <SelectComponent options={options} />
        </div>
      </span>
    </div>
  )
}
