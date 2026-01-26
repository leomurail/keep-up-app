import type { Image } from '../types';
import { BaseHttpClient } from '../../../BaseHttpClient/BaseHttpClient';

export class ImageResource extends BaseHttpClient {
    async list(): Promise<Image[]> {
        return this.request<Image[]>('/api/images');
    }

    async upload(file: File, alt?: string): Promise<Image> {
        const formData = new FormData();
        formData.append('file', file);
        if (alt) {
            formData.append('alt', alt);
        }

        return this.request<Image>('/api/images', {
            method: 'POST',
            body: formData,
        });
    }

    async create(file: File, alt?: string): Promise<Image> {
        return this.upload(file, alt);
    }

    async get(id: string | number): Promise<Image> {
        return this.request<Image>(`/api/images/${id}`);
    }

    async update(id: string | number, data: { file?: File; alt?: string }): Promise<Image> {
        const formData = new FormData();
        if (data.file) {
            formData.append('image', data.file);
        }
        if (data.alt) {
            formData.append('alt', data.alt);
        }

        return this.request<Image>(`/api/images/${id}`, {
            method: 'POST',
            body: formData,
        });
    }

    async delete(id: string | number): Promise<void> {
        return this.request<void>(`/api/images/${id}`, {
            method: 'DELETE',
        });
    }
}
