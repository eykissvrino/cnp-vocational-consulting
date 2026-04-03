import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export const alt = '직업능력컨설팅본부 | 시앤피컨설팅';

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
            background: '#3B5BDB',
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
            HRM · HRD · AX 컨설팅 전문기관
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
            직업능력컨설팅본부
          </div>
          <div
            style={{
              fontSize: '24px',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 300,
              letterSpacing: '0.02em',
            }}
          >
            직무 중심 인사혁신 · 역량 기반 인재개발 · AI Transformation
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
            cnp.re.kr
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
