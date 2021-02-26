import React from 'react';
import  Form  from 'antd/lib/form'

const FormField = (props) => {

    const {
        _id,
        onSubmit,
        children,
        classes
    } = props;

    const [form] = Form.useForm();

    return (
        <Form
            form={form}
            onSubmit={onSubmit}
            layout="vertical">
            {children}
        </Form>
    )

}

export default FormField