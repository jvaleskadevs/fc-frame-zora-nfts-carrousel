import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';


const maxSupply = 46;
const randomIndex = Math.floor(Math.random() * maxSupply) + 1;
const zoraUrl = "https://zora.co/collect/base:0x45ab4ace5836190fed42800b1c11cb6bdb3b4dc5";
const randomImage = zoraUrl + "/" + randomIndex;
const postUrl = "https://fc-frame-zora-nft-carrousel.app/api/frame";

const frameMetadata = getFrameMetadata({
  buttons: ['randomize nft'],
  image: randomImage,
  post_url: postUrl,
});

export const metadata: Metadata = {
  title: 'nft carrousel',
  description: 'nft carrousel',
  openGraph: {
    title: 'nft carrousel',
    description: 'nft carrousel',
    images: [randomImage],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>this is a farcaster frame displaying an nft carrousel</h1>
    </>
  );
}
