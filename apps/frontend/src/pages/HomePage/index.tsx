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
import Card from '@/features/core/components/Card'
import { Product, getProducts } from '@/features/products/actions'
import { getCategories, getColors } from '@/features/filters/actions'

export default function index() {
  const [products, setProducts] = useState<Product[] | undefined>()
  const [handleError, setHandleError] = useState<boolean>(false)
  const [categories, setCategories] = useState<{
    id: number
    name: string
    checked: boolean
  }[]>()
  const [colors, setColors] = useState<{
    id: number
    name: string
    checked: boolean
  }[]>()
  const [priceRange, setPriceRange] = useState<{
    id: number
    range: number[]
    checked: boolean
  }[]>()
  const [text, setText] = useState<string>('')
  const [order, setOrder] = useState<string>('Relevância')

  const options = [
    'Relevância', 'Menor preço', 'Maior preço'
  ]

  const price = [
    { id: 1, range: [0.01, 50.00]},
    { id: 2, range: [50.01, 100.00]},
    { id: 3, range: [100.01, 500.00]},
  ]

  const filteredProducts = products?.filter((product) => {
    const matchesText = product.name.toLowerCase().includes(text.toLowerCase())
    const matchesCategory = categories?.every((value) => !value.checked) ||
      categories?.filter((category) => category.checked).some((value) => value.id === product.category.id)
    const matchesColor = colors?.every((value) => !value.checked) ||
      colors?.filter((color) => color.checked).some((value) => value.id === product.color.id)
    const matchesPrice = priceRange?.every((value) => !value.checked) ||
      priceRange?.filter((price) => price.checked).some((value) => value.range[0] <= product.price && value.range[1] >= product.price)

    return matchesText && matchesCategory && matchesColor && matchesPrice
    
  }).sort((a, b) => {
    if (order === 'Maior preço') {
      return b.price - a.price
    }
    if (order === 'Menor preço') {
      return a.price - b.price
    }
    return 0
  })

  const handleCheckCategory = (id: number) => {
    const updatedCheckedState = categories?.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        }
      }
      return item
    })
    setCategories(updatedCheckedState)
  }

  const handleCheckColor = (id: number) => {
    const updatedCheckedState = colors?.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        }
      }
      return item
    }
    )
    setColors(updatedCheckedState)
  }

  const handleCheckPrice = (id: number) => {
    const updatedCheckedState = priceRange?.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          checked: !item.checked,
        }
      }
      return item
    })
    setPriceRange(updatedCheckedState)
  }

  const handleClearAllFilters = () => {
    setCategories(categories?.map((item) => {	
      return {
        ...item,
        checked: false,
      }
    }))
    setColors(colors?.map((item) => {
      return {
        ...item,
        checked: false,
      }
    }))
    setPriceRange(priceRange?.map((item) => {
      return {
        ...item,
        checked: false,
      }
    }))
  }

  const getAllProducts = () => {
    getProducts()
    .then((response) => {
      setProducts(response.data)
    })
    .catch((error) => {
      setHandleError(true)
      console.log(error)
    })
  }

  const getAllFilters = () => {
    getCategories()
    .then((response) => {
      setCategories(response.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          checked: false
        }
      }))
    })
    .catch((error) => {
      setHandleError(true)
      console.log(error)
    })

    getColors()
    .then((response) => {
      setColors(response.data.map((item) => {
        return {
          id: item.id,
          name: item.name,
          checked: false
        }
      }))
    })
    .catch((error) => {
      setHandleError(true)
      console.log(error)
    })

    setPriceRange(price.map((item) => {
      return {
        id: item.id,
        range: item.range,
        checked: false
      }
    }))
  }

  useEffect(() => {
    getAllProducts(), getAllFilters()
  }, [])

  return (
    <div className='overflow-hidden'>
    <div className='bg-base h-full w-full pb-6'>
      <header className='bg-gradient-to-br from-header to-purple-800 h-20 w-full px-default flex justify-end items-center'>
        <div className="w-full" >
          <Logo />
        </div>
        <div className='w-4/5 text-header'>
          <BaseTextInput 
            testId={'search'}
            placeholder={'O que você está procurando?'}
            value={text}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value)}
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
          <SelectComponent options={options} value={order} handleChange={setOrder}   />
        </div>
        </div>
      </span>
      {
        handleError ? (
          <div className='w-full h-full flex justify-start'>
            <p className='text-title text-lg font-bold'>Erro ao carregar os produtos</p>
          </div>
        ) : (
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
                categories?.map((item) => (
                  <div className='flex items-center gap-2' key={item.id}>
                    <Checkbox
                      dataTestId={'category'}
                      checked={item.checked}
                      onChange={() => handleCheckCategory(item.id)}
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
                colors?.map((item) => (
                  <div className='flex items-center gap-2' key={item.id}>
                    <Checkbox
                      dataTestId={'color'}
                      checked={item.checked}
                      onChange={() => handleCheckColor(item.id)}
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
                priceRange?.map((item) => (
                  <div className='flex items-center gap-2' key={item.id}>
                    <Checkbox
                      dataTestId={'price'}
                      checked={item.checked}
                      onChange={() => handleCheckPrice(item.id)}
                    />
                    <p className='text-title text-sm font-normal'>{
                      `R$ ${item.range[0].toFixed(2)} - R$ ${item.range[1].toFixed(2)}`
                    }</p>
                  </div>
                ))
              }
            </DisclosureDropdown>
          </div>
        </div>
        <div className='lg:grid-cols-2 md:grid-cols-1 2xl:grid-cols-4 xl:grid-cols-3 gap-5 inline-grid w-full'>
          {
            filteredProducts?.length === 0 ? (
              <div className='w-full h-full flex justify-start'>
                    <p className='text-title text-lg font-bold'>Nenhum produto encontrado</p>
                  </div>
                ) : (
                  filteredProducts?.map((item) => (
                  <div className='bg-white rounded-md h-80' key={item.id}>
                <Card 
                    name={item.name} 
                    price={item.price}
                    image={item.image.url}
                  />
              </div>
                )
              
            ))
          }
        </div>
      </section>
        )
      }
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
