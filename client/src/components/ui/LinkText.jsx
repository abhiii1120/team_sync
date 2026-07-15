import React from 'react'

const LinkText = ({href , label}) => {
  return (
    <a
              href={href}
              className="text-indigo-400 font-medium hover:underline"
            >
              {label}
            </a>
  )
}

export default LinkText