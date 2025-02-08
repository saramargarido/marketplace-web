import Image from 'next/image'
import { ReactNode } from 'react'
import Button from '../components/button'
import { Box, Graph, Plus } from '../components/icons'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen w-full">
      <header className="flex p-5 justify-between items-center">
        <Image
          src="/logo.svg"
          width={200}
          height={200}
          style={{ maxHeight: '40px', width: 'auto' }}
          alt="Logo"
        />
        <div className="flex gap-2">
          <Button
            text="Dashboard"
            variant="link"
            styles="text-sm px-4 py-2"
            isActive
            iconLeft={<Graph />}
          />
          <Button
            text="Produtos"
            variant="link"
            iconLeft={<Box />}
            styles="text-sm px-4 py-2"
          />
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
      {children}
    </div>
  )
}
