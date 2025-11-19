import { useEffect, useRef } from 'react';

/**
 * Instagram Embed Component
 * 
 * Usage:
 * <InstagramEmbed url="https://www.instagram.com/p/POST_ID/" />
 * 
 * @param {string} url - The Instagram post URL
 * @param {number} maxWidth - Maximum width of the embed (default: 540)
 * @param {boolean} hideCaption - Whether to hide the caption (default: false)
 */
function InstagramEmbed({ url, maxWidth = 540, hideCaption = false }) {
    const containerRef = useRef(null);

    useEffect(() => {
        // Check if Instagram embed script is already loaded
        if (!window.instgrm) {
            // Load Instagram embed script
            const script = document.createElement('script');
            script.src = 'https://www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);

            script.onload = () => {
                // Process embeds after script loads
                if (window.instgrm && window.instgrm.Embeds) {
                    window.instgrm.Embeds.process();
                }
            };
        } else {
            // Script already loaded, just process embeds
            if (window.instgrm.Embeds) {
                window.instgrm.Embeds.process();
            }
        }

        // Cleanup function
        return () => {
            // Note: We don't remove the script as it might be used by other embeds
        };
    }, [url]);

    return (
        <div
            ref={containerRef}
            className="instagram-embed-container"
            style={{
                maxWidth: `${maxWidth}px`,
                margin: '0 auto',
                padding: '20px'
            }}
        >
            <blockquote
                className="instagram-media"
                data-instgrm-captioned={!hideCaption}
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '100%',
                    minWidth: '326px',
                    padding: '0',
                    width: '99.375%'
                }}
            >
                <div style={{ padding: '16px' }}>
                    <a
                        href={url}
                        style={{
                            background: '#FFFFFF',
                            lineHeight: 0,
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%'
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View this post on Instagram
                    </a>
                </div>
            </blockquote>
        </div>
    );
}

export default InstagramEmbed;

