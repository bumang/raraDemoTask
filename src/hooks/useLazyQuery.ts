import { useState, useCallback } from 'react';

import { UseQueryResult } from 'react-query';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetFirstArgumentType<T> = T extends (first: infer FirstArgument, ...args: any[]) => any
  ? FirstArgument
  : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GetSecondArgumentType<T> = T extends (first: any, second: infer SecondArgument) => any
  ? SecondArgument
  : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function useLazyQuery<TQueryVariables extends (...args: any[]) => UseQueryResult>(
  query: TQueryVariables,
  options?: GetSecondArgumentType<TQueryVariables>
) {
  type TVariables = GetFirstArgumentType<typeof query>;
  type TReturnType = ReturnType<typeof query>;

  const [enabled, setEnabled] = useState(false);
  const [variables, setVariables] = useState<TVariables | null>(null);

  const fetch = useCallback<(variables?: TVariables) => void>((variables) => {
    setEnabled(true);
    setVariables(variables ?? null);
  }, []);

  const queryResult = query(variables as TVariables, {
    enabled,
    ...(options && options),
  }) as TReturnType;

  return [fetch, queryResult] as const;
}

// How to use:
// useFetchQuery = Fetch query that needs to be lazily loaded;
// const res = useLazyQuery(useFetchQuery,{onSuccess:()=>void});

// The second data here will return all the query results of react-query
// const [fetch, { isLoading }] = res();
export default useLazyQuery;
