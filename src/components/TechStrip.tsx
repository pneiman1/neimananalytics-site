import type { ReactNode } from "react";

import { AirflowMark } from "@/components/AirflowMark";
import { BRAND_MARKS } from "@/lib/brand-marks";

/**
 * The stack behind DermIQ, shown as brand marks under the hero CTAs,
 * each in its own brand color.
 *
 * Airflow is a real multi-color component: its pinwheel is four two-tone
 * blades, which a single-path icon set can't express. dbt has no simple-icons
 * entry — pulled for trademark reasons — so it renders as a wordmark in dbt
 * Labs' orange, close to how they present it anyway.
 */

/** Single-path simple-icons mark, painted in its brand color. */
function IconMark({ label }: { label: string }) {
  const mark = BRAND_MARKS.find((m) => m.label === label)!;
  return (
    <svg
      role="img"
      aria-label={label}
      viewBox="0 0 24 24"
      fill={mark.color}
      className="h-5 w-5"
    >
      <path d={mark.path} />
    </svg>
  );
}

const ITEMS: { label: string; node: ReactNode }[] = [
  { label: "Snowflake", node: <IconMark label="Snowflake" /> },
  {
    label: "dbt",
    node: (
      <span
        className="block font-display text-lg font-semibold lowercase leading-5 tracking-tight"
        style={{ color: "#FF694A" }}
      >
        dbt
      </span>
    ),
  },
  { label: "Apache Airflow", node: <AirflowMark className="h-5 w-5" /> },
  { label: "Next.js", node: <IconMark label="Next.js" /> },
  { label: "Fly.io", node: <IconMark label="Fly.io" /> },
];

export function TechStrip() {
  return (
    <ul className="flex flex-wrap items-center gap-x-7 gap-y-4">
      {ITEMS.map((item) => (
        <li key={item.label} title={item.label}>
          {item.node}
        </li>
      ))}
    </ul>
  );
}
