"use client";

import React, { useState } from "react";
import faqs from "../data/faq.json";
import FaqElement from "./FaqElement";


export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  return (
    <>
      <section id="faq" className="min-h-screen bg-[#023C0F]">
        <div className="mx-auto w-[80vw] px-4 py-20">
          {/* Header */}
          <h2 className="text-[5rem] text-center font-semibold">FAQ's</h2>

          {/* Desktop View */}
          <div className="hidden lg:flex flex-row gap-2 w-full justify-center">
            {/* left column */}
            <div className="flex flex-col w-1/2 mt-1 gap-1">
              {faqs.map((question, index) =>
                index % 2 === 0 ? (
                  <FaqElement
                    key={index}
                    question={question.q}
                    answer={question.a}
                    active={index === activeFaq}
                    show={true}
                    onToggle={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    } // Toggle active FAQ
                  />
                ) : null
              )}
            </div>
            {/* right column */}
            <div className="flex flex-col w-1/2 mt-1 gap-1">
              {faqs.map((question, index) =>
                index % 2 !== 0 ? (
                  <FaqElement
                    key={index}
                    question={question.q}
                    answer={question.a}
                    active={index === activeFaq}
                    show={true}
                    onToggle={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    } // Toggle active FAQ
                  />
                ) : null
              )}
            </div>
          </div>

          {/* Mobile View */}
          <div className="lg:hidden mt-10 space-y-3">
            {faqs.map((question, index) => (
              <FaqElement 
                key={index}
                question={question.q}
                answer={question.a}
                active={index === activeFaq}
                show={true}
                onToggle={() =>
                  setActiveFaq(activeFaq === index ? null : index)
                } // Toggle active FAQ
              />
            
            ))}
          </div>

        </div>
      </section>
    </>  
  );
}
