import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const addUser = async (user: Object) => {
  const data = axios.post('https://jsonplaceholder.typicode.com/users', user);
  return data;
};

export const useAddUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });
};
