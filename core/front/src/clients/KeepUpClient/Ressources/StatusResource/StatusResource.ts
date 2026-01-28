import { BaseHttpClient } from '../../../BaseHttpClient/BaseHttpClient';
import type { Status } from '../types';

export class StatusResource extends BaseHttpClient {
    async list(): Promise<Status[]> {
        return this.request<Status[]>('/api/status');
    }

    async get(id: string): Promise<Status> {
        return this.request<Status>(`/api/status/${id}`);
    }

    async create(data: Partial<Status>): Promise<Status> {
        return this.request<Status>('/api/status', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<Status>): Promise<Status> {
        return this.request<Status>(`/api/status/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.request<void>(`/api/status/${id}`, {
            method: 'DELETE',
        });
    }
}
