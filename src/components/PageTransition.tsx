import { useEffect, useState } from "react";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 0.35s ease",
      }}
    >
      {children}
    </div>
  );
}
