import { Layout } from 'antd';
import React from 'react';
import { CustomHeader } from './Header';

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column'
};

export const MainLayout: React.FC = React.memo(({ children }) => (
  <Layout>
    <CustomHeader />
    <Layout>
      <Content
        style={{
          background: '#fff',
          padding: 24,
          margin: 0,
          minHeight: 280
        }}
      >
        <div style={contentStyle}>{children}</div>
      </Content>
    </Layout>
  </Layout>
));
