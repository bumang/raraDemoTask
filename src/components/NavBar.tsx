import { SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  HStack,
  IconButton,
  Input,
  Flex,
  Spacer,
  Heading,
  CloseButton,
} from '@chakra-ui/react';
import PrimaryButton from 'components/PrimaryButton';
import { inputItemProps } from 'constant';

import { useState } from 'react';
import { Link } from 'react-location';

const NavBar = ({ inputValue, setInputValue }: inputItemProps) => {
  // const [searchValue, setSearchValue] = useState('');
  const [showSearchBox, setShowSearchBox] = useState(false);

  const displaySearchBar = () => {
    setShowSearchBox(!showSearchBox);
  };

  return (
    <Flex minWidth="max-content" alignItems="center" p="20px 35px">
      <Box>
        <Heading size="md">Users</Heading>
      </Box>
      <Spacer />
      <Box d="flex" alignItems="flex-start">
        {showSearchBox && (
          <Box mr="15px" position="relative">
            <HStack>
              <Input
                borderRadius="10px"
                value={inputValue}
                placeholder="Search..."
                size="sm"
                variant="filled"
                onChange={(e) => setInputValue(e.target.value)}
              />
              {inputValue && (
                <CloseButton
                  position="absolute"
                  right="1"
                  onClick={() => setInputValue('')}
                  size="md"
                />
              )}
            </HStack>
          </Box>
        )}
        <Box>
          <IconButton
            onClick={displaySearchBar}
            size="sm"
            mr="30px"
            background="none"
            cursor="pointer"
            aria-label="Search database"
            icon={<SearchIcon />}
          />
        </Box>
        <Link to="/add-users">
          <Box>
            <PrimaryButton
              colorScheme="teal"
              size="sm"
              color="#FFFFFF"
              backgroundColor="#00425C"
              text="+ New User"
            />
          </Box>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;
