export class BaseHttpClient {
    protected baseUrl: string;
    protected getToken: () => string | null;

    constructor(
        baseUrl: string,
        getToken: () => string | null
    ) {
        this.baseUrl = baseUrl;
        this.getToken = getToken;
    }

    protected async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
        const token = this.getToken();
        const headers: Record<string, string> = {
            'Accept': 'application/json',
        };

        if (!(options.body instanceof FormData)) {
            headers['Content-Type'] = 'application/json';
        }

        if (options.headers) {
            Object.assign(headers, options.headers);
        }

        if (options.body instanceof FormData) {
            delete headers['Content-Type'];
        }

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const config: RequestInit = {
            ...options,
            headers,
        };

        const response = await fetch(`${this.baseUrl}${endpoint}`, config);

        if (!response.ok) {
            // Try to parse error message from JSON if available
            let errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;
            try {
                const errorData = await response.json();
                if (errorData && typeof errorData === 'object' && 'message' in errorData) {
                    errorMessage = errorData.message;
                }
            } catch (e) {
                // Ignore JSON parse error and use default message
            }
            throw new Error(errorMessage);
        }

        // Handle 204 No Content
        if (response.status === 204) {
            return {} as T;
        }

        return response.json();
    }
}
