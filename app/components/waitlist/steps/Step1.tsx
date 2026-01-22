import FieldLabel from "@/app/components/forms/FieldLabel";
import TextInput from "@/app/components/forms/TextInput";
import StepHeader from "../StepHeader";
import type { WaitlistFormState } from "@/app/lib/types";

export default function Step1({
  state,
  setState,
  showValidationErrors,
}: {
  state: WaitlistFormState;
  setState: React.Dispatch<React.SetStateAction<WaitlistFormState>>;
  showValidationErrors: boolean;
}) {
  return (
    <div className="space-y-5">
      <StepHeader step={1} title="Essential Information" />

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2 md:col-span-2">
          <FieldLabel>Full Name</FieldLabel>
          <TextInput
            value={state.fullName}
            onChange={(e) =>
              setState((s) => ({ ...s, fullName: e.target.value }))
            }
            placeholder="Your full name"
            required
            showError={showValidationErrors}
            autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <FieldLabel>Email Address</FieldLabel>
          <TextInput
            value={state.email}
            onChange={(e) => setState((s) => ({ ...s, email: e.target.value }))}
            placeholder="you@company.com"
            type="email"
            required
            showError={showValidationErrors}
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <FieldLabel>Phone Number (optional)</FieldLabel>
          <TextInput
            value={state.phone}
            onChange={(e) => setState((s) => ({ ...s, phone: e.target.value }))}
            placeholder="+234..."
            autoComplete="tel"
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <FieldLabel>Location / Country</FieldLabel>
          <TextInput
            value={state.country}
            onChange={(e) => setState((s) => ({ ...s, country: e.target.value }))}
            placeholder="Nigeria"
            required
            showError={showValidationErrors}
            autoComplete="country-name"
          />
        </div>
      </div>
    </div>
  );
}
