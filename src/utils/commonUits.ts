import {MenuTypes} from "../types/menuTypes";

/**
 * 밀리세컨드의 시간을 받아 년월일시분초로 표현
 * @param input
 */
export const formatDate = (input : string) => {
    const year = input.substring(0, 4);
    const month = input.substring(4, 6);
    const day = input.substring(6, 8);

    return `${year}년${month}월${day}일`;
}

/**
 * 숫자 세자리 컴마와 소수점 두자리 반올림
 * @param setNumber
 */
export const setLocaleString = (setNumber : number) => {
    const option = {
        maximumFractionDigits: 2,
    };
    return (setNumber).toLocaleString('ko-KR', option);
};

export const menuData: MenuTypes[] = [
    {menu: 'Search', url: '/'},
];