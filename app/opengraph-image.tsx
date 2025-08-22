import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Steedoo Group International';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            letterSpacing: '-0.025em',
            marginBottom: 24,
          }}
        >
          Steedoo Group
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: '80%',
          }}
        >
          Global Leadership in Technology, Finance & Industry
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}