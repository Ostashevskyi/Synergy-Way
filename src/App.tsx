import CompanyMosaic from "./components/CompanyMosaic";
import data from "../json/companies-lookup.json";
import {
  MosaicContext,
  MosaicRootActions,
  MosaicWindowActions,
  MosaicWindowContext,
} from "react-mosaic-component";
import { MosaicKey } from "react-mosaic-component/lib/types";
import { createContext, useRef } from "react";

const App = () => {
  const MosaicRContext = createContext<MosaicContext<MosaicKey> | null>(null);
  const MosaicWContext = createContext<MosaicWindowContext | null>(null);

  const mosaicActionsRef = useRef<MosaicRootActions<MosaicKey>>();
  const mosaicWindowActionsRef = useRef<MosaicWindowActions>();
  return (
    <>
      <MosaicRContext.Provider
        value={{
          mosaicActions: mosaicActionsRef.current!,
          mosaicId: "",
          blueprintNamespace: "",
        }}
      >
        <MosaicWContext.Provider
          value={{
            blueprintNamespace: "",
            mosaicWindowActions: mosaicWindowActionsRef.current!,
          }}
        >
          <CompanyMosaic data={data} />
        </MosaicWContext.Provider>
      </MosaicRContext.Provider>
    </>
  );
};

export default App;
