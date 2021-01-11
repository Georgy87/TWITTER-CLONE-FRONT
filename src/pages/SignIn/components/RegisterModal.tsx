import React from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import { useDispatch, useSelector } from 'react-redux'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { ModalBlock } from '../../../components/ModalBlock';
import { Notification } from '../../../components/Notification';
import { Color } from '@material-ui/lab/Alert';
import { useStylesSignIn } from '../../SignIn';
import { selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/types';
import { fetchSignIn } from '../../../store/ducks/user/actionsCreatores';

interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
}

export interface RegisterFormProps {
    email: string;
    password: string;
}

const RegisterFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
});

export const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }): React.ReactElement => {
    const classes = useStylesSignIn();
    const dispatch = useDispatch();

    const openNotificationRef = React.useRef<(text: string, type: Color) => void>(() => { });
    const loadingStatus = useSelector(selectUserStatus);

    const { control, handleSubmit, errors } = useForm<RegisterFormProps>({
        resolver: yupResolver(RegisterFormSchema)
    });

    const onSubmit = async (data: RegisterFormProps) => {
        // dispatch(fetchSignIn(data));
    };

    React.useEffect(() => {
        if (loadingStatus === LoadingStatus.SUCCESS) {
            openNotificationRef.current('Авторизация успешна!', 'success');
            onClose();
        } else if (loadingStatus === LoadingStatus.ERROR) {
            openNotificationRef.current('Неверный логин или пароль', 'error');
        }
    }, [loadingStatus]);

    return <Notification>
        {
            callback => {
                openNotificationRef.current = callback;
                return (
                    <ModalBlock
                        visible={open}
                        onClose={onClose}
                        classes={classes}
                        title="Войти в аккаунт">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                                <FormGroup aria-label="position" row>
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        name="email"
                                        className={classes.registerField}
                                        id="email"
                                        label="E-Mail"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="email"
                                        defaultValue=""
                                        helperText={errors.email?.message}
                                        error={!!errors.email}
                                        fullWidth
                                        autoFocus
                                    />
                                      <Controller
                                        as={TextField}
                                        control={control}
                                        name="fullname"
                                        className={classes.registerField}
                                        id="fullname"
                                        label="Ваше имя"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="text"
                                        defaultValue=""
                                        // helperText={errors.username?.message}
                                        // error={!!errors.username}
                                        fullWidth
                                        autoFocus
                                    />
                                     <Controller
                                        as={TextField}
                                        control={control}
                                        name="username"
                                        className={classes.registerField}
                                        id="username"
                                        label="Логин"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="text"
                                        defaultValue=""
                                        // helperText={errors.username?.message}
                                        // error={!!errors.username}
                                        fullWidth
                                        autoFocus
                                    />
                                    <Controller
                                        as={TextField}
                                        control={control}
                                        name="password"
                                        className={classes.registerField}
                                        id="password"
                                        label="Пароль"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                        type="password"
                                        defaultValue=""
                                        helperText={errors.password?.message}
                                        error={!!errors.password}
                                        fullWidth
                                    />
                                    <Button type="submit" variant="contained" color="primary" fullWidth>
                                        Войти
                                    </Button>
                                </FormGroup>
                            </FormControl>
                        </form>
                    </ModalBlock>
                )
            }
        }
    </Notification>
}
