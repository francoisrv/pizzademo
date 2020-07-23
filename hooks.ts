import { useMediaQuery } from 'react-responsive'

export function useIsMobile() {
  return useMediaQuery({
    query: '(max-device-width: 500px)',
  })
}
