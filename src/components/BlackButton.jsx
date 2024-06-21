import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const BlackButton = ({label, style={}}) => {
  return (
    <button className="button" style={style}>
        {label} <MdArrowOutward />
    </button>
  )
}

export default BlackButton