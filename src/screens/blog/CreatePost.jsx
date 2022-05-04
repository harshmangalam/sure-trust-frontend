import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Stack,
  Textarea,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import PostPreview from "../../components/blog/PostPreview";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { RiAddLine } from "react-icons/ri";
import usePoster from "../../hooks/blog/usePoster";
import useTags from "../../hooks/blog/useTags";

const schema = yup.object({
  title: yup.string().required("Post title should not be empty"),
  body: yup.string().required("Post body should not be empty"),
  poster: yup.string(),
});

export default function CreatePost() {
  const { handleFileChange, posterUri } = usePoster();
  const { tag, handleChangeTag, tags, addTag, removeTag } = useTags();
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async () => {};
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={8}>
      {/* create post section  */}
      <GridItem>
        <Box
          bg={useColorModeValue("white", "gray.700")}
          py="8"
          px={{ base: "4", md: "10" }}
          shadow="md"
          rounded="md"
          pos={"sticky"}
          top={8}
        >
          <Stack as="form" onSubmit={handleSubmit(onSubmit)} spacing="6">
            <FormControl isInvalid={errors.title}>
              <FormLabel htmlFor="title">Post Title</FormLabel>
              <Input
                id="title"
                name="title"
                type="text"
                {...register("title")}
              />
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.body}>
              <FormLabel htmlFor="body">Post Body</FormLabel>
              <Textarea id="body" name="body" {...register("body")} rows={6} />
              <FormErrorMessage>{errors.body?.message}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="title">Add Tags</FormLabel>
              <InputGroup>
                <Input
                  value={tag}
                  onChange={handleChangeTag}
                  id="tag"
                  name="tag"
                  type="text"
                  pr={2}
                />
                <InputRightElement>
                  <Tooltip label="Click to add tag">
                    <IconButton
                      colorScheme={"twitter"}
                      onClick={() => addTag(tag)}
                      rounded={"full"}
                      size="sm"
                      icon={<RiAddLine size={20} />}
                    />
                  </Tooltip>
                </InputRightElement>
              </InputGroup>
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            </FormControl>

            {/* poster  */}
            <FormControl>
              <FormLabel htmlFor="body">Add Poster</FormLabel>
              <Input
                type={"file"}
                id="poster"
                name="poster"
                {...register("poster")}
                onChange={handleFileChange}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
              size="lg"
              fontSize="md"
            >
              Create Post
            </Button>
          </Stack>
        </Box>
      </GridItem>

      {/* post preview  */}
      <GridItem>
        <PostPreview
          title={watch("title")}
          poster={posterUri}
          tags={tags}
          removeTag={removeTag}
        />
      </GridItem>
    </SimpleGrid>
  );
}
