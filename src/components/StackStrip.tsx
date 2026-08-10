import type { ReactNode } from "react";

import { AwsMark } from "@/components/AwsMark";
import { AzureMark } from "@/components/AzureMark";
import { FabricMark } from "@/components/FabricMark";
import { BRAND_MARKS } from "@/lib/brand-marks";

/**
 * The core data-platform stack, shown across the top of the hero beside the
 * portrait — mark plus name. Names are white; dbt keeps its brand orange
 * because the wordmark is effectively its logo.
 *
 * Fabric, Azure, and AWS are real multi-path/gradient logos (see their own
 * components) — none of them exist in simple-icons, whose Microsoft and Amazon
 * marks were pulled for trademark reasons. PySpark uses Apache Spark's mark.
 */
const MARK_CLASS = "h-7 w-auto shrink-0";

/** Single-path simple-icons mark, painted in its brand color. */
function IconMark({ name }: { name: string }) {
  const m = BRAND_MARKS.find((b) => b.label === name)!;
  return (
    <svg
      role="img"
      aria-hidden
      viewBox="0 0 24 24"
      fill={m.color}
      className="h-7 w-7 shrink-0"
    >
      <path d={m.path} />
    </svg>
  );
}

type Item = {
  label: string;
  mark?: ReactNode;
  color?: string;
  /** The logo already contains the name, so don't set it again in type. */
  lockup?: boolean;
};

const ITEMS: Item[] = [
  { label: "Databricks", mark: <IconMark name="Databricks" /> },
  { label: "Fabric", mark: <FabricMark className={MARK_CLASS} /> },
  { label: "Snowflake", mark: <IconMark name="Snowflake" /> },
  { label: "dbt", color: "#FF694A" },
  { label: "PySpark", mark: <IconMark name="Apache Spark" /> },
  { label: "Azure", mark: <AzureMark className={MARK_CLASS} /> },
  { label: "AWS", mark: <AwsMark className={MARK_CLASS} />, lockup: true },
];

export function StackStrip() {
  return (
    <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
      {ITEMS.map((item) => (
        <li key={item.label} className="flex items-center gap-2">
          {item.mark}
          {!item.lockup && (
            <span
              className="font-display text-base font-semibold tracking-tight text-foreground"
              style={item.color ? { color: item.color } : undefined}
            >
              {item.label}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
