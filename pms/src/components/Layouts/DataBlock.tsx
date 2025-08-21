import React from "react";

interface DataBlockProps {
  name: string;
  dataCode: string;
  description?: string;
}

const DataBlock: React.FC<DataBlockProps> = ({
  name,
  dataCode,
  description,
}) => {
  return (
    <>
      <strong>{name}</strong>
      <div>
        {" "}
        {dataCode}
        {description}
      </div>
    </>
  );
};

export default DataBlock;
