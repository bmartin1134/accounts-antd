import React from 'react'
import { Form, Icon, Input, Label } from 'antd'

const InputField = (fieldObj) => {
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
  } = fieldObj

  return (
    <Form.item required={required !== false} error={!!error} label={defaults.showLabels && <label>{displayName}</label>}>
      <Input
        autoFocus={focusInput}
        prefix={<Icon type={{icon || iconMapper[_id] || null}} style={{ color: 'rgba(0,0,0,.25)' }} />}
        placeholder={defaults.showPlaceholders ? placeholder : ''}
        type={type}
        validateStatus={Boolean(error)}
        help={error && <Label basic color='red' pointing>{error.errStr}</Label>}
        onChange={(e) => onChange(e, _id)}
        onBlur={(e) => onChange(e, _id)}
      />
    </Form.item>
  )
}

const iconMapper = {
  username: 'user',
  email: 'mail',
  password: 'lock',
  confirmPassword: 'unlock',
  currentPassword: 'safety',
  fullName: 'info-circle'
}

export default InputField
