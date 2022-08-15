import NavBar from 'components/NavBar';
import {
  Wrap,
  WrapItem,
  Box,
  Center,
  Flex,
  Text,
  Checkbox,
  Heading,
  Stack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAxiosQuery } from 'hooks/useAxiosQuery';
import { fetchedData } from 'constant';

const Index = () => {
  /* fetch completion callback functions */
  const onSuccess = () => {
    console.log('fetch done');
  };

  const onError = () => {
    console.log('error encountered');
  };

  /* getting data from fetch */
  const { data: users, isLoading, isError, error } = useAxiosQuery({ onSuccess, onError });

  /* sorting according to username */
  const sortedUser = () => {
    users?.sort((a: any, b: any) => {
      let fa: string = a.username.toLowerCase();
      let fb: string = b.username.toLowerCase();
      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
  };
  sortedUser();

  /* checkbox logic */
  /* defining object with id as key and boolean as value =>{ user.id : false } | empty   */
  const [checkedItems, setCheckedItems] = useState<Map<string, boolean> | any>({});
  const allChecked = Object.values(checkedItems).every(Boolean);
  const isIndeterminate = Object.values(checkedItems).some(Boolean) && !allChecked;
  /*setting all the values for the response fetched data to false   */
  useEffect(() => {
    const checkBoxObject: Map<string, boolean> = users?.reduce((obj: any, user: any) => {
      return Object.assign(obj, { [user.id]: false });
    }, {});
    /* setting the state  */
    checkBoxObject && setCheckedItems(checkBoxObject);
  }, [users]);
  /* handle function for children checkbox */
  const handleCheckItems = (userId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({ ...checkedItems, [userId]: e.target.checked });
  };
  /* handle function for parent checkbox */
  const handleParentCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    let allCheck = Object.keys(checkedItems).reduce((acc: any | {}, key: string) => {
      acc[key] = e.target.checked;
      return acc;
    }, {});
    setCheckedItems(allCheck);
  };

  return (
    <Box>
      <NavBar />

      {/* Table Made Using Flex  */}
      {/* table head */}
      <Flex>
        <Wrap w="100%" h="48px" bg="#EEF1F7">
          <WrapItem>
            <Center h="48px" w="105px">
              <Checkbox
                isChecked={allChecked}
                isIndeterminate={isIndeterminate}
                border="2px gray"
                onChange={(e) => handleParentCheckBox(e)}
              ></Checkbox>
            </Center>
          </WrapItem>
          <WrapItem>
            <Text h="48px" w="201px" padding="15px" fontSize="13px" fontWeight="500">
              Name
            </Text>
          </WrapItem>
          <WrapItem>
            <Text h="48px" w="133px" padding="15px" fontSize="13px" fontWeight="500">
              Username
            </Text>
          </WrapItem>
          <WrapItem>
            <Text h="48px" w="220px" padding="15px" fontSize="13px" fontWeight="500">
              Email
            </Text>
          </WrapItem>
          <WrapItem>
            <Text h="48px" w="200px" padding="15px" fontSize="13px" fontWeight="500">
              Phone
            </Text>
          </WrapItem>
          <WrapItem>
            <Text h="48px" w="183px" padding="15px" fontSize="13px" fontWeight="500">
              Website
            </Text>
          </WrapItem>
          <WrapItem>
            <Text h="48px" w="300px" padding="15px" fontSize="13px" fontWeight="500">
              Address
            </Text>
          </WrapItem>
        </Wrap>
      </Flex>
      {/* fetch is loading and error handle */}
      {isLoading ? (
        <Center p={4}>
          <Heading>Loading...</Heading>
        </Center>
      ) : null}
      {isError ? (
        <Center p={4}>
          <Heading>{error.message}</Heading>
        </Center>
      ) : null}
      {/* table Items */}
      {users &&
        users.map((user: fetchedData) => {
          return (
            <Flex key={user.id}>
              <Wrap w="100%" h="48px">
                <WrapItem>
                  <Center h="48px" w="105px">
                    <Checkbox
                      key={user.id}
                      border="2px gray"
                      isChecked={checkedItems[user.id]}
                      onChange={(e) => {
                        handleCheckItems(user.id, e);
                      }}
                    ></Checkbox>
                  </Center>
                </WrapItem>
                <WrapItem>
                  <Text h="48px" w="201px" padding="15px" fontSize="13px" fontWeight="500">
                    {user.name}
                  </Text>
                </WrapItem>
                <WrapItem>
                  <Text h="48px" w="133px" padding="15px" fontSize="13px" fontWeight="500">
                    {user.username}
                  </Text>
                </WrapItem>
                <WrapItem>
                  <Text h="48px" w="220px" padding="15px" fontSize="13px" fontWeight="500">
                    {user.email}
                  </Text>
                </WrapItem>
                <WrapItem>
                  <Text h="48px" w="200px" padding="15px" fontSize="13px" fontWeight="500">
                    {user.phone}
                  </Text>
                </WrapItem>
                <WrapItem>
                  <Text h="48px" w="183px" padding="15px" fontSize="13px" fontWeight="500">
                    {user.website}
                  </Text>
                </WrapItem>
                <WrapItem>
                  <Text h="48px" w="300px" padding="15px" fontSize="13px" fontWeight="500">
                    {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
                  </Text>
                </WrapItem>
              </Wrap>
            </Flex>
          );
        })}
    </Box>
  );
};

export default Index;
