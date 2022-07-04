import type { IconProps as PhosphorIconProps } from 'phosphor-react'
import { Icon, type IconProps } from '@chakra-ui/react'

interface AppIconProps extends IconProps {
  icon: React.ForwardRefExoticComponent<
    PhosphorIconProps & React.RefAttributes<SVGSVGElement>
  >
}

const AppIcon = ({ icon, ...props }: AppIconProps) => {
  return <Icon as={icon} width="5" height="5" {...props} />
}

export default AppIcon
