import { request } from 'umi';

export async function getFakeCaptcha(params: {
  phone?: string;
}) {
  return request<API.FakeCaptcha>('/api/login/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
  });
}
