"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import store from "../store";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  );
}
