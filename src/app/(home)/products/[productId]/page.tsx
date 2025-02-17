import { ArrowLeft, Check, Not } from '@/app/components/icons'
import ProductForm from '@/app/components/product-form'
import Image from 'next/image'
import Link from 'next/link'

export default function Product() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-2 relative">
        <Link
          href={'/products'}
          className="flex gap-2 text-orange-base text-sm absolute top-[-28px] left-0"
        >
          <ArrowLeft />
          Voltar
        </Link>
        <h1 className="font-dmsans text-gray-500 text-[1.5rem] font-bold">
          Editar produto
        </h1>
        <div className="flex justify-between gap-4 flex-wrap">
          <p className="text-gray-300 text-sm">
            Gerencie as informações do produto cadastrado
          </p>
          <div className="flex gap-4">
            <Link
              href={'/products'}
              className="text-orange-base flex gap-2 text-sm items-center"
            >
              <Check />
              <span>Marcar como vendido</span>
            </Link>
            <Link
              href={'/products'}
              className="text-orange-base flex gap-2 text-sm items-center"
            >
              <Not />
              <span>Desativar anúncio</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex gap-6 items-start lg:flex-row flex-col">
        <div className="relative min-w-[415px] max-w-full w-full">
          <Image
            src={'https://placehold.co/600x400.png'}
            width={0}
            height={0}
            sizes="100vw"
            style={{ maxWidth: '100%', width: '100%', height: 'auto' }}
            alt="Imagem do produto"
            className="rounded-2xl border border-shape"
          />
        </div>
        <div className="flex flex-col p-6 bg-white rounded-[1.25rem] lg:min-w-[590px] max-w-full w-full gap-6">
          <div className="flex justify-between items-center">
            <h2 className="font-dmsans text-gray-300 text-lg font-bold">
              Dados do produto
            </h2>
            <small className="uppercase text-[0.625] bg-blue-dark text-white py-1 px-2 rounded-full">
              Anunciado
            </small>
          </div>
          <ProductForm
            title="Sofá"
            price="772.99"
            description="Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado."
            category={{ value: 'mobile', label: 'Móvel' }}
          />
        </div>
      </div>
    </div>
  )
}
