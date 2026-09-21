"use client";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

/**
 * Lightweight YouTube embed: shows a thumbnail facade and only loads the real
 * iframe on click. Keeps the page fast and clean. Wraps the video in a 16:9 box.
 */
export function YouTubeLite({ id, title }: { id: string; title: string }) {
  return (
    <div className="lyt-radius">
      <LiteYouTubeEmbed
        id={id}
        title={title}
        poster="hqdefault"
        noCookie
      />
    </div>
  );
}
