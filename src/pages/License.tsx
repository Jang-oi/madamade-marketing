import ErrorView from '../components/common/ErrorView';
import {openNewTab} from "../utils/commonUits";

const License = () => {
    return <ErrorView code={'라이센스 갱신이 필요합니다.'} buttonValue={'갱신하기'} buttonCallBack={() => {openNewTab('https://thoracic-spring-58d.notion.site/29bb6d7c62584007ad8fa895f5e89973')}}/>;
};

export default License;
