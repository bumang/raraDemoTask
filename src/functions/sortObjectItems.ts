/* sorting according to username */

export const sortByUser = (users: any) => {
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

  return users;
};
