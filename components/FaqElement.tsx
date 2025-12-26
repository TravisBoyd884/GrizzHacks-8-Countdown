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

   useEffect(() => {
    if (typeof window !== "undefined") {
      // This ensures that DOMPurify runs only on the client side
      setSanitizedAnswer(DOMPurify.sanitize(answer));
    }
  }, [answer]);

    return (
        <>
          <div className="relative cursor-pointer"
            onClick={(e) => {
                  e.preventDefault();
                  onToggle();
                }}>
              {/* frog guy */}
              {active && (
                  <div className="absolute -top-[4rem] right-0 w-20 z-10">
                      <img src="/freddy.svg" alt="froggy" className="w-full h-auto"/>
                  </div>
              )}

            <details
              open={active}
              className={`group relative rounded-xl border border-white/10 p-4 ${active ? 'z-20 bg-[#372D10]' : 'z-0 bg-[#68582E]'} hover:bg-[#372D10]`}
              onClick={onToggle}
              >
              <summary className="cursor-pointer list-none font-medium text-white/90">
                <div className="flex items-center justify-between xl:text-xl">
                  <span>{question}</span>
                  <span className="text-white/50 group-open:rotate-45 transition">
                    +
                  </span>
                </div>
              </summary>
            
            {active && (
              <div className="mt-3 text-sm text-white/70">
                <p
                className="my-1 xl:text-lg"
                dangerouslySetInnerHTML={{ __html: sanitizedAnswer || '' }}
                ></p>
              </div>
            )}
            </details>
          </div>
        </>
    );
};

export default FaqElement;