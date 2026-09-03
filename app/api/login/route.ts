import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    endpoint: '/api/login',
    message: '로그인은 POST 요청으로 보내 주세요.',
  })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)

  if (!body || typeof body.email !== 'string' || typeof body.password !== 'string') {
    return NextResponse.json(
      { success: false, message: '이메일과 비밀번호를 보내 주세요.' },
      { status: 400 },
    )
  }

  // 임시 테스트용 인증입니다. 실제 서비스에서는 DB와 비밀번호 해시를 사용합니다.
  if (body.email !== 'demo@example.com' || body.password !== 'password') {
    return NextResponse.json(
      { success: false, message: '이메일 또는 비밀번호가 올바르지 않습니다.' },
      { status: 401 },
    )
  }

  return NextResponse.json({ success: true, message: '로그인되었습니다.' })
}
