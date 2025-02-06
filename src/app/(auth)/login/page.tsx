import Button from '@/app/components/button'
import { ArrowRight } from '@/app/components/icons'
import Input from '@/app/components/input'

export default function Login() {
  return (
    <div className="flex flex-col justify-between bg-white flex-1 rounded-[2rem] px-[5rem] py-[4.5rem] gap-10">
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-2">
          <h1 className="font-dmsans text-gray-500 text-[1.5rem] font-bold">
            Acesse sua conta
          </h1>
          <p className="text-gray-300">
            Informe seu e-mail e senha para entrar
          </p>
        </div>
        <form className="flex flex-col gap-[3rem]">
          <div className="flex flex-col gap-5">
            <Input
              name="email"
              type="text"
              label="e-mail"
              placeholder="Seu e-mail cadastrado"
              iconLeft="/mail.svg"
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              placeholder="Sua senha de acesso"
              iconLeft="/access.svg"
              iconRight="/view.svg"
            />
          </div>
          <Button text="Acessar" type="submit" iconRight={<ArrowRight />} />
        </form>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-gray-300">Ainda não tem uma conta?</p>
        <Button filled text="Cadastrar" iconRight={<ArrowRight />} />
      </div>
    </div>
  )
}
