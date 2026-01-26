import type { LoginRequest, LoginResponse, User } from '../types';
import { BaseHttpClient } from '../../../BaseHttpClient/BaseHttpClient';

export class AuthResource extends BaseHttpClient {
    async login(credentials: LoginRequest): Promise<LoginResponse> {
        return this.request<LoginResponse>('/api/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    }

    async getMe(): Promise<User> {
        return this.request<User>('/api/me');
    }

    async logout(): Promise<void> {
        return this.request<void>('/api/logout', {
            method: 'POST',
        });
    }
}
