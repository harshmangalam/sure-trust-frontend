import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
export default function FilterCourse() {
  const [, setSearchParams] = useSearchParams();
  const filters = [
    {
      name: "Medical",
      value: "MEDICAL",
    },
    {
      name: "Non Medical",
      value: "NON MEDICAL",
    },
  ];

  const handleCategoryChange = (category) => {
    setSearchParams({ category: category });
  };

  return (
    <Menu>
      <MenuButton colorScheme="blue" as={Button} rightIcon={<FiChevronDown />}>
        Filter Category
      </MenuButton>
      <MenuList>
        {filters.map(({ name, value }) => (
          <MenuItem onClick={() => handleCategoryChange(value)}>
            {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
