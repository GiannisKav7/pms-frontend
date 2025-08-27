import Card from "../ui/Card";
import Table from "../ui/Table";
import DataBlock from "../Layouts/DataBlock";

const LeaseTable: React.FC = () => {
  const columns = [
    {
      header: "Lease",
      accessor: "lease",
      component: DataBlock,
    },
    {
      header: "Property",
      accessor: "property",
      component: DataBlock,
    },
    {
      header: "Customer",
      accessor: "customer",
      component: DataBlock,
    },
    {
      header: "Term",
      accessor: "term",
      postfix: "months",
    },
    {
      header: "Lease Expiration",
      accessor: "leaseExpiration",
    },
    {
      header: "Annual Rent",
      accessor: "annualRent",
      postfix: "EUR",
    },
    {
      header: "Contact",
      accessor: "contact",
    },
  ];

  const leaseData = [
    {
      key: "L2051516",
      lease: {
        name: "Deloitte Consulting",
        dataCode: "L2051516",
        link: "/lease/L2051516",
        description: "Test Description",
      },
      property: {
        name: "Deloitte Tower 2",
        dataCode: "P5125166",
        link: "/property/P5125166",
      },
      customer: {
        name: "Deloitte Consulting Audit and Tax Services",
        dataCode: "C299410",
        link: "/customer/C299410",
      },
      term: "204",
      leaseExpiration: "15/09/2029",
      annualRent: "5.014.242",
      contact: "CHILE Investments",
    },
  ];

  return (
    <Card>
      <Table columns={columns} data={leaseData} />
    </Card>
  );
};

export default LeaseTable;
