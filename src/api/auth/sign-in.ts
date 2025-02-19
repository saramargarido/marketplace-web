import { api } from '../../lib/axios'

export async function signIn({
  email,
  password,
}: {
  email: string
  password: string
}) {
  await api.post('/sellers/sessions', { email, password })
}
