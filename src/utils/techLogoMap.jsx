import {
  SiApacheairflow,
  SiPostgresql,
  SiPython,
  SiReact,
} from 'react-icons/si'

export const techLogoMap = {
  react: SiReact,
  python: SiPython,
  postgresql: SiPostgresql,
  airflow: SiApacheairflow

}

export function getTechLogo(name) {
  return techLogoMap[String(name || '').toLowerCase()] || null
}
