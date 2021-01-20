
import React from 'react'
import { useDispatch } from 'react-redux';
import { setUserData, setUserLoadingStatus } from '../store/ducks/user/actionsCreatores';
import { LoadingStatus } from '../store/types';
import { AuthApi } from '../services/api/authApi';

export const ActivatePage = () => {
    const dispatch = useDispatch();

    const [isActive, setIsActive] = React.useState<boolean>(false);

    React.useEffect(() => {
        dispatch(setUserLoadingStatus(LoadingStatus.NEVER));
        const hash = window.location.pathname.split('/').pop();
        if (hash) {
            AuthApi.verify(hash)
                .then(({ data }) => {
                    window.localStorage.setItem('token', data.token);
                    window.location.href = '/home';
                })
                .catch(() => {
                    dispatch(setUserLoadingStatus(LoadingStatus.LOADED));
                });
        }
    }, []);

    return (
        <div>
            ......
        </div>
    )
}
