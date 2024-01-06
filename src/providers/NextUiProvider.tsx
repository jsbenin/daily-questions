"use client";

import { NextUIProvider as NextUIProviderCore } from "@nextui-org/react";
import { PropsWithChildren } from "react";

export const NextUIProvider = ({ children }: PropsWithChildren<{}>) => {
  return <NextUIProviderCore>{children}</NextUIProviderCore>;
};
