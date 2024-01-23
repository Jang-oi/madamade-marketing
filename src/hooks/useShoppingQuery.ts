import { useQuery } from '@tanstack/react-query';
import { axiosAPI } from '../utils/axios';

export const READ_SHOPPING_LIST = 'READ_SHOPPING_LIST';

/**
 * HYPER-V 사용자 List 조회
 */
export const useShoppingQuery = (params: any) => {
  const fetcher = async () => {
    return axiosAPI('/getShoppingList', params);
  };

  return useQuery({
    queryKey: [READ_SHOPPING_LIST],
    queryFn: fetcher,
    select: (data) => {
      return data.data;
    },
    enabled: false,
  });
};
