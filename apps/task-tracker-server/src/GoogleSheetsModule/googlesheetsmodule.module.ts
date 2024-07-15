import { Module } from "@nestjs/common";
import { GoogleSheetsModuleService } from "./googlesheetsmodule.service";
import { GoogleSheetsModuleController } from "./googlesheetsmodule.controller";
import { GoogleSheetsModuleResolver } from "./googlesheetsmodule.resolver";

@Module({
  controllers: [GoogleSheetsModuleController],
  providers: [GoogleSheetsModuleService, GoogleSheetsModuleResolver],
  exports: [GoogleSheetsModuleService],
})
export class GoogleSheetsModuleModule {}
