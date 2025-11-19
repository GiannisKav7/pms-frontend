import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { type Owner, initialOwnerDetails } from '../../data/ownerDetails';
import { AiOutlineUser, AiOutlineHome, AiOutlineFileText, AiOutlineInfoCircle, AiOutlineCreditCard, AiOutlineContacts } from 'react-icons/ai';
import Sidebar from '../Layouts/Sidebar';
import OwnerBasicInfoBar from './OwnerBasicInfoBar';
import OwnerOverview from './OwnerOverview';
import styles from './OwnerDetails.module.css'
import { TaxInfoTable } from '../Tables/TaxInfoTable';
import ContactsTable from '../Tables/ContactsTable';
import PropertiesTable from '../Tables/PropertiesTable';
import OtherInformationTable from '../Tables/OtherInformationTable';
import PaymentInfoTable from '../Tables/PaymentInfoTable';

const OwnerDetails: React.FC = () =>{
    const items = [
        { label: "Overview", path: "/owner/" + initialOwnerDetails.ownerCode, icon: AiOutlineUser },
        { label: "Properties", path: "/owner/" + initialOwnerDetails.ownerCode + "/properties", icon: AiOutlineHome },
        { label: "Tax Information", path: "/owner/" + initialOwnerDetails.ownerCode + "/taxinformation", icon: AiOutlineFileText},
        { label: "Other Information", path: "/owner/" + initialOwnerDetails.ownerCode + "/otherinformation", icon: AiOutlineInfoCircle },
        { label: "Payment Info", path: "/owner/" + initialOwnerDetails.ownerCode + "/paymentinfo", icon: AiOutlineCreditCard },
        { label: "Contacts", path: "/owner/" + initialOwnerDetails.ownerCode + "/contacts", icon: AiOutlineContacts }
    ];
    
    const [ownerDetails, _setOwnerDetails] = useState<Owner>(initialOwnerDetails);

    return(
        <>
            <OwnerBasicInfoBar ownerDetails={{
                ownerCode: ownerDetails.ownerCode,
                name1: ownerDetails.name1,
                name2: ownerDetails.name2,
                emailAddress: ownerDetails.emailAddress
            }}
            />

            <div className={styles.content}>
                <Sidebar items={items}/>
                <Routes>
                    <Route 
                        index
                        element={<OwnerOverview ownerDetails={ownerDetails}/>}
                    />
                    <Route
                        path="properties"
                        element={<PropertiesTable/>}
                    />
                    <Route
                        path="taxinformation"
                        element={<TaxInfoTable/>}
                    />
                    <Route
                        path="otherinformation"
                        element={<OtherInformationTable/>}
                    />
                    <Route
                        path="paymentinfo"
                        element={<PaymentInfoTable/>}
                    />
                    <Route
                        path="contacts"
                        element={<ContactsTable/>}
                    />
                </Routes>
            </div>
        </>
    )
}
export default OwnerDetails;