/// <reference types="react" />
/// <reference types="react-dom" />

declare module "*.css";
declare module "*.svg";

declare module "http";
declare module "fs";
declare module "path";
declare module "url";
declare module "os";
declare module "node:http";
declare module "node:fs";
declare module "node:path";
declare module "node:url";
declare module "node:os";

declare var process: {
  env: { [key: string]: string | undefined };
  exit(code?: number): never;
  cwd(): string;
};
