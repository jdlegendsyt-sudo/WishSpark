import { useEffect, useMemo, useRef } from "react";

interface JsonLdProps {
  data: Record<string, unknown>;
}

const JsonLd = ({ data }: JsonLdProps) => {
  const scriptRef = useRef<HTMLScriptElement | null>(null);
  const json = useMemo(() => JSON.stringify(data), [data]);

  useEffect(() => {
    if (!scriptRef.current) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      document.head.appendChild(script);
      scriptRef.current = script;
    }

    scriptRef.current.textContent = json;

    return () => {
      if (scriptRef.current) {
        document.head.removeChild(scriptRef.current);
        scriptRef.current = null;
      }
    };
  }, [json]);

  return null;
};

export default JsonLd;
