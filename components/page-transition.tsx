"use client";

import { ReactNode, useEffect, useState } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return <div className={mounted ? "page-transition mounted" : "page-transition"}>{children}</div>;
}
