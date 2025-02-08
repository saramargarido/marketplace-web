import Button from '@/app/components/button'
import {
  ArrowRight,
  ImageUpload,
  Lock,
  Mail,
  OpenEye,
  Phone,
  User,
} from '@/app/components/icons'
import Input from '@/app/components/input'

export default function Register() {
  return (
    <div className="flex flex-col justify-between min-h-[576px] gap-[5rem]">
      <div className="flex flex-col gap-[2.5rem]">
        <div className="flex flex-col gap-2">
          <h1 className="font-dmsans text-gray-500 text-[1.5rem] font-bold">
            Crie sua conta
          </h1>
          <p className="text-gray-300 text-sm">
            Informe os seus dados pessoais e de acesso
          </p>
        </div>
        <form className="flex flex-col gap-[3rem]">
          <div className="flex flex-col gap-5">
            <h2 className="font-dmsans text-gray-500 text-[1.5rem] font-bold text-lg">
              Perfil
            </h2>
            <span className="h-[120px] w-[120px] flex justify-center items-center bg-shape rounded-xl">
              <ImageUpload styles="fill-orange-base" />
            </span>
            <Input
              name="name"
              label="Nome"
              placeholder="Seu nome completo"
              iconLeft={<User styles="fill-gray-200" />}
            />
            <Input
              name="phone"
              label="Telefone"
              placeholder="(00) 00000-0000"
              iconLeft={<Phone styles="fill-gray-200" />}
            />
          </div>
          <div className="flex flex-col gap-5">
            <h2 className="font-dmsans text-gray-500 text-[1.5rem] font-bold text-lg">
              Acesso
            </h2>
            <Input
              name="email"
              type="text"
              label="e-mail"
              placeholder="Seu e-mail cadastrado"
              iconLeft={<Mail styles="fill-gray-200" />}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Senha de acesso"
              iconLeft={<Lock styles="fill-gray-200" />}
              iconRight={<OpenEye styles="fill-gray-200" />}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Confirme a senha"
              iconLeft={<Lock styles="fill-gray-200" />}
              iconRight={<OpenEye styles="fill-gray-200" />}
            />
          </div>
          <Button text="Cadastrar" type="submit" iconRight={<ArrowRight />} />
        </form>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-gray-300">Já tem uma conta?</p>
        <Button variant="outlined" text="Acessar" iconRight={<ArrowRight />} />
      </div>
    </div>
  )
}
