import React, { useEffect, useState, useRef } from 'react';
import { Table, Input, Button,Tooltip,Select,Space,Dropdown,Menu} from 'antd';
import { FilterOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import apiClient from '../../url/index';
import { SearchOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';

const pageSizeOptions = ['1', '2', '50']; 
const FarmerList = () => {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const navigate = useNavigate();
  const searchInput = useRef(null);
  const [pageSize, setPageSize] = useState(10); 
  const [statusFilter, setStatusFilter] = useState('');

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
          ref={searchInput} // Add this line to assign the ref
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
  const pageSizeOptions = ['10', '20', '50']; // Options for the dropdown

  const handlePageSizeChange = (value) => {
    console.log('Selected page size:', value);
    setPageSize(value);
    // Update the table with the new page size
    // ...
  };

  const handleStatusFilterChange = (value) => {
    console.log('Selected status filter:', value);
    setStatusFilter(value);
    // Apply the status filter to the table
    // ...
  };

  const pageSizeSelector = (
    <Select defaultValue={pageSize.toString()} onChange={handlePageSizeChange} style={{ width: 80 }}>
      {pageSizeOptions.map((option) => (
        <Option key={option} value={option}>
          {option} rows
        </Option>
      ))}
    </Select>
  );

  const statusFilterSelector = (
    <Select defaultValue={statusFilter} onChange={handleStatusFilterChange} style={{ width: 120 }}>
      <Option value="">All Status</Option>
      <Option value="active">Active</Option>
      <Option value="inactive">Inactive</Option>
    </Select>
  );
  const handlePageSizeSelect = (pageSize) => {
    console.log('Selected page size:', pageSize);
    // Update the table with the new page size
    // ...
  };

  const pageSizeMenu = (
    <Menu onClick={({ key }) => handlePageSizeSelect(key)}>
      {pageSizeOptions.map((option) => (
        <Menu.Item key={option}>{option} rows</Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="w-95 mx-6 mt-6">
      <Table
        columns={columns}
        
        title={() => (
          <div>
          <Tooltip placement="topRight" title="Search">
          <Dropdown overlay={pageSizeMenu} trigger={['click']}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          10 rows
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
            </Tooltip>
            <Tooltip placement="topLeft" title={`Rows per Page: ${pageSizeSelector}`}>
        <input type="text" placeholder="Search for farmer..." className=" focus:outline-none" />

            </Tooltip>
            <Tooltip placement="topRight" title={`Status Filter: ${statusFilterSelector}`}>
            </Tooltip>
            </div>
        )}  
          
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