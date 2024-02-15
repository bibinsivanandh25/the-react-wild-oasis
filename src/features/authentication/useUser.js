import { useQuery } from '@tanstack/react-query';
import { getCurrentUser } from '../../services/apiLogin';

export const useUser = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: getCurrentUser,
  });

  return { user, isLoading, isAuthenticated: user?.role === 'authenticated' };
};
