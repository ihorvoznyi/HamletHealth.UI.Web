export const retrieveInitials = (fullname: string) => { 
  const splitted = fullname.split(' ');
  return (splitted[0][0] + splitted[splitted.length - 1][0]).toUpperCase();
};
