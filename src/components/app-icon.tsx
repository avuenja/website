import type { IconProps } from 'phosphor-react'
import { Icon } from '@chakra-ui/react'

interface AppIconProps {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
}

const AppIcon = (props: AppIconProps) => {
  return <Icon as={props.icon} width="5" height="5" />
}

export default AppIcon
