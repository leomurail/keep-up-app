import type { BaseHttpClient } from '@/clients/BaseHttpClient/BaseHttpClient';
import type { BaseHttpClientBff } from '@/clients/BaseHttpClientBff/BaseHttpClientBff';
import type { SocialMedia } from '../types';

export class SocialMediaResource {
    constructor(private readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff) { }

    async list(): Promise<SocialMedia[]> {
        return this.baseHttpClient.request<SocialMedia[]>('/api/social-media');
    }

    async get(id: string): Promise<SocialMedia> {
        return this.baseHttpClient.request<SocialMedia>(`/api/social-media/${id}`);
    }

    async create(data: Partial<SocialMedia>): Promise<SocialMedia> {
        return this.baseHttpClient.request<SocialMedia>('/api/social-media', {
            method: 'POST',
            body: JSON.stringify(data),
        });
    }

    async update(id: string, data: Partial<SocialMedia>): Promise<SocialMedia> {
        return this.baseHttpClient.request<SocialMedia>(`/api/social-media/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
        });
    }

    async delete(id: string): Promise<void> {
        return this.baseHttpClient.request<void>(`/api/social-media/${id}`, {
            method: 'DELETE',
        });
    }
}
