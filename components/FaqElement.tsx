import React, { useEffect, useState } from "react";
import DOMPurify from "dompurify"; //recommended security

interface FaqElementProps {
  question: string;
  answer: string;
  active: boolean;
  show: boolean;
  onToggle: () => void;
}

const FaqElement: React.FC<FaqElementProps> = ({
  question,
  answer,
  active,
  show,
  onToggle,
}) => {
  const [sanitizedAnswer, setSanitizedAnswer] = useState<string | null>(null);

    return (
        <>
            <details
              className="group rounded-xl border border-white/10 bg-white/5 p-4 z-1"
              onClick={onToggle}
            >
              <summary className="cursor-pointer list-none font-medium text-white/90">
                <div className="flex items-center justify-between">
                  <span>{question}</span>
                  <span className="text-white/50 group-open:rotate-45 transition">
                    +
                  </span>
                </div>
              </summary>
            
            {active && (
              <div className="mt-3 text-sm text-white/70">{answer}</div>
            )}
            </details>

            {/* frog guy */}
            <div className="relative">
                {active && (
                    <div className="absolute -top-[3rem] right-0 w-20 -z-1">
                        <img src="/freddy.svg" alt="froggy" className="w-full h-auto"/> {/*might need to fix path */}
                    </div>
                )}
            </div>
        </>
    );
};

export default FaqElement;