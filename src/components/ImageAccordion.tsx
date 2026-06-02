"use client";

import { useState } from "react";

export interface AccordionItem {
  id: number;
  title: string;
  imageUrl: string;
  subItems?: string[];
}

function Item({
  item,
  isActive,
  onMouseEnter,
}: {
  item: AccordionItem;
  isActive: boolean;
  onMouseEnter: () => void;
}) {
  return (
    <div
      className={`relative h-[420px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-700 ease-in-out flex-shrink-0 ${
        isActive ? "w-[320px]" : "w-[54px]"
      }`}
      onMouseEnter={onMouseEnter}
    >
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
      {isActive && <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a227]" />}

      <span
        className={`absolute font-bold text-white whitespace-nowrap transition-all duration-500 ease-in-out ${
          isActive
            ? "bottom-auto top-5 left-4 text-base rotate-0"
            : "bottom-16 left-1/2 -translate-x-1/2 rotate-90 text-xs tracking-wider"
        }`}
      >
        {item.title}
      </span>

      <div
        className={`absolute left-4 right-4 flex flex-col gap-2 transition-all duration-500 ${
          isActive ? "top-12 opacity-100" : "top-12 opacity-0 pointer-events-none"
        }`}
      >
        {item.subItems?.map((sub) => (
          <div key={sub} className="flex items-start gap-2">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#c9a227] flex-shrink-0" />
            <span className="text-white/90 text-sm leading-snug">{sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ImageAccordion({ items }: { items: AccordionItem[] }) {
  const [active, setActive] = useState<number | null>(0);

  return (
    <div
      className="flex flex-row items-center justify-center gap-2"
      onMouseLeave={() => setActive(null)}
    >
      {items.map((item, i) => (
        <Item
          key={item.id}
          item={item}
          isActive={i === active}
          onMouseEnter={() => setActive(i)}
        />
      ))}
    </div>
  );
}
