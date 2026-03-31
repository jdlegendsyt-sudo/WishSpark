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

const AD_SLOT_ENV_MAP: Record<string, string | undefined> = {
  HOME_MID_SLOT: import.meta.env.VITE_AD_SLOT_HOME_MID,
  HOME_BOTTOM_SLOT: import.meta.env.VITE_AD_SLOT_HOME_BOTTOM,
  BLOG_TOP_SLOT: import.meta.env.VITE_AD_SLOT_BLOG_TOP,
  BLOG_BOTTOM_SLOT: import.meta.env.VITE_AD_SLOT_BLOG_BOTTOM,
  BLOG_POST_TOP: import.meta.env.VITE_AD_SLOT_BLOG_POST_TOP,
  BLOG_POST_BOTTOM: import.meta.env.VITE_AD_SLOT_BLOG_POST_BOTTOM,
  FESTIVAL_TOP: import.meta.env.VITE_AD_SLOT_FESTIVAL_TOP,
  FESTIVAL_MID: import.meta.env.VITE_AD_SLOT_FESTIVAL_MID,
  TOOL_MID: import.meta.env.VITE_AD_SLOT_TOOL_MID,
  TOOL_BOTTOM: import.meta.env.VITE_AD_SLOT_TOOL_BOTTOM,
};

const isNumericSlot = (slot: string) => /^\d+$/.test(slot);

const resolveAdSlot = (slot: string) => {
  if (isNumericSlot(slot)) return slot;
  const mapped = AD_SLOT_ENV_MAP[slot];
  return mapped && isNumericSlot(mapped) ? mapped : "";
};

const AdBanner = ({ adSlot, adFormat = "auto", fullWidth = true, className = "" }: AdBannerProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const pushed = useRef(false);
  const resolvedAdSlot = resolveAdSlot(adSlot);

  // Respect a user's explicit rejection of advertising cookies.
  const consent = typeof window !== "undefined" ? localStorage.getItem("cookie-consent") : null;
  const allowAds = consent !== "declined";

  useEffect(() => {
    if (pushed.current || !allowAds || !resolvedAdSlot) return;
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
        pushed.current = true;
      }
    } catch (e) {
      console.log("AdSense not loaded yet");
    }
  }, [allowAds, resolvedAdSlot]);

  if (!allowAds || !resolvedAdSlot) return null;

  return (
    <div className={`w-full flex justify-center ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: fullWidth ? "100%" : "auto" }}
        data-ad-client="ca-pub-4104175069708345"
        data-ad-slot={resolvedAdSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
};

export default AdBanner;
