import { Company } from "../types/Company";

type CompanyTileProps = {
  company: Company;
};

const CompanyTile = ({ company }: CompanyTileProps) => {
  const {
    ticker,
    name,
    legal_name,
    stock_exchange,
    short_description,
    long_description,
    business_address,
    business_phone_no,
    company_url,
    entity_legal_form,
    latest_filing_date,
    inc_country,
    employees,
    sector,
    first_stock_price_date,
    industry_category,
    industry_group,
    last_stock_price_date,
    legacy_sector,
    legacy_industry_category,
    legacy_industry_group,
  } = company;

  return (
    <div className="p-4 flex flex-col gap-2 ev overflow-y-scroll h-full">
      <p>
        <strong>Ticker:</strong> {ticker}
      </p>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Legal Name:</strong> {legal_name}
      </p>
      <p>
        <strong>Stock Exchange:</strong> {stock_exchange}
      </p>
      <p>
        <strong>Short Description:</strong> {short_description}
      </p>
      <p>
        <strong>Long Description:</strong> {long_description}
      </p>
      <p>
        <strong>Web:</strong> {company_url}
      </p>
      <p>
        <strong>Business Address:</strong> {business_address}
      </p>
      <p>
        <strong>Business Phone:</strong> {business_phone_no}
      </p>
      <p>
        <strong>Entity Legal Form:</strong> {entity_legal_form}
      </p>
      <p>
        <strong>Latest Filing Date:</strong> {latest_filing_date}
      </p>
      <p>
        <strong>Inc Country:</strong> {inc_country}
      </p>
      <p>
        <strong>Employees:</strong> {employees}
      </p>
      <p>
        <strong>Sector:</strong> {sector}
      </p>
      <p>
        <strong>Industry Category:</strong> {industry_category}
      </p>
      <p>
        <strong>Industry Group:</strong> {industry_group}
      </p>
      <p>
        <strong>First Stock Price Date:</strong> {first_stock_price_date}
      </p>
      <p>
        <strong>Last Stock Price Date:</strong> {last_stock_price_date}
      </p>
      <p>
        <strong>Thea Enabledtruelegacy sector:</strong> {legacy_sector}
      </p>
      <p>
        <strong>Legacy Industry Category:</strong> {legacy_industry_category}
      </p>
      <p>
        <strong>Legacy Industry Group:</strong> {legacy_industry_group}
      </p>
    </div>
  );
};

export default CompanyTile;
