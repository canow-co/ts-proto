import _m0 from "protobufjs/minimal.js";
/**
 * Coin defines a token with a denomination and an amount.
 *
 * NOTE: The amount field is an Int which implements the custom method
 * signatures required by gogoproto.
 */
export interface Coin {
    denom: string;
    amount: string;
}
/**
 * DecCoin defines a token with a denomination and a decimal amount.
 *
 * NOTE: The amount field is an Dec which implements the custom method
 * signatures required by gogoproto.
 */
export interface DecCoin {
    denom: string;
    amount: string;
}
/** IntProto defines a Protobuf wrapper around an Int object. */
export interface IntProto {
    int: string;
}
/** DecProto defines a Protobuf wrapper around a Dec object. */
export interface DecProto {
    dec: string;
}
export declare const Coin: {
    encode(message: Coin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Coin;
    fromJSON(object: any): Coin;
    toJSON(message: Coin): unknown;
    create<I extends {
        denom?: string | undefined;
        amount?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Coin>]: never; }>(base?: I | undefined): Coin;
    fromPartial<I_1 extends {
        denom?: string | undefined;
        amount?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Coin>]: never; }>(object: I_1): Coin;
};
export declare const DecCoin: {
    encode(message: DecCoin, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecCoin;
    fromJSON(object: any): DecCoin;
    toJSON(message: DecCoin): unknown;
    create<I extends {
        denom?: string | undefined;
        amount?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
    } & { [K in Exclude<keyof I, keyof DecCoin>]: never; }>(base?: I | undefined): DecCoin;
    fromPartial<I_1 extends {
        denom?: string | undefined;
        amount?: string | undefined;
    } & {
        denom?: string | undefined;
        amount?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof DecCoin>]: never; }>(object: I_1): DecCoin;
};
export declare const IntProto: {
    encode(message: IntProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IntProto;
    fromJSON(object: any): IntProto;
    toJSON(message: IntProto): unknown;
    create<I extends {
        int?: string | undefined;
    } & {
        int?: string | undefined;
    } & { [K in Exclude<keyof I, "int">]: never; }>(base?: I | undefined): IntProto;
    fromPartial<I_1 extends {
        int?: string | undefined;
    } & {
        int?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "int">]: never; }>(object: I_1): IntProto;
};
export declare const DecProto: {
    encode(message: DecProto, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DecProto;
    fromJSON(object: any): DecProto;
    toJSON(message: DecProto): unknown;
    create<I extends {
        dec?: string | undefined;
    } & {
        dec?: string | undefined;
    } & { [K in Exclude<keyof I, "dec">]: never; }>(base?: I | undefined): DecProto;
    fromPartial<I_1 extends {
        dec?: string | undefined;
    } & {
        dec?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "dec">]: never; }>(object: I_1): DecProto;
};
//# sourceMappingURL=coin.d.ts.map