'use client'

import { useActionState } from 'react'
import { login, type LoginState } from '../actions/login'

const initialState: LoginState = {}

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(login, initialState)

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4 rounded border border-gray-200 p-6">
      <h1 className="text-2xl font-semibold">로그인</h1>

      <label className="flex flex-col gap-1 text-sm">
        이메일
        <input name="email" type="email" required className="rounded border px-3 py-2" placeholder="demo@example.com" />
      </label>

      <label className="flex flex-col gap-1 text-sm">
        비밀번호
        <input name="password" type="password" required className="rounded border px-3 py-2" placeholder="password" />
      </label>

      {state.error && <p className="text-sm text-red-600" role="alert">{state.error}</p>}
      {state.success && <p className="text-sm text-green-700" role="status">{state.success}</p>}

      <button type="submit" disabled={isPending} className="rounded bg-black px-4 py-2 text-white disabled:opacity-50">
        {isPending ? '로그인 중...' : '로그인'}
      </button>
      <p className="text-xs text-gray-500">테스트 계정: demo@example.com / password</p>
    </form>
  )
}
