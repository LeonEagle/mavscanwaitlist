export default function TextArea({
  showError,
  required,
  value,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  showError?: boolean;
}) {
  const hasError = required && showError && !value;
  return (
    <div className="space-y-1">
      <textarea
        {...props}
        value={value}
        className={[
          "w-full rounded-lg border px-4 py-3 text-white",
          "outline-none transition focus:ring-2 focus:ring-lime-400/40",
          hasError
            ? "border-red-400 bg-[#0f172b]/70 focus:border-red-400"
            : "border-white/10 bg-[#0f172b]/70 focus:border-lime-300",
          props.className ?? "",
        ].join(" ")}
      />
      {hasError && (
        <p className="text-center text-xs text-red-400">This field is required</p>
      )}
    </div>
  );
}
