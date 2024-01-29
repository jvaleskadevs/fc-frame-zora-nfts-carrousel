import { NextRequest, NextResponse } from 'next/server';


async function getResponse(req: NextRequest): Promise<NextResponse> {
  const postUrl = "https://fc-frame-zora-nft-carrousel.app/api/frame"; 
  const lfghoContractAddress = "0x45ab4ace5836190fed42800b1c11cb6bdb3b4dc5";

  const maxSupply = 76;
  const randomTokenId = Math.floor(Math.random() * maxSupply) + 1;

  const options = {method: 'GET', headers: {accept: 'application/json'}};
  const baseUrl = 'https://base-mainnet.g.alchemy.com/';
  const endpoint = baseUrl + `nft/v3/${process.env.ALCHEMY_ID || 'docs-demo'}/getNFTMetadata`;
  const params = `?contractAddress=${lfghoContractAddress}&tokenId=${randomTokenId}&refreshCache=false`;
  const response = await fetch(endpoint+params, options);
  const nftMetadata = await response.json();

  // build the image url
  const nftImageUrl = nftMetadata?.image?.cachedUrl;

  return new NextResponse(`<!DOCTYPE html><html><head>
    <meta property="fc:frame" content="vNext" />
    <meta property="fc:frame:image" content="${nftImageUrl}" />
    <meta property="fc:frame:button:1" content="Randomize nft" />
    <meta property="fc:frame:post_url" content="${postUrl}" />
  </head></html>`);
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export async function GET(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
