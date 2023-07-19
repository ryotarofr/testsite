import Link from 'next/link';
import { BiSearch } from "react-icons/bi"
import { RxHamburgerMenu } from "react-icons/rx"

import useNavModal from '@/hooks/useNavModal';

const HeaderTabAndMob = () => {
  const navModal = useNavModal()
  return (
    <div
      className="w-full px-10 pt-4 pb-2">
      <div className="flex justify-between">
        <Link href="/" className="text-3xl font-bold">カプコード</Link>
        <div className="flex items-center">
          <Link href="/search" className='p-[6px] mr-2'>
            <BiSearch size={24} />
          </Link>

          {/* モーダル作る */}
          <div
            onClick={navModal.onOpen}
            className='p-[6px]'>
            <RxHamburgerMenu size={24} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTabAndMob