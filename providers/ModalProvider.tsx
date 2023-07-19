"use client"

import { FC, useEffect, useState } from 'react';

import AuthModal from '@/components/AuthModal';
import UploadModal from '@/components/UploadModal';
import SubscribeModal from '@/components/SubscribeModal';
import { ProductWithPrice } from '@/types';
import NavigationModal from '@/components/Tablet_Mobile/NavigationModal';


interface MordalProviderProps {
  products: ProductWithPrice[]
}

const ModalProvider: FC<MordalProviderProps> = ({ products }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }
  return (
    <>
    <NavigationModal />
      <AuthModal />
      <UploadModal />
      <SubscribeModal products={products} />
    </>
  )
}

export default ModalProvider