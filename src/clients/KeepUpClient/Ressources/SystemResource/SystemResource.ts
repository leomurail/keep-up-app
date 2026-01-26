import type { HealthResponse } from '../types';
import { BaseHttpClient } from '../../../BaseHttpClient/BaseHttpClient';

export class SystemResource extends BaseHttpClient {
    async getHealth(): Promise<HealthResponse> {
        return this.request<HealthResponse>('/api/health');
    }
}
