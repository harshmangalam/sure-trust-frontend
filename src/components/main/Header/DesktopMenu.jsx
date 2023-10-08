import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { CgMenuGridO } from "react-icons/cg";
import { links } from "./_links";
function DesktopMenu() {
  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        aria-label="Menus"
        icon={<CgMenuGridO size={20} />}
      />
      <MenuList>
        {links.map((menu) => (
          <MenuItem
            key={menu.name}
            as={Link}
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
