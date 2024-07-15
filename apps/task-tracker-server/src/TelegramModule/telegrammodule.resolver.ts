import * as graphql from "@nestjs/graphql";
import { TaskCreateInputDto } from "../telegramModule/TaskCreateInputDto";
import { TaskUpdateStatusDto } from "../telegramModule/TaskUpdateStatusDto";
import { TelegramModuleService } from "./telegrammodule.service";

export class TelegramModuleResolver {
  constructor(protected readonly service: TelegramModuleService) {}

  @graphql.Mutation(() => TaskCreateInputDto)
  async CreateTask(
    @graphql.Args()
    args: TaskCreateInputDto
  ): Promise<TaskCreateInputDto> {
    return this.service.CreateTask(args);
  }

  @graphql.Mutation(() => TaskUpdateStatusDto)
  async UpdateTaskStatus(
    @graphql.Args()
    args: TaskUpdateStatusDto
  ): Promise<TaskUpdateStatusDto> {
    return this.service.UpdateTaskStatus(args);
  }
}
