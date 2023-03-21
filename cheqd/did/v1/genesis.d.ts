import _m0 from "protobufjs/minimal.js";
import { StateValue } from "./stateValue.js";
/** GenesisState defines the cheqd module's genesis state. */
export interface GenesisState {
    didNamespace: string;
    didList: StateValue[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        didNamespace?: string | undefined;
        didList?: {
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
        }[] | undefined;
    } & {
        didNamespace?: string | undefined;
        didList?: ({
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
        }[] & ({
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
            } & { [K in Exclude<keyof I["didList"][number]["data"], keyof import("../../../google/protobuf/any.js").Any>]: never; }) | undefined;
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
                resources?: (string[] & string[] & { [K_1 in Exclude<keyof I["didList"][number]["metadata"]["resources"], keyof string[]>]: never; }) | undefined;
            } & { [K_2 in Exclude<keyof I["didList"][number]["metadata"], keyof import("./stateValue.js").Metadata>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["didList"][number], keyof StateValue>]: never; })[] & { [K_4 in Exclude<keyof I["didList"], keyof {
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
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        didNamespace?: string | undefined;
        didList?: {
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
        }[] | undefined;
    } & {
        didNamespace?: string | undefined;
        didList?: ({
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
        }[] & ({
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
            } & { [K_6 in Exclude<keyof I_1["didList"][number]["data"], keyof import("../../../google/protobuf/any.js").Any>]: never; }) | undefined;
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
                resources?: (string[] & string[] & { [K_7 in Exclude<keyof I_1["didList"][number]["metadata"]["resources"], keyof string[]>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I_1["didList"][number]["metadata"], keyof import("./stateValue.js").Metadata>]: never; }) | undefined;
        } & { [K_9 in Exclude<keyof I_1["didList"][number], keyof StateValue>]: never; })[] & { [K_10 in Exclude<keyof I_1["didList"], keyof {
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
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
};
//# sourceMappingURL=genesis.d.ts.map