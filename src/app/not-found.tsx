import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <p className="text-7xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl font-bold text-text mb-3">페이지를 찾을 수 없습니다</h1>
        <p className="text-text-muted text-sm mb-8 leading-relaxed">
          요청하신 페이지가 존재하지 않거나 이동되었습니다.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors duration-200"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
