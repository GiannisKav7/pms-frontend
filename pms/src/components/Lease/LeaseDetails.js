import React from 'react';
import { Descriptions, Tabs, Table } from 'antd';


const LeaseDetails = () => {
  // Sample data for lease details
  const leaseDetails = [
    { key: '1', label: 'Lease ID', children: 'L-12345' },
    { key: '2', label: 'Tenant Name', children: 'John Doe' },
  ];

  const tableData = [
    { key: '1', date: '2024-01-01', amount: '$1,200', status: 'Paid' },
  ];

  const columns = [
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Amount', dataIndex: 'amount', key: 'amount' },
  ];

  return (
    <div style={{ padding: 20 }}>
      <Descriptions title="Lease Details" bordered column={2}>
        {leaseDetails.map((detail) => (
          <Descriptions.Item key={detail.key} label={detail.label}>
            {detail.children}
          </Descriptions.Item>
        ))}
      </Descriptions>
      <Tabs defaultActiveKey="1" style={{ marginTop: 20 }}>
        <Tabs.TabPane tab="Payments" key="1">
          <Table dataSource={tableData} columns={columns} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default LeaseDetails;