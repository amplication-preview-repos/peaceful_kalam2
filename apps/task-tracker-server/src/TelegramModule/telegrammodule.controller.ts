import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TelegramModuleService } from "./telegrammodule.service";
import { TaskUpdateStatusDto } from "../telegramModule/TaskUpdateStatusDto";
import { TaskCreateInputDto } from "../telegramModule/TaskCreateInputDto";

@swagger.ApiTags("telegramModules")
@common.Controller("telegramModules")
export class TelegramModuleController {
  constructor(protected readonly service: TelegramModuleService) {}

  @common.Post("/tasks")
  @swagger.ApiOkResponse({
    type: TaskCreateInputDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTask(
    @common.Body()
    body: TaskUpdateStatusDto
  ): Promise<TaskCreateInputDto> {
        return this.service.CreateTask(body);
      }

  @common.Patch("/tasks/status")
  @swagger.ApiOkResponse({
    type: TaskUpdateStatusDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateTaskStatus(
    @common.Body()
    body: TaskUpdateStatusDto
  ): Promise<TaskUpdateStatusDto> {
        return this.service.UpdateTaskStatus(body);
      }
}
