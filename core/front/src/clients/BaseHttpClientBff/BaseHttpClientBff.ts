import { AbstractHttpClient } from "@/abstracts";

export class BaseHttpClientBff extends AbstractHttpClient {
    baseUrl: string;

    constructor(baseUrl: string) {
        super();
        this.baseUrl = baseUrl;
    }

    public async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        if (this.baseUrl === "") {
            throw new Error("Base URL is not set");
        }

        const url = `${this.baseUrl}/api/data`;

        const body = this.getBody(endpoint, options);
        const config = this.getConfig(body);

        return this.call<T>(url, config);
    }

    private getConfig(body: BodyInit): RequestInit {
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            body,
            method: 'POST'
        }
    }

    private getBody(endpoint: string, options: RequestInit): BodyInit {
        return JSON.stringify({
            endpoint,
            method: options.method || 'GET',
            ...options
        });
    }
}