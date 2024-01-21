import {Button, Stack, Sheet} from '@mui/joy';

import {menuData} from "../../utils/commonUits";

import {useNavigate} from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <Sheet
            sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                top: 0,
                zIndex: 9995,
                p: 2,
                backgroundColor: '#096BCB'
            }}
        >
            <Stack direction="row" justifyContent="center" alignItems="center" spacing={1}>
                {menuData.map((menuItem, index) => (
                    <Button variant={"plain"} size="lg" key={index} sx={{alignSelf: 'center', color: 'white', fontSize: '20px'}}
                            onClick={() => {navigate(`${menuItem.url}`)}}>
                        {menuItem.menu}
                    </Button>
                ))}
            </Stack>
        </Sheet>
    );
};

export default Header;