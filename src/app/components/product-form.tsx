import Button from '@/app/components/button'
import Input from '@/app/components/input'
import Select from '@/app/components/select'
import Textarea from '@/app/components/textarea'

interface ProductFormProps {
  title?: string
  price?: string
  description?: string
  category?: {
    value: string
    label: string
  }
  editable?: boolean
}

export default function ProductForm({
  title,
  price,
  description,
  category,
  editable = false,
}: ProductFormProps) {
  console.log(editable)
  return (
    <form className="flex flex-col gap-10">
      <div className="flex flex-col gap-5">
        <div className="grid sm:grid-cols-[2fr_1fr] gap-5">
          <Input
            label="Título"
            name="title"
            value={title}
            placeholder="Nome do produto"
            disabled={!editable}
          />
          <Input
            label="Valor"
            name="price"
            value={price}
            mask="currency"
            type="number"
            placeholder="0,00"
            disabled={!editable}
          />
        </div>
        <div className="flex">
          <Textarea
            name="description"
            label="Descrição"
            value={description}
            disabled={!editable}
            placeholder="Escreva detalhes sobre o produto, tamanho, características"
            fill
          />
        </div>
        <div className="flex">
          <Select
            label="Categoria"
            name="category"
            placeholder="Categoria"
            fill
            disabled={!editable}
            options={[
              { value: category?.value ?? '', label: category?.label ?? '' },
            ]}
          />
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          fullWidth
          text="Cancelar"
          variant="outlined"
          textAlign="text-center"
        />
        <Button fullWidth text="Salvar e publicar" textAlign="text-center" />
      </div>
    </form>
  )
}
