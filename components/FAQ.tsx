"use client";

import React, { useState } from "react";
import faqs from "../data/faq.json";
import FaqElement from "./FaqElement";

export default function FAQSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  return (
    <section id="faq" className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-2xl font-semibold">FAQ</h2>

        {/* Mobile View */}
        <div className="mt-10 space-y-3">
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
  );
}
