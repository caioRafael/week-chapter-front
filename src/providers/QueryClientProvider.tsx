'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactNode } from "react";

interface QueryProviderProps {
  children: ReactNode
}

export const queryClient = new QueryClient()

export function QueryProvider(props: QueryProviderProps) {
  const {
    children
  } = props

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}
