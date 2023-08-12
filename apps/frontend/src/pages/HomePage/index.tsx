import BaseTextInput from '@/features/core/components/base-text-input'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import React, { useEffect, useState } from 'react'
import SelectComponent from '@/features/core/components/select/select-component'
import Logo from '@/icons/Logo'
import Payments from '@/icons/Payments'
import Safe from '@/icons/Safe'
import Button from '@/features/core/components/button'
import Checkbox from '@/features/core/components/checkbox'
import DisclosureDropdown from '@/features/core/components/disclosure-dropdown'
import { Products, getProducts } from '../../services'
import Card from '@/features/core/components/Card'

export default function index() {
  const [products, setProducts] = useState<Products>()

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

  useEffect(() => {
    getProducts()
    .then((response) => {
      setProducts(response)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

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

  const handleClearAllFilters = () => {
    setCheckCategory(new Array(category.length).fill(false))
    setCheckColor(new Array(color.length).fill(false))
    setCheckPrice(new Array(price.length).fill(false))
  }

  return (
    <div className='overflow-hidden'>
    <div className='bg-base h-full w-full pb-6'>
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
      <span className='h-20 w-full px-default flex max-sm:flex-col max-sm:gap-3 max-sm:mt-3'>
        <div className='max-md:w-60 max-sm:min-w-full w-1/3 max-lg:w-96  lg:min-w-xs max-w-xs flex items-center gap-2'>
          <div><AiOutlineHome size={24} color={'#838383'} /></div>
          <div><IoIosArrowForward size={24} color={'#838383'} /></div>
          <p className='text-title text-sm font-bold'>Todos os produtos</p>
        </div>
        <div className='max-sm:min-w-full max-sm:justify-start w-1/2 flex items-center'>
        <p className='text-title text-xl font-bold ml-10 max-md:ml-0'>
          Produtos mais buscados
        </p>
        </div>
        <div className='max-sm:min-w-full max-sm:items-start w-1/2  flex max-xl:flex-col max-xl:items-end justify-center gap-0  xl:justify-end items-center xl:gap-3'>
          <p className='text-title text-sm font-normal text-right max-sm:pl-1 max-xl:pr-2'>
            Produtos ordenados por:
          </p>
          <div className='z-10'>
          <SelectComponent options={options} />
        </div>
        </div>
      </span>
      <section className='h-full px-default flex gap-10 max-md:flex-col max-md:items-center'>
        <div className='max-sm:mt-20 max-md:min-w-full min-lg:min-w-sv max-lg:w-96 lg:min-w-xs max-w-xs bg-white shadow-md rounded-md h-3/4 px-4 py-3'>
          <div className='w-full flex items-center justify-between'>
            <p className='text-title text-base font-bold'>
              Filtrar por
            </p>
            <Button
              className='text-title font-normal text-sm rounded-none px-0 pl-0 pr-0' 
              dataTestId={'addFilter'}
              onClick={() => handleClearAllFilters()}
              >
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
        <div className='lg:grid-cols-2 md:grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 gap-5 inline-grid w-full'>
          {
            products?.data.map((item, index) => (
              <div className='bg-white rounded-md h-80' key={index}>
                <Card 
                    name={item.name} 
                    price={item.price}
                    image={item.image.url}
                  />
              </div>
            ))
          }
        </div>
      </section>
    </div>
    <footer className='w-full h-footer bg-white  pb-14'>
        <div className='h-1/2 py-12 px-14 flex flex-col gap-6'>
          <p className='text-title font-bold text-base'>Atendimento</p>
          <p className='text-title text-sm'>Central de atendimento</p>
          <p className='text-title text-sm'>Políticas de privacidade</p>
          <hr className='mt-5'></hr>
        </div>
        <div className='h-1/2 py-12 px-14 flex flex-col gap-5'>
          <p className='text-title text-base'>Formas de pagamento</p>
          <div className='flex justify-between item-center max-lg:flex-col max-lg:gap-3'>
            <Payments />
            <Safe />
          </div>
        </div>
      </footer>
    </div>
  )
}
