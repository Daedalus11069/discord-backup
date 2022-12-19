import { PermissionResolvable } from 'discord.js';

export interface ChannelPermissionsData {
    roleName: string;
    allow: string;
    deny: string;
}
