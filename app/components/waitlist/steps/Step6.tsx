import FieldLabel from "@/app/components/forms/FieldLabel";
import TextInput from "@/app/components/forms/TextInput";
import CardSelect from "@/app/components/forms/CardSelect";
import StepHeader from "../StepHeader";
import { selectOptions } from "@/app/lib/constants";
import type { WaitlistFormState } from "@/app/lib/types";

export default function Step6({
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
      <StepHeader step={6} title="User Category" />

      <div className="space-y-6">
        <CardSelect
          label="Are you signing up as:"
          options={selectOptions.category}
          value={state.category}
          onChange={(value) => setState((s) => ({ ...s, category: value }))}
          required
          showError={showValidationErrors}
          otherValue={state.categoryOther}
          onOtherChange={(value) =>
            setState((s) => ({ ...s, categoryOther: value }))
          }
        />

        {state.category.toLowerCase().includes("business") && (
          <>
            <div className="space-y-2">
              <div className="flex flex-col items-center">
                <FieldLabel>What type of business do you operate?</FieldLabel>
              </div>
              <TextInput
                value={state.businessType}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    businessType: e.target.value,
                  }))
                }
                placeholder="Retail store, pharmacy, e-commerce..."
              />
            </div>

            <div className="space-y-2">
              <div className="flex flex-col items-center">
                <FieldLabel>
                  Approximately how many products would you need to verify monthly?
                </FieldLabel>
              </div>
              <TextInput
                value={state.businessMonthlyVolume}
                onChange={(e) =>
                  setState((s) => ({
                    ...s,
                    businessMonthlyVolume: e.target.value,
                  }))
                }
                placeholder="e.g. 50, 100, 500+"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
