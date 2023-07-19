"use client"

import Link from "next/link";
import { FC, ReactNode, useMemo } from "react"
import { usePathname } from "next/navigation"
import { twMerge } from 'tailwind-merge';
import { HiHome } from "react-icons/hi"
import { BiSearch } from "react-icons/bi"
import { FcLike } from "react-icons/fc";

import { Content } from "@/types"
import usePlayer from "@/hooks/usePlayer"

import Box from './Box';
import SidebarItem from './SidebarItem';
import Library from './Library';
import Header from "./Header";
import HeaderTabAndMob from './Tablet_Mobile/HeaderTabAndMob';


interface SidebarProps {
  children: ReactNode,
  contents: Content[],
}

const Sidebar: FC<SidebarProps> = ({ children, contents }) => {
  const pathname = usePathname()
  const player = usePlayer()

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
  return (
    <div
      className={twMerge(`
      grid grid-cols-1 gap-2
      md:grid md:grid-cols-4 md:gap-8 
    `,
        player.activeId && 'h-[calc(100%-80px)]'
      )}>

      {/* display large */}
      <div
        className="
          hidden
          md:flex md:flex-col md:gap-y-2 md:h-full md:p-2
          
      ">
        <Box>
          <Link href="/" className="text-center p-4 text-3xl font-bold">カプコード</Link>
        </Box>

        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SidebarItem
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library contents={contents} />
        </Box>
      </div>

      {/* display medium/small */}
      <div className="
        md:hidden h-min
      ">
        <HeaderTabAndMob />
      </div>
      <main className="
        h-full flex-1 overflow-y-auto py-2 col-span-2 
      ">
        {children}
      </main>
      <div
        className="
          hidden
          md:flex md:flex-col md:gap-y-2 md:h-full md:p-2
          xl:flex xl:flex-col xl:gap-y-2 xl:h-full xl:p-2
      ">
        <Box>
          <div className="flex flex-col gap-y-4">
            {/* <ThemeSwitch /> */}
            {/* {routes.map((item) => (
              <SidebarItem
                key={item.label}
                {...item}
              />
            ))} */}
            <Header className="rounded-lg">
              {/* <div>aaaaa</div> */}
            </Header>
          </div>
        </Box>
      </div>
    </div>
  )
}

export default Sidebar