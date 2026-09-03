/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.css";
declare module "*.svg";

declare module "fs";
declare module "path";
declare module "node:fs";
declare module "node:path";

declare var process: {
  env: { [key: string]: string | undefined };
  exit(code?: number): never;
  cwd(): string;
};
