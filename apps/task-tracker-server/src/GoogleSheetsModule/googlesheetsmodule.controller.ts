import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { GoogleSheetsModuleService } from "./googlesheetsmodule.service";

@swagger.ApiTags("googleSheetsModules")
@common.Controller("googleSheetsModules")
export class GoogleSheetsModuleController {
  constructor(protected readonly service: GoogleSheetsModuleService) {}

  @common.Post("/sync/google-sheets")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SyncWithGoogleSheets(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SyncWithGoogleSheets(body);
      }
}
