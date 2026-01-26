import { KeepUpClient } from './clients/KeepUpClient';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();
// TODO: Load from env var
const BASE_URL = 'http://api.keep-up.traefik.me';

export const client = new KeepUpClient(BASE_URL);

// Hydrate token from cookies if available
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
