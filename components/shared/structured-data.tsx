type StructuredDataValue = Record<string, unknown> | Array<Record<string, unknown>>;

type StructuredDataProps = {
  data: StructuredDataValue;
};

const StructuredData = ({ data }: StructuredDataProps) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default StructuredData;
