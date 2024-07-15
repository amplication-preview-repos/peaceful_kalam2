import { Injectable } from "@nestjs/common";
import { TaskCreateInputDto } from "../telegramModule/TaskCreateInputDto";
import { TaskUpdateStatusDto } from "../telegramModule/TaskUpdateStatusDto";

@Injectable()
export class TelegramModuleService {
  constructor() {}
  async CreateTask(args: TaskCreateInputDto): Promise<TaskCreateInputDto> {
    throw new Error("Not implemented");
  }
  async UpdateTaskStatus(args: TaskUpdateStatusDto): Promise<TaskUpdateStatusDto> {
    throw new Error("Not implemented");
  }
}
