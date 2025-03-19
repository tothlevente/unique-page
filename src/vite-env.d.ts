/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REPOSITORY: string;
  readonly VITE_GITHUB_API_PATH: string;
  readonly VITE_LICENSE: string;
  readonly VITE_TOKEN: sttring;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
