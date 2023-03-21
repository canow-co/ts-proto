import _m0 from "protobufjs/minimal.js";
export interface Resource {
    header: ResourceHeader | undefined;
    data: Uint8Array;
}
export interface ResourceHeader {
    collectionId: string;
    id: string;
    name: string;
    resourceType: string;
    mediaType: string;
    created: string;
    checksum: Uint8Array;
    previousVersionId: string;
    nextVersionId: string;
}
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["header"], keyof ResourceHeader>]: never; }) | undefined;
        data?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I, keyof Resource>]: never; }>(base?: I | undefined): Resource;
    fromPartial<I_1 extends {
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
        } & { [K_2 in Exclude<keyof I_1["header"], keyof ResourceHeader>]: never; }) | undefined;
        data?: Uint8Array | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof Resource>]: never; }>(object: I_1): Resource;
};
export declare const ResourceHeader: {
    encode(message: ResourceHeader, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceHeader;
    fromJSON(object: any): ResourceHeader;
    toJSON(message: ResourceHeader): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof ResourceHeader>]: never; }>(base?: I | undefined): ResourceHeader;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof ResourceHeader>]: never; }>(object: I_1): ResourceHeader;
};
//# sourceMappingURL=resource.d.ts.map