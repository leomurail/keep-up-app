import type { Category } from '../types';
import { BaseHttpClient } from '../../../BaseHttpClient/BaseHttpClient';

export class CategoryResource extends BaseHttpClient {
    async list(): Promise<Category[]> {
        return this.request<Category[]>('/api/category');
    }

    async get(id: string): Promise<Category> {
        return this.request<Category>(`/api/category/${id}`);
    }

    async create(data: Partial<Category>): Promise<Category> {
        return this.request<Category>('/api/category', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<Category>): Promise<Category> {
        return this.request<Category>(`/api/category/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.request<void>(`/api/category/${id}`, {
            method: 'DELETE',
        });
    }
}
