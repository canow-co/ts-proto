import _m0 from "protobufjs/minimal.js";
import { Resource } from "./resource.js";
/** GenesisState defines the cheqd module's genesis state. */
export interface GenesisState {
    resourceList: Resource[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        resourceList?: {
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        resourceList?: ({
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        } & {
            header?: ({
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K in Exclude<keyof I["resourceList"][number]["header"], keyof import("./resource.js").ResourceHeader>]: never; }) | undefined;
            data?: Uint8Array | undefined;
        } & { [K_1 in Exclude<keyof I["resourceList"][number], keyof Resource>]: never; })[] & { [K_2 in Exclude<keyof I["resourceList"], keyof {
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "resourceList">]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        resourceList?: {
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        resourceList?: ({
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        }[] & ({
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        } & {
            header?: ({
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K_4 in Exclude<keyof I_1["resourceList"][number]["header"], keyof import("./resource.js").ResourceHeader>]: never; }) | undefined;
            data?: Uint8Array | undefined;
        } & { [K_5 in Exclude<keyof I_1["resourceList"][number], keyof Resource>]: never; })[] & { [K_6 in Exclude<keyof I_1["resourceList"], keyof {
            header?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                resourceType?: string | undefined;
                mediaType?: string | undefined;
                created?: string | undefined;
                checksum?: Uint8Array | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
            data?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "resourceList">]: never; }>(object: I_1): GenesisState;
};
//# sourceMappingURL=genesis.d.ts.map