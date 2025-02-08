import Image from 'next/image'
import { ReactNode } from 'react'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap h-screen w-full">
      <div className="flex p-10 min-w-[755px] flex-1 bg-[url('/auth-background.png')] bg-auto bg-no-repeat bg-center h-full">
        <div className="flex max-h-[69px] gap-5">
          <Image
            src="/logo.svg"
            width={200}
            height={200}
            style={{ maxHeight: '69px', width: 'auto' }}
            alt="Logo"
          />
          <div className="flex flex-col gap-1">
            <p className="font-dmsans text-[1.5rem] font-bold text-gray-400">
              Marketplace
            </p>
            <p className="text-gray-400">Painel de Vendedor</p>
          </div>
        </div>
      </div>
      <div className="flex p-10 w-[611px] h-full">
        <div className="bg-white flex-1 rounded-[2rem]  gap-10 overflow-hidden h-full">
          <div className="h-full px-[5rem] py-[4.5rem] overflow-y-auto scroll-pr-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
