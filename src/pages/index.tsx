import NavBar from 'components/NavBar';
import { Box, Center, Heading, Spinner } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useAxiosQuery } from 'hooks/useAxiosQuery';
import { fetchedData, spinnerProps } from 'constant';
import { sortByUser } from 'functions/sortObjectItems';
import { searchItems } from 'functions/searchItems';
import TableRowHead from 'components/TableRowHead';
import TableRowBody from 'components/TableRowBody';

const Index = () => {
  const [searchValue, setSearchValue] = useState('');
  const [checkedItems, setCheckedItems] = useState<Map<string, boolean> | any>({});

  /* fetch completion callback functions */
  const onSuccess = () => {
    console.log('fetch done');
  };

  const onError = () => {
    console.log('error encountered');
  };

  /* getting data from fetch */
  const { data: users, isLoading, isError, error } = useAxiosQuery({ onSuccess, onError });

  const sortedData = sortByUser(users);

  const filterData = searchItems(sortedData, searchValue);

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
      <NavBar inputValue={searchValue} setInputValue={setSearchValue} />

      <TableRowHead
        isChecked={allChecked}
        isIndeterminate={isIndeterminate}
        handleCheckItemsHead={(e) => handleParentCheckBox(e)}
      />

      {/* fetch is loading and error handle */}
      {isLoading ? (
        <Center p={4}>
          <Spinner {...spinnerProps} />
        </Center>
      ) : null}

      {isError ? (
        <Center p={4}>
          <Heading>{error.message}</Heading>
        </Center>
      ) : null}

      {filterData &&
        filterData.map((user: fetchedData) => {
          return (
            <TableRowBody
              user={user}
              isChecked={checkedItems[user.id]}
              handleCheckItemsBody={handleCheckItems}
            />
          );
        })}
    </Box>
  );
};

export default Index;
