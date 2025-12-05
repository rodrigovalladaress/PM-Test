"use client";

import { useState } from "react";
import { Selector, SelectorOption } from "../selector/selector";

type Selector = "personal" | "institutional";

const OPTIONS: SelectorOption<Selector>[] = [
  { id: "personal", label: "Personal" },
  { id: "institutional", label: "Institutional" },
];

export function HeaderSelector() {
  const [selector, setSelector] = useState<Selector>("personal");

  return (
    <Selector
      optionSelected={selector}
      options={OPTIONS}
      onSelectedOptionChange={setSelector}
    />
  );
}
