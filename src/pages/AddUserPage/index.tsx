import {
  Box,
  Flex,
  Spacer,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import PrimaryButton from 'components/PrimaryButton';
import { Link } from 'react-location';

function AddUserPage() {
  return (
    <VStack>
      <Flex w="100%" alignItems="center" p="20px 35px">
        <Box>
          <Heading size="md">Users</Heading>
        </Box>
        <Spacer />
        <Box d="flex" alignItems="flex-start">
          <Link to="/">
            <Box>
              <PrimaryButton
                colorScheme="teal"
                size="sm"
                color="#FFFFFF"
                backgroundColor="#00425C"
                text="< Go Back"
              />
            </Box>
          </Link>
        </Box>
      </Flex>
      <Box>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input mb={3} placeholder="Name" />
          <FormLabel>Username</FormLabel>
          <Input mb={3} placeholder="Username" />
          <FormLabel>Email</FormLabel>
          <Input mb={3} placeholder="Email" />
          <FormLabel>Phone</FormLabel>
          <Input mb={3} placeholder="Phone Number" />
          <FormLabel>Website</FormLabel>
          <Input mb={3} placeholder="Website" />
          <FormLabel>Address</FormLabel>
          <Input mb={3} placeholder="Address" />
        </FormControl>
        <PrimaryButton
          colorScheme="teal"
          color="#FFF"
          text="Submit"
          size="md"
          backgroundColor="#00425C"
        />
      </Box>
    </VStack>
  );
}

export default AddUserPage;
