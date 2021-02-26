import React from 'react'
import PropTypes from 'prop-types'
import  message  from 'antd/lib/message';

const Errors = ({ errors }) => {
  return (
    <script type="text/javascript">
      {errors.map((err, i) => (message.error(err.errStr)))}

    </script>

  )
}

Errors.propTypes = {
  errors: PropTypes.array.isRequired
}

export default Errors
