import Image from 'next/image'
import { ReactNode } from 'react'
import Button from '../components/button'
import { Box, Graph, Plus } from '../components/icons'
import NavButton from '../components/nav-button'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="flex p-5 justify-between items-center border-b border-shape flex-wrap">
        <Image
          src="/logo.svg"
          width={200}
          height={200}
          style={{ maxHeight: '40px', width: 'auto' }}
          alt="Logo"
        />
        <div className="flex gap-2">
          <NavButton text="Dashboard" iconLeft={<Graph />} href="/" />
          <NavButton text="Produtos" iconLeft={<Box />} href="/products" />
        </div>
        <div className="flex gap-2 items-center">
          <Button
            text="Novo Produto"
            isActive
            iconLeft={<Plus />}
            styles="text-sm px-4 py-2"
          />

          <Image
            src="https://github.com/saramargarido.png"
            width={48}
            height={48}
            alt="Logo"
            className="rounded-xl border border-shape"
          />
        </div>
      </header>
      <div className="p-[4rem] mx-auto flex-1 w-full">
        <div className="max-w-[1030px] mx-auto flex-1 w-full">{children}</div>
      </div>
    </div>
  )
}
