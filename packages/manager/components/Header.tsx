import { Icon, Layout, Menu } from 'antd';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';

const { Header } = Layout;

const routing: { [key: string]: string } = {
  '/': 'home',
  '/users': 'user',
  '/restaurants': 'shop',
  '/deliveries': 'shopping',
  '/charts': 'pie-chart'
};

export const CustomHeader = React.memo(() => {
  const [path, setPath] = useState<string>('/');
  const changePath = useCallback(newPath => setPath(newPath.key), []);

  return (
    <Header style={{ backgroundColor: '#FFFFFF', textAlign: 'center' }}>
      <Menu
        selectedKeys={[path]}
        style={{ lineHeight: '64px' }}
        mode={'horizontal'}
      >
        {Object.keys(routing).map(k => (
          <Menu.Item onClick={changePath} key={k}>
            <Link href={k}>
              <a>
                <Icon style={{ fontSize: 33 }} type={routing[k]} />
              </a>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </Header>
  );
});
