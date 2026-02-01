import { KeepUpClient } from '@/clients/KeepUpClient/KeepUpClient';
import type { KeepUpClientBff } from '@/clients/KeepUpClient/type';

export const keepUpClientBff: KeepUpClientBff = new KeepUpClient("BFF") as KeepUpClientBff;