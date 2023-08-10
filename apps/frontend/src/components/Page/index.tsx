import BaseTextInput from '@/features/core/components/base-text-input'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import React, { useState } from 'react'
import SelectComponent from '@/features/core/components/select/select-component'
import Logo from '@/icons/Logo'
import Button from '@/features/core/components/button'
import Checkbox from '@/features/core/components/checkbox'
import DisclosureDropdown from '@/features/core/components/disclosure-dropdown'
import BaseCheckbox from '@/features/core/components/base-checkbox'

export default function index() {
  const options = [
    { id: 1, name: 'Relevância'},
    { id: 2, name: 'Valor'},
  ]

  const category = [
    { id: 1, name: 'Categoria 1'},
    { id: 2, name: 'Categoria 2'},
    { id: 3, name: 'Categoria 3'},
    { id: 4, name: 'Categoria 4'},
    { id: 1, name: 'Categoria 5'},
    { id: 2, name: 'Categoria 6'},
  ]

  const color = [
    { id: 1, name: 'Branco'},
    { id: 2, name: 'Preto'},
    { id: 3, name: 'Vermelho'},
    { id: 4, name: 'Azul'},
  ]

  const price = [
    { id: 1, name: 'Até R$ 50,00'},
    { id: 2, name: 'R$ 50,00 - R$ 100,00'},
    { id: 3, name: 'R$ 100,00 - R$ 200,00'},
  ]

  const [checkCategory, setCheckCategory] = useState(
      new Array(category.length).fill(false)
  )

  const [checkColor, setCheckColor] = useState(
      new Array(color.length).fill(false)
  )

  const [checkPrice, setCheckPrice] = useState(
      new Array(price.length).fill(false)
  )

  const handleCheckCategory = (position: number) => {
    const updatedCheckedState = checkCategory.map((item, index) =>
      index === position ? !item : item
    )
    setCheckCategory(updatedCheckedState)
  }

  const handleCheckColor = (position: number) => {
    const updatedCheckedState = checkColor.map((item, index) =>
      index === position ? !item : item
    )
    setCheckColor(updatedCheckedState)
  }

  const handleCheckPrice = (position: number) => {
    const updatedCheckedState = checkPrice.map((item, index) =>
      index === position ? !item : item
    )
    setCheckPrice(updatedCheckedState)
  }

  return (
    <div className='bg-base h-screen w-screen overflow-auto'>
      <header className='bg-gradient-to-br from-header to-purple-800 h-20 w-full px-default flex justify-end items-center'>
        <div className="w-full" >
          <Logo />
        </div>
        <div className='w-4/5'>
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
        <div className='w-3/5 grid content-center'>
        <p className='text-title text-xl font-bold ml-10'>
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
      <section className='h-full px-default flex gap-10'>
        <div className='w-1/5 bg-white shadow-md rounded-md h-3/4 px-4 py-3'>
          <div className='w-full flex justify-between items-center'>
            <p className='text-title text-base font-bold'>
              Filtrar por
            </p>
            <Button className='text-title font-normal text-sm rounded-none px-0' dataTestId={'addFilter'}>
              Limpar filtro
            </Button>
          </div>
          <div className='text-black'>
            <DisclosureDropdown title='Categoria' className='w-full py-3 font-semibold'>
              {
                category.map((item, index) => (
                  <div className='flex items-center gap-2' key={index}>
                    <Checkbox
                      dataTestId={'category'}
                      checked={checkCategory[index]}
                      onChange={() => handleCheckCategory(index)}
                    />
                    <p className='text-title text-sm font-normal'>{item.name}</p>
                  </div>
                ))
              }
            </DisclosureDropdown>
          </div>
          <div className='text-black'>
            <DisclosureDropdown title='Cor' className='w-full py-3 font-semibold'>
              {
                color.map((item, index) => (
                  <div className='flex items-center gap-2' key={index}>
                    <Checkbox
                      dataTestId={'color'}
                      checked={checkColor[index]}
                      onChange={() => handleCheckColor(index)}
                    />
                    <p className='text-title text-sm font-normal'>{item.name}</p>
                  </div>
                ))
              }
            </DisclosureDropdown>
          </div>
          <div className='text-black'>
            <DisclosureDropdown title='Preço' className='w-full py-3 font-semibold'>
              {
                price.map((item, index) => (
                  <div className='flex items-center gap-2' key={index}>
                    <Checkbox
                      dataTestId={'price'}
                      checked={checkPrice[index]}
                      onChange={() => handleCheckPrice(index)}
                    />
                    <p className='text-title text-sm font-normal'>{item.name}</p>
                  </div>
                ))
              }
            </DisclosureDropdown>
          </div>
        </div>
      </section>
    </div>
  )
}
