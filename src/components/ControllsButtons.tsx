import React, { useCallback, useContext } from "react";

import {
  ExpandButton,
  MosaicContext,
  MosaicNode,
  MosaicWindowContext,
  SplitButton,
} from "react-mosaic-component";

import ControlsButton from "./ControlsButton";

import { Company } from "../types/Company";

import { getUnusedCompanies } from "./utils/getUnusedCompanies";

type ControllsButtonsProps = {
  data: Company[];
  mosaicValue: MosaicNode<string>;
  setSelectedCompanies: (
    value: React.SetStateAction<Record<string, string>>
  ) => void;
  id: string;
  setMosaicValue: React.Dispatch<React.SetStateAction<MosaicNode<string>>>;
  createNode: (newId: string) => MosaicNode<string>;
};

const ControllsButtons = ({
  data,
  id,
  mosaicValue,
  setSelectedCompanies,
  createNode,
}: ControllsButtonsProps) => {
  const context = useContext(MosaicContext);
  const mosaicWindow = useContext(MosaicWindowContext);

  const handleReplaceCompany = useCallback(
    (id: string) => {
      const unusedCompanies = getUnusedCompanies(data, mosaicValue);
      if (unusedCompanies.length === 0) {
        console.warn("No unused companies available for replacement");
        return;
      }
      const newCompany = unusedCompanies[0];
      setSelectedCompanies((prev) => ({
        ...prev,
        [id]: newCompany.id!,
      }));
    },
    [data, mosaicValue]
  );

  const expandTile = useCallback(() => {
    context.mosaicActions.expand(
      mosaicWindow.mosaicWindowActions.getPath(),
      75
    );
  }, []);

  const closeTile = useCallback(() => {
    context.mosaicActions.remove(mosaicWindow.mosaicWindowActions.getPath());
  }, []);

  const splitTile = useCallback(async () => {
    const unusedCompanies = getUnusedCompanies(data, mosaicValue);

    if (unusedCompanies.length === 0) {
      console.error("No unused companies available");
      return;
    }

    const newCompanyId = unusedCompanies[0].id!;

    const newNode = createNode(newCompanyId);

    await mosaicWindow.mosaicWindowActions.split(newNode);
  }, [mosaicWindow, data, mosaicValue, createNode]);

  return (
    <div className="flex items-center">
      <ControlsButton onClick={() => handleReplaceCompany(id)}>
        <img
          src="/replace.svg"
          title="Replace Window"
          className="w-4 h-4"
          alt="Replace"
        />
      </ControlsButton>
      <ControlsButton onClick={() => splitTile()}>
        <img
          src="/split.svg"
          title="Split Window"
          className="w-4 h-4"
          alt="Split"
        />
      </ControlsButton>
      <ControlsButton onClick={() => expandTile()}>
        <img
          src="/expand.svg"
          title="Expand"
          className="w-4 h-4"
          alt="Expand"
        />
      </ControlsButton>
      <SplitButton />
      <ExpandButton />
      <ControlsButton
        onClick={() => {
          closeTile();
        }}
      >
        <img
          src="/close.svg"
          title="Close Window"
          className="w-4 h-4"
          alt="Close"
        />
      </ControlsButton>
    </div>
  );
};

export default ControllsButtons;
