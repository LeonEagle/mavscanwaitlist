import CardSelect from "@/app/components/forms/CardSelect";
import StepHeader from "../StepHeader";
import { selectOptions } from "@/app/lib/constants";
import type { WaitlistFormState } from "@/app/lib/types";

export default function Step4({
  state,
  setState,
  showValidationErrors,
}: {
  state: WaitlistFormState;
  setState: React.Dispatch<React.SetStateAction<WaitlistFormState>>;
  showValidationErrors: boolean;
}) {
  return (
    <div className="space-y-6">
      <StepHeader step={4} title="Usage & Credit System" />

      <div className="space-y-6">
        <CardSelect
          label="How many product scans would you estimate needing per month?"
          options={selectOptions.scansPerMonth}
          value={state.scansPerMonth}
          onChange={(value) => setState((s) => ({ ...s, scansPerMonth: value }))}
          required
          showError={showValidationErrors}
        />

        <CardSelect
          label="Which credit package would likely suit your needs best?"
          options={selectOptions.creditPackage}
          value={state.creditPackage}
          onChange={(value) => setState((s) => ({ ...s, creditPackage: value }))}
          required
          showError={showValidationErrors}
        />

        <CardSelect
          label="Would you prefer:"
          options={selectOptions.paymentPreference}
          value={state.paymentPreference}
          onChange={(value) =>
            setState((s) => ({ ...s, paymentPreference: value }))
          }
          required
          showError={showValidationErrors}
        />

        <CardSelect
          label="How important is product verification to your purchasing decisions?"
          options={selectOptions.verificationImportance}
          value={state.verificationImportance}
          onChange={(value) =>
            setState((s) => ({ ...s, verificationImportance: value }))
          }
          required
          showError={showValidationErrors}
        />
      </div>
    </div>
  );
}
