import FieldLabel from "@/app/components/forms/FieldLabel";
import TextArea from "@/app/components/forms/TextArea";
import CardMultiSelect from "@/app/components/forms/CardMultiSelect";
import CardSelect from "@/app/components/forms/CardSelect";
import StepHeader from "../StepHeader";
import { selectOptions } from "@/app/lib/constants";
import type { WaitlistFormState } from "@/app/lib/types";

export default function Step3({
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
      <StepHeader step={3} title="Pain Points & Motivations" />

      <div className="space-y-2">
        <div className="flex flex-col items-center">
          <FieldLabel>
            What challenges do you currently face when trying to verify product
            authenticity or safety?
          </FieldLabel>
        </div>
        <TextArea
          rows={4}
          value={state.challenges}
          onChange={(e) => setState((s) => ({ ...s, challenges: e.target.value }))}
          placeholder="e.g. hard to trust online sellers, unclear ingredients..."
          required
          showError={showValidationErrors}
        />
      </div>

      <div className="space-y-6">
        <CardSelect
          label="How do you currently research products before purchasing?"
          options={selectOptions.research}
          value={state.research}
          onChange={(value) => setState((s) => ({ ...s, research: value }))}
          required
          showError={showValidationErrors}
          otherValue={state.researchOther}
          onOtherChange={(value) =>
            setState((s) => ({ ...s, researchOther: value }))
          }
        />

        <CardMultiSelect
          label="What features would be most valuable to you in MAVSCAN?"
          options={selectOptions.features}
          value={state.desiredFeatures}
          onChange={(value) =>
            setState((s) => ({ ...s, desiredFeatures: value }))
          }
          maxSelections={3}
          required
          showError={showValidationErrors}
          otherValue={state.desiredFeaturesOther}
          onOtherChange={(value) =>
            setState((s) => ({ ...s, desiredFeaturesOther: value }))
          }
        />
      </div>
    </div>
  );
}
