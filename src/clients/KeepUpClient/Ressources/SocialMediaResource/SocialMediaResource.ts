import type { SocialMedia } from '../types';
import { BaseHttpClient } from '../../../BaseHttpClient/BaseHttpClient';

export class SocialMediaResource extends BaseHttpClient {
    async list(): Promise<SocialMedia[]> {
        return this.request<SocialMedia[]>('/api/social-media');
    }

    async get(id: string): Promise<SocialMedia> {
        return this.request<SocialMedia>(`/api/social-media/${id}`);
    }

    async create(data: Partial<SocialMedia>): Promise<SocialMedia> {
        return this.request<SocialMedia>('/api/social-media', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<SocialMedia>): Promise<SocialMedia> {
        return this.request<SocialMedia>(`/api/social-media/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.request<void>(`/api/social-media/${id}`, {
            method: 'DELETE',
        });
    }
}
