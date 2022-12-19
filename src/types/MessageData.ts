import { BaseMessageOptions, Embed } from 'discord.js';

export interface MessageData {
    username: string;
    avatar?: string;
    content?: string;
    embeds?: Embed[];
    files?: BaseMessageOptions["files"];
    pinned?: boolean;
    sentAt: string;
}
