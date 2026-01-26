import { KeepUpClient } from './clients/KeepUpClient';
import { Cookies } from 'react-cookie';
import { getConfig } from './utils';

const cookies = new Cookies();
const BASE_URL = getConfig("VITE_API_URL");
export const client = new KeepUpClient(BASE_URL);

const token = cookies.get('token');
if (token) {
    client.setToken(token);
}

export const setClientToken = (token: string) => {
    cookies.set('token', token, { path: '/' });
    client.setToken(token);
};

export const clearClientToken = () => {
    cookies.remove('token', { path: '/' });
    client.setToken(null);
};
