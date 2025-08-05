import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Layouts/Sidebar";
import { initialUnitDetails, type Unit } from "../data/unitDetails";
import UnitBasicInfoBar from "../components/Unit/UnitBasicInfoBar";
import UnitOverview from "../components/Unit/UnitOverview";
import styles from "./UnitDetails.module.css";
import { AiOutlineHome, AiOutlineContacts, AiOutlineUser, AiOutlineInfoCircle, AiOutlineDashboard, AiOutlineSetting } from 'react-icons/ai';
import ContactsTable from "../components/Tables/ContactsTable";
import OccupancyInfoTable from "../components/Tables/OccupancyInfoTable";
import RoomsTotalInfoTable from "../components/Tables/RoomsTotalInfoTable";
import RoomsTable from "../components/Tables/RoomsTable";
import UserDefinedFieldsTable from "../components/Tables/UserDefinedFieldsTable";

const UnitDetails: React.FC = () => {

    const items = [
        { label: "Overview", path: `/unit/${initialUnitDetails.unitCode}`, icon: AiOutlineDashboard },
        { label: "Occupancy Information", path: `/unit/${initialUnitDetails.unitCode}/occupancyinfo`, icon: AiOutlineUser },
        { label: "Room Total Information", path: `/unit/${initialUnitDetails.unitCode}/roomtotalinfo`, icon: AiOutlineInfoCircle },
        { label: "Rooms", path: `/unit/${initialUnitDetails.unitCode}/rooms`, icon: AiOutlineHome },
        { label: "User Defined Fields", path: `/unit/${initialUnitDetails.unitCode}/userdefinedfields`, icon: AiOutlineSetting },
        { label: "Contacts", path: `/unit/${initialUnitDetails.unitCode}/contacts`, icon: AiOutlineContacts },
    ];

    const [unitDetails, _setUnitDetails] = useState<Unit>(initialUnitDetails);
    
    return (
        <>
            <div className={styles.header}>
                <UnitBasicInfoBar unitBarDetails={{
                    name: unitDetails.name,
                    propertyCode: unitDetails.propertyCode,
                    buildingCode: unitDetails.buildingCode,
                    floorCode: unitDetails.floorCode,
                    unitCode: unitDetails.unitCode,
                    weeklyRent: unitDetails.weeklyRent,
                    area: unitDetails.area,
                    status: unitDetails.status,
                }} />
            </div>
            
            <div className={styles.content}>
                <Sidebar items={items}/>
                <Routes>
                    <Route 
                        index
                        element={<UnitOverview unitDetails={unitDetails} />}
                    />
                    <Route
                        path="occupancyinfo"
                        element={ <OccupancyInfoTable /> }
                    />
                    <Route
                        path="roomtotalinfo"
                        element={ <RoomsTotalInfoTable /> }
                    />
                    <Route
                        path="rooms"
                        element={ <RoomsTable /> }
                    />
                    <Route
                        path="userdefinedfields"
                        element={ <UserDefinedFieldsTable /> }
                    />
                    <Route
                        path="contacts"
                        element={ <ContactsTable /> }
                    />
                    
                </Routes>
            </div>
        </>
    );
};

export default UnitDetails;