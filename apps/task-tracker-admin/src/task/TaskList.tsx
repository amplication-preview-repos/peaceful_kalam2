import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TaskList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Tasks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
