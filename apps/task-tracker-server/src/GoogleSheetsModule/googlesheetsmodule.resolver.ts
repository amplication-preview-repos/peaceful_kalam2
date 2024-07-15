import * as graphql from "@nestjs/graphql";
import { GoogleSheetsModuleService } from "./googlesheetsmodule.service";

export class GoogleSheetsModuleResolver {
  constructor(protected readonly service: GoogleSheetsModuleService) {}

  @graphql.Mutation(() => String)
  async SyncWithGoogleSheets(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SyncWithGoogleSheets(args);
  }
}
