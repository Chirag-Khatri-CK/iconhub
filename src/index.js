import React from 'react'
import icons from './icons/icons'

export const IconHub = ({ name, options }) => {
  const requiredIcon = icons.find((icon) => {
    return icon.iconName === name
  })
  if (!requiredIcon) return
  const IconComponent = requiredIcon.iconSrc
  IconComponent.defaultProps = {
    size: '25px',
    color: '#334155',
    stroke: '2'
  }
  return <IconComponent {...options} />
}
