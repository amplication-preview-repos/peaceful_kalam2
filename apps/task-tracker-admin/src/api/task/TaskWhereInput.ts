import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type TaskWhereInput = {
  id?: StringFilter;
  client?: StringNullableFilter;
  campaign?: StringNullableFilter;
  status?: "Option1";
  responsible?: StringNullableFilter;
  period?: StringNullableFilter;
  creative?: StringNullableFilter;
  budget?: FloatNullableFilter;
};
