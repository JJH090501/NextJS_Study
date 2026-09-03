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
    </div>
  );
}