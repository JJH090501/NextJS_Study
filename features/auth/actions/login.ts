'use server'

export type LoginState = {
  error?: string
  success?: string
}

export async function login(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get('email') ?? '').trim()
  const password = String(formData.get('password') ?? '')

  if (!email || !password) {
    return { error: '이메일과 비밀번호를 입력해 주세요.' }
  }

  // TODO: 실제 서비스에서는 여기서 DB 조회와 비밀번호 해시 검증을 수행합니다.
  if (email !== 'demo@example.com' || password !== 'password') {
    return { error: '이메일 또는 비밀번호가 올바르지 않습니다.' }
  }

  return { success: '로그인되었습니다.' }
}
