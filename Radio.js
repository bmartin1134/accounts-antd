import React from 'react'
import { Form, Radio } from 'antd'

class RadioField extends React.Component {

  componentDidMount () {
    const {
      _id,
      options,
      onChange
    } = this.props

    const defaultOption = options.filter(o => o.default)[0]
    if (defaultOption) {

      // let parent know that this field has a default value
      onChange(defaultOption.value, _id)
    }
  }

  render () {
    const {
      _id,
      values,
      displayName,
      options,
      required,
      error,
      defaults
    } = this.props

    return (
      <Form.item required={required !== false} error={error ? true : false} label={defaults.showLabels && <label>{displayName}</label>}>



        <Radio.Group>

          {options.map((option, i) => (
            <Radio
                value={option.value}
                checked={values[_id] === option.value}
                onChange={this.handleChange}
              >{option.text}</Radio>

          ))}


        </Radio.Group>

      </Form.Field>
    )
  }

  handleChange = (e, { value }) => {
    const {
      _id,
      onChange
    } = this.props

    onChange(value, _id)
  }
}

RadioField.defaultProps = {
  type: 'text'
}

export default RadioField
