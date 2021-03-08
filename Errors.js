import React from 'react'
import PropTypes from 'prop-types'
import message  from 'antd/lib/message';

const Errors = ({ errors }) => {
  if(errors) {
    return (
        <React.Fragment>
          {errors.map((err, i) => (message.error(err.errStr)))}

        </React.Fragment>

    )
  } else {
    return (
        <React.Fragment>
        </React.Fragment>

    )
  }
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired
}

export default Errors
