import { defineCloudflareConfig } from "@opennextjs/cloudflare";

const config = defineCloudflareConfig({});
(config as any).buildCommand = "npx next build";

export default config;
