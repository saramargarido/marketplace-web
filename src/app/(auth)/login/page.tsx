'use client'
import { signIn } from '@/api/auth/sign-in'
import Button from '@/app/components/button'
import { ArrowRight, Lock, Mail, OpenEye } from '@/app/components/icons'
import Input from '@/app/components/input'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { z } from 'zod'

const signInSchema = z.object({
  email: z.string().email('E-mail inválido'),
  password: z.string(),
})

type SignInForm = z.infer<typeof signInSchema>

export default function Login() {
  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  )

  async function handleSignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data: SignInForm = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    }
    console.log(data)
    const result = signInSchema.safeParse(data)
    if (!result.success) {
      const fieldErrors = result.error.format()
      setErrors({
        email: fieldErrors.email?._errors[0],
        password: fieldErrors.password?._errors[0],
      })
      return
    }

    try {
      await authenticate({ email: data.email, password: data.password })
    } catch (error) {
      console.error('Authentication failed:', error)
    }
  }

  return (
    <div className="flex flex-col justify-between min-h-[576px]">
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-2">
          <h1 className="font-dmsans text-gray-500 text-[1.5rem] font-bold">
            Acesse sua conta
          </h1>
          <p className="text-gray-300 text-sm">
            Informe seu e-mail e senha para entrar
          </p>
        </div>
        <form onSubmit={handleSignIn} className="flex flex-col gap-[3rem]">
          <div className="flex flex-col gap-5">
            <Input
              type="text"
              name="email"
              label="e-mail"
              placeholder="Seu e-mail cadastrado"
              iconLeft={<Mail styles="fill-gray-200" />}
              error={errors.email}
            />
            <Input
              type="password"
              name="password"
              label="Senha"
              placeholder="Sua senha de acesso"
              iconLeft={<Lock styles="fill-gray-200" />}
              iconRight={<OpenEye styles="fill-gray-200" />}
              error={errors.password}
            />
          </div>
          <Button text="Acessar" type="submit" iconRight={<ArrowRight />} />
        </form>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-gray-300">Ainda não tem uma conta?</p>
        <Button
          variant="outlined"
          text="Cadastrar"
          iconRight={<ArrowRight />}
        />
      </div>
    </div>
  )
}
