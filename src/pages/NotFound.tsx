import ErrorView from "../components/common/ErrorView";

const NotFound = () => {
    return <ErrorView code={'404'} message={'페이지를 찾을 수 없습니다.'}/>
};

export default NotFound;