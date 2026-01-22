import FieldLabel from "@/app/components/forms/FieldLabel";
import TextArea from "@/app/components/forms/TextArea";
import CardSelect from "@/app/components/forms/CardSelect";
import StepHeader from "../StepHeader";
import { selectOptions } from "@/app/lib/constants";
import type { WaitlistFormState } from "@/app/lib/types";

export default function Step7({
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
      <StepHeader step={7} title="Engagement & Incentives" />

      <div className="space-y-6">
        <CardSelect
          label="Would you be interested in earning bonus credits through referrals?"
          options={selectOptions.referralInterest}
          value={state.referralInterest}
          onChange={(value) =>
            setState((s) => ({ ...s, referralInterest: value }))
          }
          required
          showError={showValidationErrors}
        />

        <CardSelect
          label="Would you participate in our beta testing program for additional free credits?"
          options={selectOptions.beta}
          value={state.beta}
          onChange={(value) => setState((s) => ({ ...s, beta: value }))}
          required
          showError={showValidationErrors}
        />

        <CardSelect
          label="How did you hear about MAVSCAN?"
          options={selectOptions.referral}
          value={state.referral}
          onChange={(value) => setState((s) => ({ ...s, referral: value }))}
          required
          showError={showValidationErrors}
          otherValue={state.referralOther}
          onOtherChange={(value) =>
            setState((s) => ({ ...s, referralOther: value }))
          }
        />
      </div>

      <div className="space-y-2">
        <div className="flex flex-col items-center">
          <FieldLabel>
            Any suggestions or features you&apos;d like to see in MAVSCAN?
          </FieldLabel>
        </div>
        <TextArea
          rows={3}
          value={state.wishlist}
          onChange={(e) => setState((s) => ({ ...s, wishlist: e.target.value }))}
          placeholder="Product recalls, brand transparency reports, verified seller directory..."
        />
      </div>
    </div>
  );
}
