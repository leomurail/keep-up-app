import type { ApiKey } from '../types';
import type { BaseHttpClient } from '@/clients/BaseHttpClient/BaseHttpClient';
import type { BaseHttpClientBff } from '@/clients/BaseHttpClientBff/BaseHttpClientBff';

export class ApiKeyResource {
    constructor(private readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff) { }

    async list(): Promise<ApiKey[]> {
        return this.baseHttpClient.request<ApiKey[]>('/api/api-key');
    }

    async get(id: string): Promise<ApiKey> {
        return this.baseHttpClient.request<ApiKey>(`/api/api-key/${id}`);
    }

    async create(data: Partial<ApiKey>): Promise<ApiKey> {
        return this.baseHttpClient.request<ApiKey>('/api/api-key', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<ApiKey>): Promise<ApiKey> {
        return this.baseHttpClient.request<ApiKey>(`/api/api-key/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.baseHttpClient.request<void>(`/api/api-key/${id}`, {
            method: 'DELETE',
        });
    }
}
