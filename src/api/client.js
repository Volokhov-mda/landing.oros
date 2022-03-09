import { createClient } from "react-fetching-library";

export const client = createClient({
  requestInterceptors: [],
  responseInterceptors: [],
});
