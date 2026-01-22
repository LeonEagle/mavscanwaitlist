import CardSelect from "@/app/components/forms/CardSelect";
import StepHeader from "../StepHeader";
import { selectOptions } from "@/app/lib/constants";
import type { WaitlistFormState } from "@/app/lib/types";

export default function Step5({
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
      <StepHeader step={5} title="Value Perception" />

      <div className="space-y-6">
        <CardSelect
          label="What would you consider a fair price per product scan?"
          options={selectOptions.fairPrice}
          value={state.fairPrice}
          onChange={(value) => setState((s) => ({ ...s, fairPrice: value }))}
          required
          showError={showValidationErrors}
          otherValue={state.fairPriceOther}
          onOtherChange={(value) =>
            setState((s) => ({ ...s, fairPriceOther: value }))
          }
        />

        <CardSelect
          label="Would you be willing to pay for verified product information if it helps you avoid counterfeit or unsafe products?"
          options={selectOptions.willingnessToPay}
          value={state.willingnessToPay}
          onChange={(value) =>
            setState((s) => ({ ...s, willingnessToPay: value }))
          }
          required
          showError={showValidationErrors}
        />
      </div>
    </div>
  );
}
