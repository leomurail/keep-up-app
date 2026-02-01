import { BaseHttpClient } from "@/clients/BaseHttpClient/BaseHttpClient";
import { BaseHttpClientBff } from "@/clients/BaseHttpClientBff/BaseHttpClientBff";
import { AuthResource, CategoryResource, SocialMediaResource, SystemResource, UserResource, ImageResource, StatusResource, ApiKeyResource, AirdropEventResource } from "./Ressources";

export interface KeepUpClientApi {
    readonly baseHttpClient: BaseHttpClient;
    readonly system: SystemResource;
    readonly auth: AuthResource;
    readonly user: UserResource;
    readonly category: CategoryResource;
    readonly airdropEvent: AirdropEventResource;
    readonly socialMedia: SocialMediaResource;
    readonly image: ImageResource;
    readonly status: StatusResource;
    readonly apiKey: ApiKeyResource;
}

export interface KeepUpClientBff {
    readonly baseHttpClient: BaseHttpClientBff;
    readonly system: SystemResource;
    readonly auth: AuthResource;
    readonly user: UserResource;
    readonly category: CategoryResource;
    readonly airdropEvent: AirdropEventResource;
    readonly socialMedia: SocialMediaResource;
    readonly image: ImageResource;
    readonly status: StatusResource;
    readonly apiKey: ApiKeyResource;
}
