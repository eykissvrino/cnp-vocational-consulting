import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = 'AX 컨설팅 | AI Transformation | 시앤피컨설팅';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0F1729',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: '64px',
            height: '4px',
            background: '#64748B',
            borderRadius: '2px',
          }}
        />

        {/* Center content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div
            style={{
              fontSize: '16px',
              letterSpacing: '0.15em',
              color: 'rgba(255,255,255,0.5)',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            AX · AX컨설팅팀
          </div>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 300,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
            }}
          >
            AX 컨설팅
          </div>
          <div
            style={{
              fontSize: '32px',
              color: 'rgba(255,255,255,0.7)',
              fontWeight: 300,
              letterSpacing: '0.01em',
            }}
          >
            AI Transformation
          </div>
          <div
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 300,
            }}
          >
            AI 성숙도 진단 · AX 전략수립 · Skill Set 구축 · 워크플로우 재설계
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: '20px',
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 400,
              letterSpacing: '0.05em',
            }}
          >
            시앤피컨설팅
          </div>
          <div
            style={{
              fontSize: '14px',
              color: 'rgba(255,255,255,0.25)',
              letterSpacing: '0.08em',
            }}
          >
            cnp.re.kr/services/ax
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
