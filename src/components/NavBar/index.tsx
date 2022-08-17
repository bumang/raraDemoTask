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
import SearchBar from 'components/SearchBar';
import { inputItemProps } from 'constant';
import { useState } from 'react';
import { Link } from 'react-location';

const NavBar = ({ inputValue, setInputValue }: inputItemProps) => {
  /* state for displaying search bar onClick searchIcon */
  const [showSearchBox, setShowSearchBox] = useState(false);

  /* hiding search bar logic   */
  const displaySearchBar = () => {
    setShowSearchBox(!showSearchBox);
  };

  /* search bar props */
  const searchBarProps = {
    inputValue: { inputValue },
    setInputValue: { setInputValue },
    placeholder: 'Search...',
    size: 'sm',
    variant: 'filled',
    borderRadius: '10px',
  };

  return (
    <Flex minWidth="max-content" alignItems="center" p="20px 35px">
      <Box>
        <Heading size="md">Users</Heading>
      </Box>
      <Spacer />
      <Box d="flex" alignItems="flex-start">
        {showSearchBox && (
          <SearchBar
            inputValue={inputValue}
            setInputValue={setInputValue}
            placeholder="Search Table..."
          />
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
