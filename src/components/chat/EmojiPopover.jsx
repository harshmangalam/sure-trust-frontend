import {
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { BsEmojiSunglasses } from "react-icons/bs";
import Picker, { SKIN_TONE_MEDIUM_DARK } from "emoji-picker-react";
export default function EmojiPopover({ handleEmjojiAdd }) {
  const onEmojiClick = (_, emojiObject) => {
    handleEmjojiAdd(emojiObject.emoji);
  };

  return (
    <Popover defaultIsOpen={false} isLazy lazyBehavior="unmount">
      <PopoverTrigger>
        <IconButton
          title="Emoji picker"
          colorScheme="twitter"
          isRound
          variant="ghost"
          size={"sm"}
          icon={<BsEmojiSunglasses size={28} />}
          aria-label="emoji picker"
        />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Emoji Picker</PopoverHeader>
        <PopoverBody>
          <Picker
            onEmojiClick={onEmojiClick}
            disableAutoFocus={true}
            skinTone={SKIN_TONE_MEDIUM_DARK}
            groupNames={{ smileys_people: "PEOPLE" }}
            native
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
