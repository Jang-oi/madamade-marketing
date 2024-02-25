import { atom } from 'recoil';

export const shoppingDataState = atom({
  key: 'shoppingDataState',
  default: [],
});

export const shoppingDetailModalState = atom({
  key: 'shoppingDetailModalState',
  default: {
    showModal: false,
    shoppingDetailData: {},
  },
});

type SearchData = {
  [key: string]: [];
};

export const reviewDataState = atom<SearchData>({
  key: 'reviewDataState',
  default: {},
});

export const keywordDataState = atom<SearchData>({
  key: 'keywordDataState',
  default: {},
});
