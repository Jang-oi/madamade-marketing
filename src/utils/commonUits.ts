import { MenuTypes } from '../types/menuTypes';
import axios from "axios";


export const getSeoulTime = async () => {
  try {
    const response = await axios.get('http://worldtimeapi.org/api/timezone/Asia/Seoul');
    // 현재 시간 정보는 response.data.datetime에서 얻을 수 있습니다.
    const currentTime = new Date(response.data.datetime);
    // 시간을 출력하거나 다른 작업을 할 수 있습니다.
    console.log('Seoul 현재 시간:', currentTime);
    return currentTime; // 필요에 따라 현재 시간을 반환할 수도 있습니다.
  } catch (error) {
    return null;
  }
}

/**
 * 밀리세컨드의 시간을 받아 년월일시분초로 표현
 * @param input
 */
export const formatDate = (input: string) => {
  const year = input.substring(0, 4);
  const month = input.substring(4, 6);
  const day = input.substring(6, 8);

  return `${year}년${month}월${day}일`;
};

export const openNewTab = (url: string) => {
  const newTab = window.open(url, '_blank');
  if (newTab) {
    newTab.focus();
  } else {
    console.error('팝업이 차단되었거나 새 탭을 열 수 없습니다.');
  }
}

/**
 * 숫자 세자리 컴마와 소수점 두자리 반올림
 * @param setNumber
 */
export const setLocaleString = (setNumber: number) => {
  if (setNumber === 0) return 0;
  if (!setNumber) return;
  const option = {
    maximumFractionDigits: 2,
  };
  return setNumber.toLocaleString('ko-KR', option);
};

export const menuData: MenuTypes[] = [{ menu: 'Search', url: '/' }];