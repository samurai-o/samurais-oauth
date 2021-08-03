import * as yup from "yup";


export const loginValidationSchema = yup.object().shape({
	email: yup.string().email("请输入正确的邮箱").trim().required("请输入邮箱"),
	password: yup.string().trim().required("请输入密码"),
	isSave: yup.boolean(),
});

export const registerValidationSchema = yup.object().shape({
	email: yup.string().email("请输入正确的邮箱").trim().required("请输入邮箱"),
	password: yup.string().trim().required("请输入密码"),
	isSave: yup.boolean(),
	checkPassword: yup.string().trim().required("请确认密码"),
});
