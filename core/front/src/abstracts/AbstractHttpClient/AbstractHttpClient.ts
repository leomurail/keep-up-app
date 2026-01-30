export class AbstractHttpClient {
    protected async call<T>(url: string, config: RequestInit): Promise<T> {
        const response = await fetch(url, config);

        if (!response.ok) {
            await this.handleError(response);
        }

        if (response.status === 204) {
            return {} as T;
        }

        return response.json();
    }

    protected async handleError(response: Response): Promise<never> {
        let errorMessage = `HTTP Error: ${response.status} ${response.statusText}`;

        try {
            const errorData = await response.json();
            if (errorData?.message) {
                errorMessage = errorData.message;
            }
        } catch { }

        throw new Error(errorMessage);
    }
}