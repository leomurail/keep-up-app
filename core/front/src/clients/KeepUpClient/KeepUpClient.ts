import { AirdropEventResource } from './Ressources/AirdropEventResource/AirdropEventResource';
import { AuthResource } from './Ressources/AuthResource/AuthResource';
import { CategoryResource } from './Ressources/CategoryResource/CategoryResource';
import { SocialMediaResource } from './Ressources/SocialMediaResource/SocialMediaResource';
import { SystemResource } from './Ressources/SystemResource/SystemResource';
import { UserResource } from './Ressources/UserResource/UserResource';
import { ImageResource } from './Ressources/ImageResource/ImageResource';
import { StatusResource } from './Ressources/StatusResource/StatusResource';
import { getConfig } from '@/utils';
import { BaseHttpClient } from '../BaseHttpClient/BaseHttpClient';
import { ApiKeyResource } from './Ressources/ApiKeyRessource/ApiKeyRessource';
import { BaseHttpClientBff } from '../BaseHttpClientBff/BaseHttpClientBff';

export class KeepUpClient {
    readonly baseHttpClient: BaseHttpClient | BaseHttpClientBff;

    readonly system: SystemResource;
    readonly auth: AuthResource;
    readonly user: UserResource;
    readonly category: CategoryResource;
    readonly airdropEvent: AirdropEventResource;
    readonly socialMedia: SocialMediaResource;
    readonly image: ImageResource;
    readonly status: StatusResource;
    readonly apiKey: ApiKeyResource;

    constructor(type: "BFF" | "API") {
        this.baseHttpClient = this.getBaseHttpClient(type);

        this.system = new SystemResource(this.baseHttpClient);
        this.auth = new AuthResource(this.baseHttpClient);
        this.user = new UserResource(this.baseHttpClient);
        this.category = new CategoryResource(this.baseHttpClient);
        this.airdropEvent = new AirdropEventResource(this.baseHttpClient);
        this.socialMedia = new SocialMediaResource(this.baseHttpClient);
        this.image = new ImageResource(this.baseHttpClient);
        this.status = new StatusResource(this.baseHttpClient);
        this.apiKey = new ApiKeyResource(this.baseHttpClient);
    }

    getBaseHttpClient(type: "BFF" | "API"): BaseHttpClient | BaseHttpClientBff {
        return type === "BFF"
            ? new BaseHttpClientBff(getConfig("VITE_BFF_URL")) as BaseHttpClientBff
            : new BaseHttpClient(getConfig("VITE_API_URL")) as BaseHttpClient;
    }
}
