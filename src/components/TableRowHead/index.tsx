import { Box, Checkbox, Flex, Text, Wrap, WrapItem } from '@chakra-ui/react';
import { rowHeadProps } from 'constant';

const TableRowHead = ({ isIndeterminate, isChecked, handleCheckItemsHead }: rowHeadProps) => {
  return (
    <Flex maxW="1890px">
      <Wrap w="100%" h="48px" bg="#EEF1F7">
        <WrapItem flex="1 1 0" maxWidth="100px">
          <Box h="48px" display="flex" width="100%" justifyContent="center">
            <Checkbox
              isChecked={isChecked}
              isIndeterminate={isIndeterminate}
              border="2px gray"
              onChange={(e) => handleCheckItemsHead(e)}
            ></Checkbox>
          </Box>
        </WrapItem>
        <WrapItem flex="1 1 0">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            Name
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            Username
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            Email
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            Phone
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            Website
          </Text>
        </WrapItem>
        <WrapItem flex="1 1 0" minWidth="300px">
          <Text h="48px" padding="15px" fontSize="13px" fontWeight="500">
            Address
          </Text>
        </WrapItem>
      </Wrap>
    </Flex>
  );
};

export default TableRowHead;
