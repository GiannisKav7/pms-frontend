import React from "react";
import Card from "../ui/Card";
import Table from "../ui/Table";
import DataBlock from "../Layouts/DataBlock";

const LeaseTable: React.FC = ()=>{
    
    const columns = [
        {
            header: "Lease",
            accessor: "lease",
            component: DataBlock

        },
        {
            header: "Property",
            accessor: "property"
        },
        {
            header: "Customer",
            accessor: "customer"
        },
        {
            header: "Term",
            accessor: "term",
            postfix: "months"
        },
        {
            header: "Lease Expiration",
            accessor: "leaseExpiration"
        },
        {
            header: "Annual Rent",
            accessor: "annualRent",
            postfix: "EUR"
        },
        {
            header: "Contact",
            accessor: "contact"
        }
    ];

    
    const leaseData = [
        {
            key: "L2051516",
            lease: {
                name:"Deloitte Consulting",
                dataCode: "L2051516",
                description: "Test Description"
            },
            property: "Deloitte Tower 2",
            customer: "Deloitte Consulting Audit and Tax Services - c299410",
            term: "204",
            leaseExpiration: "15/09/2029",
            annualRent: "5.014.242",
            contact: "CHILE Investments"
        }
    ]

    return(
        <Card>
            <Table columns={columns} data={leaseData}/>     
        </Card>
    );
}

export default LeaseTable;