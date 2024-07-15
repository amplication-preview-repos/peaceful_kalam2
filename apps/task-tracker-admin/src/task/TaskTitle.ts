import { Task as TTask } from "../api/task/Task";

export const TASK_TITLE_FIELD = "client";

export const TaskTitle = (record: TTask): string => {
  return record.client?.toString() || String(record.id);
};
