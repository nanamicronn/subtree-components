import { Icon } from '@chakra-ui/react'

export const CircleIcon = ({ ...props }) => {
  return (
    <Icon viewBox="0 0 48 48" {...props}>
      <svg width="48" height="48" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="currentColor" />
      </svg>
    </Icon>
  )
}
