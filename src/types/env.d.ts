namespace NodeJS {
  interface ProcessEnv {
    VITE_APP_BASE_URL: string;
    VITE_APP_NODE_ENV: string;
    VITE_APP_NAME: string;
    VITE_APP_LOGGER_LEVEL: string;
    VITE_APP_CSS_SCREEN_DEBUGGER: boolean;
    VITE_APP_BACKEND_URL: string;
  }
}

interface ImportMetaEnv {
  NODE_ENV: string;
  PORT: string;
  VITE_APP_BASE_URL: string;
  VITE_APP_NODE_ENV: string;
  VITE_APP_NAME: string;
  VITE_APP_LOGGER_LEVEL: string;
  VITE_APP_CSS_SCREEN_DEBUGGER: boolean;
  VITE_APP_BACKEND_URL: string;
}
