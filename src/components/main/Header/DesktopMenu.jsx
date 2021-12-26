import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { links } from "./_links";
function DesktopMenu() {
  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Menus" icon={<CgMenuGridO />} />
      <MenuList>
        {links.map((menu) => (
          <MenuItem
            key={menu.name}
            as={NavLink}
            to={menu.to}
            aria-label={menu.name}
          >
            {menu.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default DesktopMenu;
