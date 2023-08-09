import BaseTextInput from '@/features/core/components/base-text-input'
import React from 'react'

export default function index() {
  return (
    <div className='bg-base h-screen w-screen'>
      <header className='bg-gradient-to-br from-header to-purple-800 h-20 w-full px-default flex'>
        <div className='w-1/2 grid content-center'>
          LOGO
        </div>
        <div className='w-1/2 grid content-center'>
          <BaseTextInput 
          testId={'search'}
          placeholder={'O que você está procurando?'}
          />
        </div>
      </header>
    </div>
  )
}
