
import React from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import { useForm, Controller } from "react-hook-form";
import { useStylesSignIn } from '..';
import { ModalBlock } from '../../../components/ModalBlock';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

const LoginFormSchema = yup.object().shape({
    email: yup.string().email('Неверная почта').required('Введите почту'),
    password: yup.string().min(6, '​Минимальная длина пароля 6 символов').required(),
});

export interface LoginFormProps {
    email: string;
    password: string;
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }): React.ReactElement => {
    const classes = useStylesSignIn();

    const { register, handleSubmit, control, errors  } = useForm<LoginFormProps>({
        resolver: yupResolver(LoginFormSchema)
    });

    const onSubmit = (data: LoginFormProps) => {
        console.log(data);
    }

    return (
        <ModalBlock
            visible={open}
            onClose={onClose}
            // classes={classes}
            title="Войти в аккаунт">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
                    <FormGroup aria-label="position" row>
                        <Controller
                            as={TextField}
                            control={control}
                            defaultValue=""
                            name="email"
                            className={classes.loginSideField}
                            autoFocus
                            id="email"
                            label="E-Mail"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="email"
                            helperText={errors.email?.message}
                            error={!!errors.email}
                            inputRef={register}
                            fullWidth
                        />
                        <Controller
                            as={TextField}
                            control={control}
                            defaultValue=""
                            name="password"
                            className={classes.loginSideField}
                            autoFocus
                            id="password"
                            label="Пароль"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="filled"
                            type="password"
                            helperText={errors.password?.message}
                            error={!!errors.password}
                            inputRef={register}
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



