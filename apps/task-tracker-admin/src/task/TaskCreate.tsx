import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="client" source="client" />
        <TextInput label="campaign" source="campaign" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="responsible" source="responsible" />
        <TextInput label="period" source="period" />
        <TextInput label="creative" multiline source="creative" />
        <NumberInput label="budget" source="budget" />
      </SimpleForm>
    </Create>
  );
};
