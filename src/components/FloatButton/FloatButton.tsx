import React from 'react';
import { FloatButton as AntdFloatButton, ButtonProps } from 'antd';

export const FloatButton: React.FC<ButtonProps> = ({ onClick }) => (
    <>
        <AntdFloatButton description={'Показать превью'} type="primary" style={{ width: 100, height:100 }} onClick={onClick}/>
    </>
);

