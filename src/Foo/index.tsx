import React from 'react';
import { Button } from 'antd';

export default ({ title }: { title: string }) => (
  <h1>
    {title} <Button type="primary">Primary111 Button</Button>
  </h1>
);
