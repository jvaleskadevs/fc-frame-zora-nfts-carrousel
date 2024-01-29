import { NextRequest, NextResponse } from 'next/server';


async function getResponse(req: NextRequest): Promise<NextResponse> {
  const postUrl = "https://fc-frame-zora-nft-carrousel.app/api/frame";
  const maxSupply = 46;
  const randomIndex = Math.floor(Math.random() * maxSupply) + 1;
  const zoraUrl = "https://opensea.io/assets/base/0x45ab4ace5836190fed42800b1c11cb6bdb3b4dc5";
  const randomNft = zoraUrl + "/" + randomIndex;

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content=${randomNft} />
    <meta property="fc:frame:button:1" content="Randomize nft" />
    <meta property="fc:frame:post_url" content=${postUrl} />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
