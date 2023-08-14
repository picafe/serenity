import { ImageResponse } from 'next/server';
// App router includes @vercel/og.
// No need to install it.

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')
      : 'Souffrances et Douleurs';

    const hasAuthor = searchParams.has('author');
    const author = hasAuthor
      ? searchParams.get('author')
      : 'Surya';

    const images = [
      'https://images.unsplash.com/photo-1676594808583-68cb10fdbb17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
      'https://images.unsplash.com/photo-1690553543873-ccaf9e2a9d5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
      'https://images.unsplash.com/photo-1691539706978-3cb89d88915f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
      'https://images.unsplash.com/photo-1691712820599-c159327225cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
      'https://images.unsplash.com/photo-1690364521753-ffc7c3835d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
      'https://images.unsplash.com/photo-1690364521753-ffc7c3835d4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format',
      'https://images.unsplash.com/photo-1688924510268-b8f96e26dea2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format'
    ];
    const random = Math.floor(Math.random() * images.length);


    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: `url(${images[random]})`,
            backgroundPosition: 'cover',
            backgroundSize: 'cover',
            borderRadius: '3rem',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
          </div>
          <div
            style={{
              fontSize: 60,
              fontWeight: 900,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              letterSpacing: '-0.025em',
              color: 'white',
              
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
            <br />
            - {author}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}