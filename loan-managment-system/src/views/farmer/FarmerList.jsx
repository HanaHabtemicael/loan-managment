import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import apiClient from '../../url/index';

const FarmerList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('credit-score/farmers');
        setData(response.data.data);
        console.log('fetched',response.data.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'FullName',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'Age',
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: 'Phone Number',
      dataIndex: 'No',
    },
    {
      title: 'Address',
      dataIndex: 'Address',
    },
    // {
    //   title: 'Years On Platform',
    //   dataIndex: 'Address',
    // },
    // {
    //   title: 'Voc Id',
    //   dataIndex: 'Address',
    // },
    {
      title: 'Land Size',
      dataIndex: 'Land_size',
    },
    {
      title: 'Main Crop Grown',
      dataIndex: 'Address',
    },
    {
      title: 'Loan Status',
      dataIndex: 'Loan_Status',
    },
    
  ];

  const onChange = (pagination, filters, sorter) => {
    console.log('Pagination:', pagination);
    console.log('Filters:', filters);
    console.log('Sorter:', sorter);
  };

  return (
    <div className='w-95 mx-6 mt-6'>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default FarmerList;