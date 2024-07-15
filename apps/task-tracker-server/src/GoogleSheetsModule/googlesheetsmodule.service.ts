import { Injectable } from "@nestjs/common";

@Injectable()
export class GoogleSheetsModuleService {
  constructor() {}
  async SyncWithGoogleSheets(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
