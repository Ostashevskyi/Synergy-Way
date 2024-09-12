import React, { createContext, useRef } from "react";
import {
  MosaicWindowContext,
  MosaicWindowActions,
} from "react-mosaic-component";

// Create the context with an initial value of null
export const MosaicWContext = createContext<MosaicWindowContext | null>(null);

const MosaicContextWindowProvider: React.FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // Create a ref to store the MosaicWindowActions
  const mosaicWindowActionsRef = useRef<MosaicWindowActions | null>(null);

  // Optionally initialize the mosaicWindowActionsRef.current if needed.
  // mosaicWindowActionsRef.current = { ... };

  // Provide the context value
  const contextValue: MosaicWindowContext | null = {
    blueprintNamespace: "", // Set as needed
    mosaicWindowActions: mosaicWindowActionsRef.current!,
  };

  return (
    <MosaicWContext.Provider value={contextValue}>
      {children}
    </MosaicWContext.Provider>
  );
};

export default MosaicContextWindowProvider;
