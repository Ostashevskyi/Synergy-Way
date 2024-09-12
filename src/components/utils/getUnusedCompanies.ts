import { MosaicNode } from "react-mosaic-component";
import { Company } from "../../types/Company";

export const getUnusedCompanies = (
  data: Company[],
  value: MosaicNode<string> | null
) => {
  return data.filter((company) => !JSON.stringify(value).includes(company.id!));
};
