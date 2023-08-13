import { Select } from "@chakra-ui/react/";
import { useSearchParams } from "react-router-dom";
export default function FilterCourse() {
  const [searchParams, setSearchParams] = useSearchParams();
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

  const handleCategoryChange = (ev) => {
    const category = ev.target.value;
    setSearchParams({ category: category });
  };

  return (
    <Select
      rounded={"full"}
      maxW={["full", "full", "xs"]}
      onChange={handleCategoryChange}
      value={searchParams.get("category")}
    >
      {filters.map(({ name, value }) => (
        <option key={name} value={value}>
          {name}
        </option>
      ))}
    </Select>
  );
}
