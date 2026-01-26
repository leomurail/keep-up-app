import type { AirdropEvent } from '../types';
import { BaseHttpClient } from '../../../BaseHttpClient/BaseHttpClient';

export class AirdropEventResource extends BaseHttpClient {
    async list(): Promise<AirdropEvent[]> {
        return this.request<AirdropEvent[]>('/api/airdrop-event');
    }

    async get(id: string): Promise<AirdropEvent> {
        return this.request<AirdropEvent>(`/api/airdrop-event/${id}`);
    }

    async create(data: Partial<AirdropEvent>): Promise<AirdropEvent> {
        return this.request<AirdropEvent>('/api/airdrop-event', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<AirdropEvent>): Promise<AirdropEvent> {
        return this.request<AirdropEvent>(`/api/airdrop-event/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.request<void>(`/api/airdrop-event/${id}`, {
            method: 'DELETE',
        });
    }
}
