import type { BaseHttpClient } from '@/clients/BaseHttpClient/BaseHttpClient';
import type { BaseHttpClientBff } from '@/clients/BaseHttpClientBff/BaseHttpClientBff';
import type { AirdropEvent } from '../types';

export class AirdropEventResource {
    constructor(private readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff) { }

    async list(): Promise<AirdropEvent[]> {
        return this.baseHttpClient.request<AirdropEvent[]>('/api/airdrop-event');
    }

    async get(id: string): Promise<AirdropEvent> {
        return this.baseHttpClient.request<AirdropEvent>(`/api/airdrop-event/${id}`);
    }

    async create(data: Partial<AirdropEvent>): Promise<AirdropEvent> {
        return this.baseHttpClient.request<AirdropEvent>('/api/airdrop-event', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<AirdropEvent>): Promise<AirdropEvent> {
        return this.baseHttpClient.request<AirdropEvent>(`/api/airdrop-event/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.baseHttpClient.request<void>(`/api/airdrop-event/${id}`, {
            method: 'DELETE',
        });
    }
}
