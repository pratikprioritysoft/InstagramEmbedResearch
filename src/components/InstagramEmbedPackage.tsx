import { InstagramEmbed } from 'react-social-media-embed';

interface InstagramEmbedPackageProps {
  url: string;
  width?: number;
}

/**
 * Instagram Embed Component using react-social-media-embed package
 * 
 * Usage:
 * <InstagramEmbedPackage url="https://www.instagram.com/p/POST_ID/" width={540} />
 * 
 * @param url - The Instagram post URL
 * @param width - Width of the embed (default: 540)
 */
function InstagramEmbedPackage({ url, width = 540 }: InstagramEmbedPackageProps) {
  return (
    <div
      className="instagram-embed-package-container"
      style={{
        maxWidth: `${width}px`,
        margin: '0 auto',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <InstagramEmbed url={url} width={width} />
    </div>
  );
}

export default InstagramEmbedPackage;

