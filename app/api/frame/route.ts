import { NextRequest, NextResponse } from 'next/server';
import { getNftMetadata } from '../../lib/getNftMetadata';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  const postUrl = "https://fc-frame-zora-nfts-carrousel.app/api/frame"; 
  const lfghoContractAddress = "0x45ab4ace5836190fed42800b1c11cb6bdb3b4dc5";

  const maxSupply = 76;
  const randomTokenId = Math.floor(Math.random() * maxSupply) + 1;

  const nftMetadata = await getNftMetadata(lfghoContractAddress, randomTokenId);

  const nftImageUrl = nftMetadata?.image?.cachedUrl;

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content=${nftImageUrl} />
    <meta property="fc:frame:button:1" content="Randomize nft" />
    <meta property="fc:frame:post_url" content=${postUrl} />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export async function GET(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
