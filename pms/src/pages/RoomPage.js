import React from 'react';
import { useParams } from 'react-router-dom';
import RoomDetails from '../features/RoomDetails';

const RoomPage = () => {
  const { id } = useParams();  // Get lease ID from the URL

  return (
    <div>
      <RoomDetails />
    </div>
  );
};

export default RoomPage;