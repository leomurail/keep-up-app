import type { BaseHttpClientBff } from '@/clients/BaseHttpClientBff/BaseHttpClientBff';
import type { BaseHttpClient } from '@/clients/BaseHttpClient/BaseHttpClient';
import type { Image } from '../types';

export class ImageResource {
    constructor(private readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff) { }

    async list(): Promise<Image[]> {
        return this.baseHttpClient.request<Image[]>('/api/image');
    }

    async upload(file: File, alt?: string): Promise<Image> {
        const formData = new FormData();
        formData.append('file', file);
        if (alt) {
            formData.append('alt', alt);
        }

        return this.baseHttpClient.request<Image>('/api/image', {
            method: 'POST',
            body: formData,
        });
    }

    async create(file: File, alt?: string): Promise<Image> {
        return this.upload(file, alt);
    }

    async get(id: string | number): Promise<Image> {
        return this.baseHttpClient.request<Image>(`/api/image/${id}`);
    }

    async update(id: string | number, data: { file?: File; alt?: string }): Promise<Image> {
        const formData = new FormData();
        if (data.file) {
            formData.append('image', data.file);
        }
        if (data.alt) {
            formData.append('alt', data.alt);
        }

        return this.baseHttpClient.request<Image>(`/api/image/${id}`, {
            method: 'POST',
            body: formData,
        });
    }

    async delete(id: string | number): Promise<void> {
        return this.baseHttpClient.request<void>(`/api/image/${id}`, {
            method: 'DELETE',
        });
    }
}
