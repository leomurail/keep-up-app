import type { User } from '../types';
import { BaseHttpClient } from '../../../BaseHttpClient/BaseHttpClient';

export class UserResource extends BaseHttpClient {
    async list(): Promise<User[]> {
        return this.request<User[]>('/api/users');
    }

    async get(id: string): Promise<User> {
        return this.request<User>(`/api/users/${id}`);
    }

    async create(data: Partial<User>): Promise<User> {
        return this.request<User>('/api/users', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<User>): Promise<User> {
        return this.request<User>(`/api/users/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.request<void>(`/api/users/${id}`, {
            method: 'DELETE',
        });
    }
}
