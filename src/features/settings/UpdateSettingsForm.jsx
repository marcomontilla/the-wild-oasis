import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Spinner from "../../ui/Input";
import { useSettings } from "./useSettings";
import useUpdateSetting from "./useUpdateSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minBookingLength,
      maxBookingLenght,
      maxGuestPerBooking,
      breakfastPrice,
    } = {} /* Use this to initialized it from here */,
  } = useSettings();

  const { isUpdating, updateSetting } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;

    if (!value) return;

    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          // disabled={isUpdating}
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, 'minBookingLength')}
        />
      </FormRow>

      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          // disabled={isUpdating}
          id="max-nights"
          defaultValue={maxBookingLenght}
          onBlur={(e) => handleUpdate(e, 'maxBookingLenght')}
        />
      </FormRow>

      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          // disabled={isUpdating}
          id="max-guests"
          defaultValue={maxGuestPerBooking}
          onBlur={(e) => handleUpdate(e, 'maxGuestPerBooking')}
        />
      </FormRow>

      <FormRow label="Breakfast price">
        <Input
          type="number"
          // disabled={isUpdating}
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handleUpdate(e, 'breakfastPrice')}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
