export interface CreateOptions {
    backupID?: string;
    maxMessagesPerChannel?: number;
    jsonSave?: boolean;
    jsonBeautify?: boolean;
    includeName?: boolean;
    doNotBackup?: string[];
    backupMembers?: boolean;
    saveImages?: string;
}
