"use client";

import { I18nProviderClient } from "../locales/client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

export function Providers({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) {
  const [client] = React.useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={client}>
      <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
    </QueryClientProvider>
  );
}
