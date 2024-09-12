import IconButton from "./IconButton";
import Select from "./Select";

type NavBarProps = {
  autoArrange: () => void;
  addNewTile: () => void;
};

const NavBar = ({ autoArrange, addNewTile }: NavBarProps) => {
  return (
    <div className="bg-slate-600 flex items-center justify-between p-4">
      <div className="">
        <div className="">
          <a
            className="text-white"
            href="https://github.com/nomcopter/react-mosaic"
          >
            react-mosaic <span className="text-dark_grey">v6.1.0</span>
          </a>
        </div>
      </div>
      <div className={"flex gap-4 items-center"}>
        <label className="text-white">Theme:</label>
        <Select className="text-dark_grey p-2 w-[140px] border-2 focus:bg-slate-800 border-gray-500">
          <option>Blueprint</option>
          <option>Blueprint Dark</option>
          <option>None</option>
        </Select>
        <div className="border border-gray-500 h-5" />
        <span className="text-white">Example Actions:</span>
        <div className="flex items-center gap-2 border border-gray-500 even:border-l">
          <IconButton icon="/grid.svg" onClick={autoArrange}>
            Auto Arrange
          </IconButton>
          <IconButton icon="/arrow-top-right.svg" onClick={addNewTile}>
            Add Window To Top Right
          </IconButton>
        </div>
        <a
          className="github-link"
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
