import type { HealthResponse } from '../types';
import type { BaseHttpClient } from '@/clients/BaseHttpClient/BaseHttpClient';
import type { BaseHttpClientBff } from '@/clients/BaseHttpClientBff/BaseHttpClientBff';

export class SystemResource {
    constructor(private readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff) { }

    async getHealth(): Promise<HealthResponse> {
        return this.baseHttpClient.request<HealthResponse>('/api/health');
    }
}