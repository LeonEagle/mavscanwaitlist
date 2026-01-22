export default function TextInput({
  showError,
  required,
  value,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  showError?: boolean;
}) {
  const hasError = required && showError && !value;
  return (
    <div className="space-y-1">
      <input
        {...props}
        value={value}
        className={[
          "w-full rounded-lg border px-4 py-3 text-white",
          "outline-none ring-lime-400/40 transition focus:ring-2",
          hasError
            ? "border-red-400 bg-white/5 focus:border-red-400"
            : "border-white/10 bg-white/5 focus:border-lime-300",
          props.className ?? "",
        ].join(" ")}
      />
      {hasError && (
        <p className="text-center text-xs text-red-400">This field is required</p>
      )}
    </div>
  );
}
