// StoreProvider.tsx
import React from "react";
import { StoreProvider as EasyPeasyStoreProvider } from "easy-peasy";
import { store } from "./store";

const StoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <EasyPeasyStoreProvider store={store}>{children}</EasyPeasyStoreProvider>
  );
};

export default StoreProvider;
