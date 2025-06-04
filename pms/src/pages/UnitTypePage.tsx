import React from "react";
import { useParams } from "react-router-dom";
import UnitTypeDetails from "../features/UnitTypeDetails";

interface UnitTypePageParams {
  id: string;
}

const UnitTypePage: React.FC = () => {
  const { id } = useParams<UnitTypePageParams>();

  return (
    <div>
      <UnitTypeDetails />
    </div>
  );
};

export default UnitTypePage;