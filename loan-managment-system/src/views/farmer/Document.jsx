import {
    CloudUploadOutlined
  } from '@ant-design/icons';
  import { Space } from 'antd';
  
const Document=()=>{
    return(
        <div className='flex justify-end gap-4  '>
            <button className="bg-ad text-white font-bold h-10 w-60 pr-3 rounded-md"><CloudUploadOutlined className="text-black pr-3"/>Upload Document</button>
            <button className='bg-ad text-white font-bold  h-10 w-40 rounded-md'> Approve</button>
        </div>
    )
}
export default Document