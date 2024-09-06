import React from "react"
import { Link } from "gatsby" // Link is for internal links only
import InvertedLogo from "../../images/logo-inverted.svg"
import CloseButton from "../../images/close-btn.svg"
import { Overlay } from "./OverlayMenu.styles"
import { useMenuQuery } from "../../hooks/useMenuQuery"

const OverlayMenu = ({ menuopen, callback }) => {
  const { menu } = useMenuQuery()

  return (
    <Overlay menuopen={menuopen}>
      {" "}
      {/* opacity: ${props => (props.menuopen ? '1' : '0')}; transform: ${props =>
    props.menuopen ? 'translateX(0%)' : 'translateX(-100%)'}; - dynamic styles thanks to using props*/}
      <div className="inner">
        <img className="invertedLogo" src={InvertedLogo} alt="white-logo" />
        <ul className="overlayMenu">
          {menu.menuItems.nodes.map(item =>
            !item.parentId ? (
              <li key={item.id}>
                <Link to={item.url} activeClassName="overlayActive">
                  {item.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
