import { Module } from "@nestjs/common";
import { TelegramModuleService } from "./telegrammodule.service";
import { TelegramModuleController } from "./telegrammodule.controller";
import { TelegramModuleResolver } from "./telegrammodule.resolver";

@Module({
  controllers: [TelegramModuleController],
  providers: [TelegramModuleService, TelegramModuleResolver],
  exports: [TelegramModuleService],
})
export class TelegramModuleModule {}
