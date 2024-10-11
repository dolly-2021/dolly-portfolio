import React from 'react'
import checkMarkIcon from '../assets/checkmark-dark.svg'

function SkillList({src, link, h3, p}) {
  return (
    <span>
        <img src={checkMarkIcon} alt="Checkmark Icon" />
        <p>HTML</p>
    </span>
  )
}

export default SkillList