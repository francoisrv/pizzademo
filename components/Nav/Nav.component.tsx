import React from 'react'
import NavIcon from '../NavIcon'
import NavMenu from '../NavMenu'

export type Anchor = null | HTMLElement | Element

export default function Nav() {
  const [anchorEl, setAnchorEl] = React.useState<Anchor>(null)

  function toggle(anchor: Anchor) {
    if (anchorEl) {
      setAnchorEl(null)
    } else if (anchor) {
      setAnchorEl(anchor)
    }
  }

  return (
    <>
      <NavIcon onClick={(e) => toggle(e.currentTarget)} />
      <NavMenu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
      />
    </>
  )
}
