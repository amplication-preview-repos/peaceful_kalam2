export type TaskCreateInput = {
  client?: string | null;
  campaign?: string | null;
  status?: "Option1" | null;
  responsible?: string | null;
  period?: string | null;
  creative?: string | null;
  budget?: number | null;
};
