"use client"
import { useEffect, useMemo } from "react"
import { usePathname } from "next/navigation"
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { FcLike } from "react-icons/fc";

import useNavModal from "@/hooks/useNavModal"
import Modal from "./Modal"
import SidebarItem from '../SidebarItem';
import Header from "../Header"



const NavigationModal = () => {
  const pathname = usePathname()
  const { onClose, isOpen } = useNavModal()

  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }

  const routes = useMemo(() => [
    {
      icon: HiHome,
      id: 1,
      label: 'ホーム',
      active: pathname === '/',
      href: '/',
    },
    {
      icon: BiSearch,
      id: 2,
      label: 'サイト内検索',
      active: pathname === '/search',
      href: '/search',
    },
    {
      icon: FcLike,
      id: 3,
      label: 'いいねしたコンテンツ',
      active: pathname === '/liked',
      href: '/liked',
    },
  ], [pathname])

  useEffect(() => {
    onClose()
  }, [pathname, onClose])

  return (
    <Modal
      isOpen={isOpen}
      onChange={onChange}
    >
      <Header>
        {/* childrenが必要にしてるから */}
      </Header>
      <div className="flex flex-col gap-y-4 px-5 py-4">
        {routes.map((item) => (
          <SidebarItem
            key={item.id}
            {...item}
          />
        ))}

      </div>
    </Modal>
  )
}

export default NavigationModal