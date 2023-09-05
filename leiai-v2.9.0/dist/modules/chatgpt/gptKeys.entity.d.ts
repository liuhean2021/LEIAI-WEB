import { BaseEntity } from 'src/common/entity/baseEntity';
export declare class GptKeysEntity extends BaseEntity {
    manufacturer: string;
    secretKey: string;
    key: string;
    status: number;
    model: string;
    balance: string;
    type: string;
    keyStatus: number;
    expireTime: Date;
    weight: number;
    useCount: number;
    maxModelTokens: number;
    maxResponseTokens: number;
    openaiProxyUrl: string;
    openaiTimeoutMs: number;
}
