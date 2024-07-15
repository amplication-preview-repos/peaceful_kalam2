export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  client: string | null;
  campaign: string | null;
  status?: "Option1" | null;
  responsible: string | null;
  period: string | null;
  creative: string | null;
  budget: number | null;
};
