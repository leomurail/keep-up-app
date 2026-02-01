import { KeepUpClient } from '@/clients/KeepUpClient/KeepUpClient';
import type { KeepUpClientApi } from '@/clients/KeepUpClient/type';

export const keepUpClientApi: KeepUpClientApi = new KeepUpClient("API") as KeepUpClientApi;