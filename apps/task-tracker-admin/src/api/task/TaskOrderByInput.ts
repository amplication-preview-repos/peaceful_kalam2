import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  client?: SortOrder;
  campaign?: SortOrder;
  status?: SortOrder;
  responsible?: SortOrder;
  period?: SortOrder;
  creative?: SortOrder;
  budget?: SortOrder;
};
