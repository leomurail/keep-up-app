import { AirdropEventResource } from './Ressources/AirdropEventResource/AirdropEventResource';
import { AuthResource } from './Ressources/AuthResource/AuthResource';
import { CategoryResource } from './Ressources/CategoryResource/CategoryResource';
import { SocialMediaResource } from './Ressources/SocialMediaResource/SocialMediaResource';
import { SystemResource } from './Ressources/SystemResource/SystemResource';
import { UserResource } from './Ressources/UserResource/UserResource';
import { ImageResource } from './Ressources/ImageResource/ImageResource';
import { StatusResource } from './Ressources/StatusResource/StatusResource';

export class KeepUpClient {
    public readonly system: SystemResource;
    public readonly auth: AuthResource;
    public readonly users: UserResource;
    public readonly categories: CategoryResource;
    public readonly airdropEvents: AirdropEventResource;
    public readonly socialMedia: SocialMediaResource;
    public readonly images: ImageResource;
    public readonly status: StatusResource;

    private token: string | null = null;

    constructor(baseUrl: string) {
        // We bind the getToken function to this instance so resources can access the current token
        const getToken = () => this.token;

        this.system = new SystemResource(baseUrl, getToken);
        this.auth = new AuthResource(baseUrl, getToken);
        this.users = new UserResource(baseUrl, getToken);
        this.categories = new CategoryResource(baseUrl, getToken);
        this.airdropEvents = new AirdropEventResource(baseUrl, getToken);
        this.socialMedia = new SocialMediaResource(baseUrl, getToken);
        this.images = new ImageResource(baseUrl, getToken);
        this.status = new StatusResource(baseUrl, getToken);
    }

    setToken(token: string | null) {
        this.token = token;
    }
}
