import React, { useState, useCallback } from "react";

import "react-mosaic-component/react-mosaic-component.css";
import {
  Mosaic,
  MosaicNode,
  MosaicWindow,
  TileRenderer,
} from "react-mosaic-component";

import NavBar from "./NavBar";
import Select from "./Select";
import CompanyTile from "./CompanyTile";
import ControllsButtons from "./ControllsButtons";

import { Company } from "../types/Company";

type CompanyMosaicProps = {
  data: Company[];
};

const CompanyMosaic: React.FC<CompanyMosaicProps> = ({ data }) => {
  const [selectedCompanies, setSelectedCompanies] = useState<
    Record<string, string>
  >(() =>
    Object.fromEntries(data.map((company) => [company.id!, company.id!]))
  );

  const [mosaicValue, setMosaicValue] = useState<MosaicNode<string>>(() => ({
    direction: "row",
    first: data[0]?.id ?? "",
    second: data[1]?.id ?? "",
  }));

  const handleMosaicChange = (newNode: MosaicNode<string> | null) => {
    setMosaicValue(newNode ?? { direction: "row", first: "", second: "" });
  };

  const handleChangeCompany = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
      const newCompanyId = e.target.value;
      setSelectedCompanies((prev) => ({
        ...prev,
        [id]: newCompanyId,
      }));
    },
    []
  );

  const createNodeFn = (newId: string): MosaicNode<string> => {
    return newId;
  };

  const renderTile: TileRenderer<string> = useCallback(
    (id, path) => {
      const selectedCompanyId = selectedCompanies[id];
      const company = data.find((company) => company.id === selectedCompanyId);

      return (
        <MosaicWindow<string>
          draggable={true}
          path={path}
          title="Company info"
          createNode={(newId: string) => createNodeFn(newId)}
          toolbarControls={
            <div className="flex flex-1 items-center justify-between">
              <Select
                className="max-w-40 text-xs px-2 py-1 font-bold shadow-sm h-[90%]"
                value={selectedCompanyId}
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  handleChangeCompany(e, id)
                }
              >
                {data.map((company) => (
                  <option key={company.id} value={company.id!}>
                    {company.name}
                  </option>
                ))}
              </Select>
              <ControllsButtons
                data={data}
                id={id}
                mosaicValue={mosaicValue}
                setSelectedCompanies={setSelectedCompanies}
                setMosaicValue={setMosaicValue}
                createNode={(newId: string) => createNodeFn(newId)}
              />
            </div>
          }
        >
          {company ? (
            <CompanyTile company={company} />
          ) : (
            <div>Company not found</div>
          )}
        </MosaicWindow>
      );
    },
    [
      data,
      selectedCompanies,
      handleChangeCompany,
      mosaicValue,
      setSelectedCompanies,
      createNodeFn,
      setMosaicValue,
    ]
  );

  return (
    <div className="h-screen">
      <NavBar
        setMosaicValue={setMosaicValue}
        mosaicValue={mosaicValue}
        data={data}
      />
      <Mosaic<string>
        value={mosaicValue}
        renderTile={renderTile}
        onChange={handleMosaicChange}
      />
    </div>
  );
};

export default CompanyMosaic;
