import type { Category } from '../types';
import type { BaseHttpClient } from '@/clients/BaseHttpClient/BaseHttpClient';
import type { BaseHttpClientBff } from '@/clients/BaseHttpClientBff/BaseHttpClientBff';

export class CategoryResource {
    constructor(private readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff) { }

    async list(): Promise<Category[]> {
        return this.baseHttpClient.request<Category[]>('/api/category');
    }

    async get(id: string): Promise<Category> {
        return this.baseHttpClient.request<Category>(`/api/category/${id}`);
    }

    async create(data: Partial<Category>): Promise<Category> {
        return this.baseHttpClient.request<Category>('/api/category', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<Category>): Promise<Category> {
        return this.baseHttpClient.request<Category>(`/api/category/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.baseHttpClient.request<void>(`/api/category/${id}`, {
            method: 'DELETE',
        });
    }
}
