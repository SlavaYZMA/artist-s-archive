import { useRef, useState, useCallback } from 'react';
import { Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoPlayerProps {
  src: string;
  posterSrc?: string;
  className?: string;
}

export default function VideoPlayer({ src, posterSrc, className = '' }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  }, [isPlaying]);

  return (
    <div
      className={`relative cursor-pointer overflow-hidden bg-muted ${className}`}
      onClick={toggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === ' ' && (e.preventDefault(), toggle())}
    >
      <video
        ref={videoRef}
        src={src}
        poster={posterSrc}
        muted
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
      />

      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center bg-foreground/5"
          >
            <div className="w-16 h-16 rounded-full border border-foreground/20 flex items-center justify-center backdrop-blur-sm bg-background/30">
              <Play className="w-6 h-6 text-foreground/70 ml-0.5" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
