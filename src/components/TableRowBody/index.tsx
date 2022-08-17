import { Box, Checkbox, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { rowBodyProps } from 'constant';

const TableRowBody = ({ user, isChecked, handleCheckItemsBody }: rowBodyProps) => {
  return (
    <Flex key={user.id} maxW="1890px">
      <Wrap w="100%" h="48px">
        <WrapItem flex="1 1 0" maxWidth="100px">
          <Box h="48px" display="flex" width="100%" justifyContent="center">
            <Checkbox
              key={user.id}
              border="2px gray"
              isChecked={isChecked}
              onChange={(e) => {
                {
                  handleCheckItemsBody(user.id, e);
                }
              }}
            ></Checkbox>
          </Box>
        </WrapItem>
        <WrapItem flex="1 1 0">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            {user.name}
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0" minWidth="150px">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            {user.username}
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            {user.email}
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0" minWidth="150px">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            {user.phone}
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            {user.website}
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0" minWidth="300px">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
          </Text>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default TableRowBody;
