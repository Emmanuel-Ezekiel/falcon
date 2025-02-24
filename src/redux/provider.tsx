"use client"

import type React from "react"

import { Provider } from "react-redux"
import { store } from "./store"

export function Providers({ children }: { readonly children: React.ReactNode }) {
  return <Provider store={store}>{children}</Provider>
}
