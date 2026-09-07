import Icon from './Icon'

export default function TechBadge({ tech, icon, compact = false }) {
  const label = typeof tech === 'string' ? tech : tech?.name
  const iconName = icon || (typeof tech === 'object' ? tech?.icon : null)
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-base-content/10 bg-base-200/70 text-base-content/75 ${compact ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm'}`}>
      {iconName && <Icon name={iconName} size={compact ? 13 : 15}  />}
      {label}
    </span>
  )
}
