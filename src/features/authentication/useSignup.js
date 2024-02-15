import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiLogin';
import toast from 'react-hot-toast';

export const useSignup = () => {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    onSuccess: (user) => {
      console.log(user);
      toast.success(
        "Account successfully created! Please verify the new account from the user's email address "
      );
    },
  });

  return { isLoading, signup };
};