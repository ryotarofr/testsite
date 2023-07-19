"use client"

import { FC, ReactNode } from "react"
import { useRouter } from "next/navigation";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge"
import { FaUserAlt } from "react-icons/fa"

import useAuthModal from '@/hooks/useAuthModal';
import { useUser } from "@/hooks/useUser";
import usePlayer from "@/hooks/usePlayer";

import Button from './Button';


interface HeaderProps {
  children: ReactNode,
  className?: string,
}

const Header: FC<HeaderProps> = ({ children, className }) => {
  const player = usePlayer()
  const authModal = useAuthModal()
  const router = useRouter()

  const supabaseClient = useSupabaseClient()
  const { user } = useUser()

  const handleLogout = async () => {
    const { error } = await supabaseClient.auth.signOut()
    player.reset()
    router.refresh()

    if (error) {
      toast.error(error.message)
    } else {
      toast.success('ログアウトしました!')
    }
  }
  return (
    <div className={twMerge(`h-fit p-6`, className)}>
      <div className="
      w-full mb-4 flex items-center justify-center
  
      ">
        <div className="
          md:flex md:items-center md:justify-center
          ">
          <div className="
          flex flex-col justify-center items-center gap-x-4
          
          ">
            {user ? (
              <div className="
              flex gap-y-2
              xl:gap-x-4">
                <Button
                  onClick={handleLogout}
                  className="bg-white px-6 py-2"
                >
                  logout
                </Button>
                <Button
                  onClick={() => router.push('/account')}
                  className="bg-white"
                >
                  <FaUserAlt />
                </Button>
              </div>
            ) : (
              <>
                <div>
                  <Button
                    className="bg-transparent text-neutral-300 font-medium"
                    onClick={authModal.onOpen}
                  >
                    Sign Up
                  </Button>
                </div>
                <div>
                  <Button
                    className="bg-white px-6 py-2"
                    onClick={authModal.onOpen}
                  >
                    Login
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header