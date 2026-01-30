import type { LoginRequest, LoginResponse, User } from '../types';
import type { BaseHttpClient } from '@/clients/BaseHttpClient/BaseHttpClient';
import type { BaseHttpClientBff } from '@/clients/BaseHttpClientBff/BaseHttpClientBff';

export class AuthResource {
    constructor(private readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff) { }

    async login(credentials: LoginRequest): Promise<LoginResponse> {
        return this.baseHttpClient.request<LoginResponse>('/api/login', {
            method: 'POST',
            body: JSON.stringify(credentials),
        });
    }

    async getMe(): Promise<User> {
        return this.baseHttpClient.request<User>('/api/me');
    }

    async logout(): Promise<void> {
        return this.baseHttpClient.request<void>('/api/logout', {
            method: 'POST',
        });
    }
}
