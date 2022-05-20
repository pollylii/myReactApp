import React, { useEffect } from 'react'

function NotFount(props) {

  useEffect(() => {
    console.log(props);
  }, [props])

  return (
    <div>Not Fount Page</div>
  )
}

function myConnenct(cb, obj) {
  var value = cb()
  return (MyComponent) => {
    return (props) => {
      return (
        <div style={{ color: 'red' }}>
          <MyComponent {...value} {...props} {...obj} />
        </div>
      )
    }
  }
}

// fun obj
export default myConnenct(
  () => {
    return {
      a: 1,
      b: 2
    }
  }, {
  aa() { },
  bb() { }
}
)(NotFount)