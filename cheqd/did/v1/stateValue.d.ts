import _m0 from "protobufjs/minimal.js";
import { Any } from "../../../google/protobuf/any.js";
export interface StateValue {
    data: Any | undefined;
    /** optional */
    metadata: Metadata | undefined;
}
/** metadata */
export interface Metadata {
    created: string;
    updated: string;
    deactivated: boolean;
    versionId: string;
    resources: string[];
}
export declare const StateValue: {
    encode(message: StateValue, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): StateValue;
    fromJSON(object: any): StateValue;
    toJSON(message: StateValue): unknown;
    create<I extends {
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        metadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } | undefined;
    } & {
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K in Exclude<keyof I["data"], keyof Any>]: never; }) | undefined;
        metadata?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } & {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: (string[] & string[] & { [K_1 in Exclude<keyof I["metadata"]["resources"], keyof string[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof StateValue>]: never; }>(base?: I | undefined): StateValue;
    fromPartial<I_1 extends {
        data?: {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } | undefined;
        metadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } | undefined;
    } & {
        data?: ({
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & {
            typeUrl?: string | undefined;
            value?: Uint8Array | undefined;
        } & { [K_4 in Exclude<keyof I_1["data"], keyof Any>]: never; }) | undefined;
        metadata?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } & {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["metadata"]["resources"], keyof string[]>]: never; }) | undefined;
        } & { [K_6 in Exclude<keyof I_1["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof StateValue>]: never; }>(object: I_1): StateValue;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    create<I extends {
        created?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
        versionId?: string | undefined;
        resources?: string[] | undefined;
    } & {
        created?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
        versionId?: string | undefined;
        resources?: (string[] & string[] & { [K in Exclude<keyof I["resources"], keyof string[]>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Metadata>]: never; }>(base?: I | undefined): Metadata;
    fromPartial<I_1 extends {
        created?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
        versionId?: string | undefined;
        resources?: string[] | undefined;
    } & {
        created?: string | undefined;
        updated?: string | undefined;
        deactivated?: boolean | undefined;
        versionId?: string | undefined;
        resources?: (string[] & string[] & { [K_2 in Exclude<keyof I_1["resources"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Metadata>]: never; }>(object: I_1): Metadata;
};
//# sourceMappingURL=stateValue.d.ts.map