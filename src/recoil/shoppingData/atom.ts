import {atom} from 'recoil';

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

export const reviewDataState = atom({
    key: 'reviewDataState',
    default: [],
});

export const keywordDataState = atom({
    key: 'keywordDataState',
    default: [],
});

