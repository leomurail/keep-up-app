import { AbstractHttpClient } from "@/abstracts";
import { Cookies } from "react-cookie";

export class BaseHttpClient extends AbstractHttpClient {
    protected baseUrl: string;
    protected cookies: Cookies;

    constructor(baseUrl: string) {
        super();

        this.baseUrl = baseUrl;
        this.cookies = new Cookies();
    }

    setToken(token: string | null): void {
        this.cookies.set('token', token, { path: '/' });
    }

    getToken(): string | undefined {
        return this.cookies.get('token');
    }

    clearToken(): void {
        this.cookies.remove('token', { path: '/' });
    }

    public async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        if (this.baseUrl === "") {
            throw new Error("Base URL is not set");
        }

        const url = `${this.baseUrl}${endpoint}`;
        const config = this.getConfig(options);

        return this.call<T>(url, config);
    }

    private getConfig(options: RequestInit): RequestInit {
        const token = this.getToken();

        const headers = new Headers({
            'Accept': 'application/json',
            ...(options.headers as Record<string, string>)
        });

        if (!headers.has('Content-Type') && !(options.body instanceof FormData)) {
            headers.set('Content-Type', 'application/json');
        }

        if (options.body instanceof FormData) {
            headers.delete('Content-Type');
        }

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        return { ...options, headers };
    }
}