import { Box, CloseButton, HStack, Input } from '@chakra-ui/react';
import { inputItemProps } from 'constant';
import React from 'react';

interface searchBarProps {
  inputValue: string;
  setInputValue: (active: string) => void;
  placeholder: string;
}

const SearchBar = ({ placeholder, inputValue, setInputValue }: searchBarProps) => {
  return (
    <Box mr="15px" position="relative">
      <HStack>
        <Input
          borderRadius="10px"
          value={inputValue}
          placeholder={placeholder}
          size="sm"
          variant="filled"
          onChange={(e) => setInputValue(e.target.value)}
        />

        {inputValue && (
          <CloseButton position="absolute" right="1" onClick={() => setInputValue('')} size="md" />
        )}
      </HStack>
    </Box>
  );
};

export default SearchBar;
