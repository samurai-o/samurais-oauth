/* eslint-disable @typescript-eslint/no-explicit-any */
import { isArray, isEmpty, isObject } from "@frade-sam/samtools";
import aes from "@/tools/crypto";

export type ObjectSchema = { [key: string]: any };

/**
 * 提交前加密
 * @param payload 提交数据
 * @param keys 待加密字段
 * @returns
 */
export function preSubmitEncryption<T = any>(payload: T, keys: string[]): T {
	if (!isObject(payload) || isEmpty(payload) || !isArray(keys) || isEmpty(keys))
		return payload;
	const params: any = Object.entries(payload).reduce(
		(a: ObjectSchema, b: [string, any]) => {
			const [key, value] = b;
			if (keys.includes(key)) {
				a[key] = aes.encrypt(value);
			} else {
				a[key] = value;
			}
			return a;
		},
		{},
	);
	return params;
}
