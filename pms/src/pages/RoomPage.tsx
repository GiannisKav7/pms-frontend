import React from "react";
import { useParams } from "react-router-dom";
import RoomDetails from "../features/RoomDetails";

interface RoomPageParams {
  id: string;
}

const RoomPage: React.FC = () => {
  const { id } = useParams<RoomPageParams>();

  return (
    <div>
      <RoomDetails />
    </div>
  );
};

export default RoomPage;