import { createContext } from "react";
import { MosaicContext } from "react-mosaic-component";
import { MosaicKey } from "react-mosaic-component/lib/types";

export const MosaicRootContext = createContext<MosaicContext<MosaicKey> | null>(
  null
);
