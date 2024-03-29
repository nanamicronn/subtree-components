import { Icon } from '@chakra-ui/react'

export const WarningIcon = ({ ...props }) => {
  return (
    <Icon viewBox={'0 0 48 48'} {...props}>
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
        <path
          fill="currentColor"
          d="M24.05 24.5ZM1.75 42.15 24 3.7 46.25 42.15ZM22.7 30.6H25.7V19.5H22.7ZM24.2 36.15Q24.85 36.15 25.3 35.675Q25.75 35.2 25.75 34.55Q25.75 33.9 25.3 33.475Q24.85 33.05 24.2 33.05Q23.55 33.05 23.1 33.5Q22.65 33.95 22.65 34.6Q22.65 35.25 23.1 35.7Q23.55 36.15 24.2 36.15ZM7.45 38.85H40.55L24 10.25Z"
        />
      </svg>
    </Icon>
  )
}
