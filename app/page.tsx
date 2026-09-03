export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* ① 프로모 바 */}
      <div className="flex justify-around bg-[#3d4f43] px-4 py-2 text-xs text-white">
        <span>25% Off Furniture</span>
        <span>30% Off Rugs</span>
        <span>30% Off Lighting</span>
        <span>Free Shipping Worldwide</span>
      </div>
            {/* ② 헤더 */}
      <header className="px-8 py-4">
        {/* 윗줄: 로고 + 메뉴 */}
        <div className="flex items-center justify-between border-b border-gray-200 pb-4">
          <div className="text-lg font-semibold">After.noon</div>
          <nav className="flex gap-6 text-sm text-gray-700">
            <a href="#">Shop All</a>
            <a href="#">Furniture</a>
            <a href="#">Lighting</a>
            <a href="#">Rugs</a>
            <a href="#">About</a>
            <a href="#">Stories</a>
            <a href="#">Contact</a>
          </nav>
        </div>
        {/* 아랫줄: 소셜 + 로그인/장바구니 */}
        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex gap-3">
            <span>f</span>
            <span>◎</span>
            <span>✕</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Log In</span>
            <span>🛒 0</span>
          </div>
        </div>
      </header>
            {/* ③ 히어로 */}
      <section className="relative h-[520px] w-full overflow-hidden">
        {/* 배경 이미지 */}
        <img
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&q=80"
          alt="Living room"
          className="h-full w-full object-cover"
        />
        {/* 가운데 검은 카드 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 bg-black/70 px-16 py-12 text-center text-white">
            <h1 className="text-4xl font-semibold leading-tight">
              The Annual
              <br />
              Holiday Sale
            </h1>
            <p className="text-sm text-gray-300">
              I&apos;m a title. Click here to add your own text and edit me.
            </p>
            <button className="mt-2 bg-white px-6 py-2 text-sm text-black">
              Shop Now
            </button>
          </div>
        </div>
      </section>
            {/* ④ 카테고리 바 */}
      <section className="flex divide-x divide-gray-200 border-y border-gray-200">
        <a href="#" className="flex flex-1 items-center justify-center gap-2 py-8 text-sm text-gray-700 hover:bg-gray-50">
          <span>🛋️</span> Furniture
        </a>
        <a href="#" className="flex flex-1 items-center justify-center gap-2 py-8 text-sm text-gray-700 hover:bg-gray-50">
          <span>💡</span> Lighting
        </a>
        <a href="#" className="flex flex-1 items-center justify-center gap-2 py-8 text-sm text-gray-700 hover:bg-gray-50">
          <span>🔲</span> Rugs
        </a>
        <a href="#" className="flex flex-1 items-center justify-center gap-2 py-8 text-sm text-gray-700 hover:bg-gray-50">
          <span>🏷️</span> Sale
        </a>
      </section>
            {/* Footer */}
      <footer className="mt-auto bg-[#3d4f43] px-8 py-12 text-sm text-white">
        <div className="flex flex-wrap justify-between gap-8">
          <div>
            <div className="mb-3 text-lg font-semibold">After.noon</div>
            <p className="max-w-xs text-gray-300">
              Modern furniture and lighting for the well-designed home.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Shop</span>
            <a href="#" className="text-gray-300 hover:text-white">Furniture</a>
            <a href="#" className="text-gray-300 hover:text-white">Lighting</a>
            <a href="#" className="text-gray-300 hover:text-white">Rugs</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Company</span>
            <a href="#" className="text-gray-300 hover:text-white">About</a>
            <a href="#" className="text-gray-300 hover:text-white">Stories</a>
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/20 pt-6 text-gray-400">
          © 2026 After.noon. All rights reserved.
        </div>
      </footer>
    </div>
  );
}