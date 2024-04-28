import React, { useEffect, useState,useRef } from 'react';
import { Table, Input, Button, Space } from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { Link,useNavigate} from 'react-router-dom';
import apiClient from '../../url/index';

const FarmerList = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const navigate = useNavigate();
  const searchInput = useRef(null); 


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.get('credit-score/farmers');
        setData(response.data.data);
        console.log('fetched', response.data.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getColumnSearchProps = (dataIndex, displayName) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          placeholder={`Search ${displayName}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<FilterOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => <FilterOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
      onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text, record) =>
      searchedColumn === dataIndex ? (
        <span style={{ fontWeight: 'bold' }}>{text}</span>
      ) : (
        <Link to={`/farmerinformation/${record.id}`}>{text}</Link>
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };
  const handleRowClick = (record) => {
    console.log('Row clicked:', record);
    navigate(`/farmerinformation/${record.id}`);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'FullName',
      ...getColumnSearchProps('Name', 'FullName'),
      render: (text, record) => (
        <Link to={`/farmer/farmerinformation/${record.id}`} style={{ color: 'blue' }}>
          {text}
        </Link>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'Age',
      sorter: (a, b) => a.Age - b.Age,
    },
    {
      title: 'Phone Number',
      dataIndex: 'No',
      ...getColumnSearchProps('No', 'Phone Number'),
    },
    {
      title: 'Address',
      dataIndex: 'Address',
      ...getColumnSearchProps('Address', 'Address'),
    },
    {
      title: 'Land Size',
      dataIndex: 'Land_size',
      ...getColumnSearchProps('Land_size', 'Land Size'),
    },
    // {
    //   title: 'Main Crop Grown',
    //   dataIndex: 'Main_Crop',
    //   ...getColumnSearchProps('Main_Crop', 'Main Crop Grown'),
    // },
    {
      title: 'Loan Status',
      dataIndex: 'Loan_Status',
      ...getColumnSearchProps('Loan_Status', 'Loan Status'),
    },
  ];

  const onChange = (pagination, filters, sorter) => {
    console.log('Pagination:', pagination);
    console.log('Filters:', filters);
    console.log('Sorter:', sorter);
  };

  return (
    <div className="w-95 mx-6 mt-6">
      <Table
        columns={columns}
        title={() => 'Header'}
        dataSource={data}
        onChange={onChange}
        onRow={(record) => ({
          onClick: () => {
            handleRowClick(record);
          },
        })}
        rowKey={(record) => record.id}
      
      />
    </div>
  );
};

export default FarmerList;