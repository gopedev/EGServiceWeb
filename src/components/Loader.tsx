'use client';
import { useEffect, useState } from "react";

export default function Loader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <span className="text-2xl font-bold text-blue-600 animate-pulse">EG Service Web</span>
        </div>
      ) : (
        <div className="animate-fade-in">{children}</div>
      )}
    </>
  );
}
