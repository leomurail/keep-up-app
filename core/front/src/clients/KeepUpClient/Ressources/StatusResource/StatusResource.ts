import type { Status } from '../types';
import type { BaseHttpClient } from '@/clients/BaseHttpClient/BaseHttpClient';
import type { BaseHttpClientBff } from '@/clients/BaseHttpClientBff/BaseHttpClientBff';

export class StatusResource {
    constructor(private readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff) { }

    async list(): Promise<Status[]> {
        return this.baseHttpClient.request<Status[]>('/api/status');
    }

    async get(id: string): Promise<Status> {
        return this.baseHttpClient.request<Status>(`/api/status/${id}`);
    }

    async create(data: Partial<Status>): Promise<Status> {
        return this.baseHttpClient.request<Status>('/api/status', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<Status>): Promise<Status> {
        return this.baseHttpClient.request<Status>(`/api/status/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.baseHttpClient.request<void>(`/api/status/${id}`, {
            method: 'DELETE',
        });
    }
}
