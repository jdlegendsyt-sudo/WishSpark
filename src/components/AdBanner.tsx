import { useEffect, useRef } from "react";

interface AdBannerProps {
  adSlot: string;
  adFormat?: "auto" | "horizontal" | "vertical" | "rectangle";
  fullWidth?: boolean;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

const AdBanner = ({ adSlot, adFormat = "auto", fullWidth = true, className = "" }: AdBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
        pushed.current = true;
      }
    } catch (e) {
      console.log("AdSense not loaded yet");
    }
  }, []);

  return (
    <div className={`w-full flex justify-center ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: fullWidth ? "100%" : "auto" }}
        data-ad-client="ca-pub-4104175069708345"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
