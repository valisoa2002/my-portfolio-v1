import { getIcon } from '../../utils/iconMap'

export default function Icon({ name, size = 20, strokeWidth = 1.8, className = '', ...props }) {
  const Component = getIcon(name)
  return <Component size={size} strokeWidth={strokeWidth} className={className} aria-hidden="true" {...props} />
}
