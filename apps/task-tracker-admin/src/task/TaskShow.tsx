import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="client" source="client" />
        <TextField label="campaign" source="campaign" />
        <TextField label="status" source="status" />
        <TextField label="responsible" source="responsible" />
        <TextField label="period" source="period" />
        <TextField label="creative" source="creative" />
        <TextField label="budget" source="budget" />
      </SimpleShowLayout>
    </Show>
  );
};
