import React from 'react'
import { Form, Input, Label } from 'antd';
import Icon from '@ant-design/icons';
import {UserOutlined} from "@ant-design/icons";
import {MailOutlined} from "@ant-design/icons";
import {LockOutlined} from "@ant-design/icons";
import {UnlockOutlined} from "@ant-design/icons";
import {SafetyOutlined} from "@ant-design/icons";
import {InfoCircleOutlined} from "@ant-design/icons";

const InputField = (props) => {
  const {
    _id,
    displayName,
    type,
    onChange,
    placeholder,
    required, // By default is true, if equals false than ignore
    icon,
    focusInput,
    error,
    defaults
  } = props

  const requiredFix = required !== false;
  const errorString = error ? error.errStr : null;

  return (
      <Form.Item
          label={defaults.showLabels ? displayName : ''}
          name={displayName}
          rules={[{ required: {requiredFix}, message: {errorString} }]}

          validateStatus={error}
      >
        <Input
            autoFocus={focusInput}
            prefix={<Icon component={icon || iconMapper[_id] || null} style={{color: "rgba(0,0,0,.25)"}} />}
            placeholder={defaults.showPlaceholders ? placeholder : ''}
            type={type}
            onChange={(e) => onChange(e, _id)}/>
      </Form.Item>



  )
}

const iconMapper = {
  username: UserOutlined,
  email: MailOutlined,
  password: LockOutlined,
  confirmPassword: UnlockOutlined,
  currentPassword: SafetyOutlined,
  fullName: InfoCircleOutlined
}

export default InputField
