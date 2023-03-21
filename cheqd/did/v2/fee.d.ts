import _m0 from "protobufjs/minimal.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
/** FeeParams defines the parameters for the cheqd DID module fixed fee */
export interface FeeParams {
    /**
     * Fixed fee for creating a DID
     *
     * Default: 50 ARX or 50000000000zarx
     */
    createDid: Coin | undefined;
    /**
     * Fixed fee for updating a DID
     *
     * Default: 25 ARX or 25000000000zarx
     */
    updateDid: Coin | undefined;
    /**
     * Fixed fee for deactivating a DID
     *
     * Default: 10 ARX or 10000000000zarx
     */
    deactivateDid: Coin | undefined;
    /**
     * Percentage of the fixed fee that will be burned
     *
     * Default: 0.5 (50%)
     */
    burnFactor: string;
}
export declare const FeeParams: {
    encode(message: FeeParams, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): FeeParams;
    fromJSON(object: any): FeeParams;
    toJSON(message: FeeParams): unknown;
    create<I extends {
        createDid?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        updateDid?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        deactivateDid?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        burnFactor?: string | undefined;
    } & {
        createDid?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["createDid"], keyof Coin>]: never; }) | undefined;
        updateDid?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["updateDid"], keyof Coin>]: never; }) | undefined;
        deactivateDid?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["deactivateDid"], keyof Coin>]: never; }) | undefined;
        burnFactor?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof FeeParams>]: never; }>(base?: I | undefined): FeeParams;
    fromPartial<I_1 extends {
        createDid?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        updateDid?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        deactivateDid?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        burnFactor?: string | undefined;
    } & {
        createDid?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["createDid"], keyof Coin>]: never; }) | undefined;
        updateDid?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["updateDid"], keyof Coin>]: never; }) | undefined;
        deactivateDid?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["deactivateDid"], keyof Coin>]: never; }) | undefined;
        burnFactor?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof FeeParams>]: never; }>(object: I_1): FeeParams;
};
//# sourceMappingURL=fee.d.ts.map