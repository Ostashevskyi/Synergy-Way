import { useCallback } from "react";

import {
  createBalancedTreeFromLeaves,
  getLeaves,
  MosaicNode,
} from "react-mosaic-component";

import Select from "./Select";
import IconButton from "./IconButton";

import { Company } from "../types/Company";

import { getUnusedCompanies } from "./utils/getUnusedCompanies";

type NavBarProps = {
  mosaicValue: MosaicNode<string>;
  setMosaicValue: React.Dispatch<React.SetStateAction<MosaicNode<string>>>;
  data: Company[];
};

const NavBar = ({ mosaicValue, setMosaicValue, data }: NavBarProps) => {
  const autoArrange = useCallback(() => {
    const leaves = getLeaves(mosaicValue);
    const balancedTree = createBalancedTreeFromLeaves(leaves);

    if (balancedTree !== null) {
      setMosaicValue(balancedTree);
    }
  }, [mosaicValue]);

  const addNewTile = useCallback(() => {
    const unusedCompanies = getUnusedCompanies(data, mosaicValue);
    if (unusedCompanies.length === 0) {
      console.warn("No unused companies available");
      return;
    }
    const newCompany = unusedCompanies[0];
    setMosaicValue((currentValue) => ({
      direction: "row",
      first: currentValue,
      second: newCompany.id!,
    }));
  }, [data, mosaicValue]);

  return (
    <div className="bg-bg_navbar flex items-center justify-between p-4 flex-col gap-4 lg:flex-row ">
      <div className="flex  items-center gap-10">
        <a
          className="text-text_main"
          href="https://github.com/nomcopter/react-mosaic"
        >
          react-mosaic <span className="text-text_secondary">v6.1.0</span>
        </a>
        <a
          className="block lg:hidden"
          href="https://github.com/nomcopter/react-mosaic"
        >
          <img
            src={"/github-mark.svg"}
            className="w-10 h-10"
            alt="github logo"
          />
        </a>
      </div>
      <div className="flex lg:gap-4 gap-3 items-center flex-col md:flex-row">
        <div className="flex gap-4 items-center">
          <label className="text-text_main">Theme:</label>
          <Select
            className="text-text_secondary p-2 w-[140px] border-2 focus:bg-focus_select border-gray-500"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              if (e.target.value === "light") {
                document.documentElement.classList.remove("dark");
              } else {
                document.documentElement.classList.remove("light");
              }
              document.documentElement.classList.add(e.target.value);
            }}
          >
            <option value={"light"}>Light</option>
            <option value={"dark"}>Dark</option>
          </Select>
        </div>
        <div className="border border-gray-500 h-5 hidden md:block" />
        <span className="text-text_main max-lg:text-nowrap">
          Example Actions:
        </span>
        <div className="flex items-center gap-2 border border-gray-500 even:border-l">
          <IconButton icon="/grid.svg" onClick={autoArrange}>
            Auto Arrange
          </IconButton>
          <IconButton icon="/arrow-top-right.svg" onClick={addNewTile}>
            Add Window To Top Right
          </IconButton>
        </div>
        <a
          className="lg:block hidden"
          href="https://github.com/nomcopter/react-mosaic"
        >
          <img
            src={"/github-mark.svg"}
            className="w-10 h-10 "
            alt="github logo"
          />
        </a>
      </div>
    </div>
  );
};

export default NavBar;
