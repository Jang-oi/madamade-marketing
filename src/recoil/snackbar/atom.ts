import { atom } from 'recoil';
import { SnackbarType} from "../../components/common/MadaSnackbar";

export const snackbarState = atom<SnackbarType>({
  key: 'snackbarState',
  default: {
    vertical: 'top',
    horizontal: 'right',
    open: false,
    message: '',
    isError: false,
  },
});
