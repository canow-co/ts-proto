import _m0 from "protobufjs/minimal.js";
export interface KeyValuePair {
    key: string;
    value: string;
}
export declare const KeyValuePair: {
    encode(message: KeyValuePair, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): KeyValuePair;
    fromJSON(object: any): KeyValuePair;
    toJSON(message: KeyValuePair): unknown;
    create<I extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K in Exclude<keyof I, keyof KeyValuePair>]: never; }>(base?: I | undefined): KeyValuePair;
    fromPartial<I_1 extends {
        key?: string | undefined;
        value?: string | undefined;
    } & {
        key?: string | undefined;
        value?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof KeyValuePair>]: never; }>(object: I_1): KeyValuePair;
};
//# sourceMappingURL=common.d.ts.map