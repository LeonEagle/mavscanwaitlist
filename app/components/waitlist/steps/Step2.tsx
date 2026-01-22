import CardMultiSelect from "@/app/components/forms/CardMultiSelect";
import CardSelect from "@/app/components/forms/CardSelect";
import StepHeader from "../StepHeader";
import { selectOptions } from "@/app/lib/constants";
import type { WaitlistFormState } from "@/app/lib/types";

export default function Step2({
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
      <StepHeader step={2} title="User Profile & Needs" />

      <div className="space-y-6">
        <CardMultiSelect
          label="What type of products are you most interested in verifying?"
          options={selectOptions.interests}
          value={state.interests}
          onChange={(value) => setState((s) => ({ ...s, interests: value }))}
          maxSelections={2}
          required
          showError={showValidationErrors}
        />

        <CardSelect
          label="How many products do you typically purchase per month in these categories?"
          options={selectOptions.purchaseFrequency}
          value={state.purchaseFrequency}
          onChange={(value) =>
            setState((s) => ({ ...s, purchaseFrequency: value }))
          }
          required
          showError={showValidationErrors}
        />

        <CardMultiSelect
          label="What's your primary concern when buying these products?"
          options={selectOptions.concern}
          value={state.concern}
          onChange={(value) => setState((s) => ({ ...s, concern: value }))}
          maxSelections={2}
          required
          showError={showValidationErrors}
        />

        <CardSelect
          label="Have you ever purchased a counterfeit or unsafe product?"
          options={selectOptions.counterfeit}
          value={state.counterfeit}
          onChange={(value) => setState((s) => ({ ...s, counterfeit: value }))}
          required
          showError={showValidationErrors}
        />
      </div>
    </div>
  );
}
