import type { User } from '../types';
import type { BaseHttpClient } from '@/clients/BaseHttpClient/BaseHttpClient';
import type { BaseHttpClientBff } from '@/clients/BaseHttpClientBff/BaseHttpClientBff';

export class UserResource {
    constructor(private readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff) { }

    async list(): Promise<User[]> {
        return this.baseHttpClient.request<User[]>('/api/user');
    }

    async get(id: string): Promise<User> {
        return this.baseHttpClient.request<User>(`/api/user/${id}`);
    }

    async create(data: Partial<User>): Promise<User> {
        return this.baseHttpClient.request<User>('/api/user', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<User>): Promise<User> {
        return this.baseHttpClient.request<User>(`/api/user/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.baseHttpClient.request<void>(`/api/user/${id}`, {
            method: 'DELETE',
        });
    }
}
