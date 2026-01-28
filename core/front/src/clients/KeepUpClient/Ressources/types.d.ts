export interface Image {
    id: number;
    src: string;
    width: number;
    height: number;
    alt: string;
}

export interface Status {
    id: number;
    slug: string;
    label: string;
    airdropEvents?: AirdropEvent[];
}

export interface Category {
    id: number;
    slug: string;
    label: string;
    airdropEvents?: AirdropEvent[];
}

export interface AirdropEventSocialMedia {
    id: number;
    link: string;
    airdropEvent?: AirdropEvent | null;
    socialMedia?: SocialMedia | null;
}

export interface SocialMedia {
    id: number;
    slug: string;
    label: string;
    image?: Image | null;
    imageId?: number;
    airdropEvent?: AirdropEventSocialMedia[];
}

export interface AirdropEvent {
    id: number;
    title: string;
    category?: Category | null;
    image?: Image | null;
    status?: Status | null;
    claimLink?: string | null;
    text?: string | null;
    socialMedia?: AirdropEventSocialMedia[];
}

export interface User {
    id: number;
    email: string;
    roles: string[];
    password?: string; // Only for creation/update, usually not in response
    token?: string | null;
}

// Request/Response types for specific endpoints

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    user: string; // User identifier or email based on example "user": "string"
    roles: string[];
    token: string;
}

export interface HealthResponse {
    status: string;
}
