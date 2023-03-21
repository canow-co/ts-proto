import _m0 from "protobufjs/minimal.js";
import { Coin } from "../../../cosmos/base/v1beta1/coin.js";
/**
 * FeeParams defines the parameters for the cheqd Resource module fixed fee.
 * Creation requests for different IANA media types are charged different fees.
 */
export interface FeeParams {
    /**
     * Fixed fee for creating a resource with media type 'image/*'
     *
     * Default: 10 ARX or 10000000000zarx
     */
    image: Coin | undefined;
    /**
     * Fixed fee for creating a resource with media type 'application/json'
     *
     * Default: 2.5 ARX or 2500000000zarx
     */
    json: Coin | undefined;
    /**
     * Fixed fee for creating a resource with all other media types
     *
     * Default: 5 ARX or 5000000000zarx
     */
    default: Coin | undefined;
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
        image?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        json?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        default?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        burnFactor?: string | undefined;
    } & {
        image?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K in Exclude<keyof I["image"], keyof Coin>]: never; }) | undefined;
        json?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_1 in Exclude<keyof I["json"], keyof Coin>]: never; }) | undefined;
        default?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_2 in Exclude<keyof I["default"], keyof Coin>]: never; }) | undefined;
        burnFactor?: string | undefined;
    } & { [K_3 in Exclude<keyof I, keyof FeeParams>]: never; }>(base?: I | undefined): FeeParams;
    fromPartial<I_1 extends {
        image?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        json?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        default?: {
            denom?: string | undefined;
            amount?: string | undefined;
        } | undefined;
        burnFactor?: string | undefined;
    } & {
        image?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["image"], keyof Coin>]: never; }) | undefined;
        json?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["json"], keyof Coin>]: never; }) | undefined;
        default?: ({
            denom?: string | undefined;
            amount?: string | undefined;
        } & {
            denom?: string | undefined;
            amount?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["default"], keyof Coin>]: never; }) | undefined;
        burnFactor?: string | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof FeeParams>]: never; }>(object: I_1): FeeParams;
};
//# sourceMappingURL=fee.d.ts.map