import React from "react";

const PROTECTED_PATTERNS = [
  "RAWINALA HARIDRA GLOBAL",
  "Rawinala Haridra Global",
  "Jenderal (Purn.) Dudung Abdurachman",
  "Fu Kwet Khiong",
];

const PROTECTED_REGEX = new RegExp(
  `(${PROTECTED_PATTERNS.map((p) =>
    p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  ).join("|")})`,
  "g"
);

interface ProtectedTextProps {
  text: string;
  className?: string;
}

/**
 * Automatically wraps official organization and leadership names
 * in <span className="notranslate" translate="no"> so Google Translate
 * never mutates their spelling across CJK, Arabic, or English.
 */
export function ProtectedText({ text, className }: ProtectedTextProps) {
  const parts = text.split(PROTECTED_REGEX);

  return (
    <span className={className}>
      {parts.map((part, idx) =>
        PROTECTED_PATTERNS.includes(part) ? (
          <span key={idx} className="notranslate" translate="no">
            {part}
          </span>
        ) : (
          <React.Fragment key={idx}>{part}</React.Fragment>
        )
      )}
    </span>
  );
}

export function OfficialOrgName({
  uppercase = false,
  className = "",
}: {
  uppercase?: boolean;
  className?: string;
}) {
  return (
    <span className={`notranslate ${className}`} translate="no">
      {uppercase ? "RAWINALA HARIDRA GLOBAL" : "Rawinala Haridra Global"}
    </span>
  );
}

export function FounderName({ className = "" }: { className?: string }) {
  return (
    <span className={`notranslate ${className}`} translate="no">
      Fu Kwet Khiong
    </span>
  );
}

export function MenkoName({ className = "" }: { className?: string }) {
  return (
    <span className={`notranslate ${className}`} translate="no">
      Jenderal (Purn.) Dudung Abdurachman
    </span>
  );
}
