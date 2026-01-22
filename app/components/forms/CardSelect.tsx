import FieldLabel from "./FieldLabel";
import TextArea from "./TextArea";

export default function CardSelect({
  options,
  value,
  onChange,
  label,
  required,
  showError,
  otherValue,
  onOtherChange,
}: {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  required?: boolean;
  showError?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
}) {
  const showOtherInput = value === "Other" && onOtherChange !== undefined;
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex flex-col items-center">
          <FieldLabel>{label}</FieldLabel>
        </div>
      )}
      <div className="grid gap-3">
        {options.map((option) => {
          const isSelected = value === option;
          const isOther = option === "Other";
          return (
            <div key={option} className="space-y-2">
              <button
                type="button"
                onClick={() => onChange(option)}
                className={[
                  "w-full rounded-lg border px-4 py-3 text-left transition",
                  isSelected
                    ? "border-lime-400 bg-lime-400/20 text-white shadow-[0_0_20px_rgba(163,255,0,0.2)]"
                    : "border-white/10 bg-white/5 text-white hover:border-lime-300/40",
                ].join(" ")}
              >
                <span className="font-medium">{option}</span>
              </button>
              {isOther && showOtherInput && (
                <div className="pl-1">
                  <TextArea
                    value={otherValue || ""}
                    onChange={(e) => onOtherChange?.(e.target.value)}
                    placeholder="Please specify..."
                    rows={2}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {required && showError && !value && (
        <p className="text-center text-xs text-red-400">Please select an option</p>
      )}
      {required && showError && value === "Other" && !otherValue && (
        <p className="text-center text-xs text-red-400">Please provide details</p>
      )}
    </div>
  );
}
