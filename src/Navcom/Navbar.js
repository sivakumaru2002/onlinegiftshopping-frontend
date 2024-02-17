import React, { useState } from 'react';
import './Navbar.css'; 
import { AudioOutlined } from '@ant-design/icons';
import { Input} from 'antd';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1677ff',
      }}
    />
  );

    const navigate = useNavigate();
    
    const [option, setOption] = useState('');

    function onSearch() {
        console.log(`${option}`);
        navigate('../Search', { replace: true, state: { name:`${option}` } });
    }

    

    return (
        <nav className="navbar">
            <h1>Online gift Shopping</h1>
            <Search
      placeholder="TYPE DOLL,TOY,or MUG"
      enterButton="Search"
      size="medium"
      style={{ width: 500 }}
      suffix={suffix}
      onChange={e => setOption(e.target.value)}
      onSearch={onSearch}
    />
        </nav>
    );
}

export default Navbar;