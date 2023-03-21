import _m0 from "protobufjs/minimal.js";
import { Resource, ResourceHeader } from "./resource.js";
export interface QueryGetResourceRequest {
    collectionId: string;
    id: string;
}
export interface QueryResourceResponse {
    resource: Resource | undefined;
}
export interface QueryGetCollectionResourcesRequest {
    collectionId: string;
}
export interface QueryCollectionResourcesResponse {
    resources: ResourceHeader[];
}
export interface QueryGetAllResourceVersionsRequest {
    collectionId: string;
    name: string;
    resourceType: string;
}
export interface QueryGetAllResourceVersionsResponse {
    resources: ResourceHeader[];
}
export declare const QueryGetResourceRequest: {
    encode(message: QueryGetResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetResourceRequest;
    fromJSON(object: any): QueryGetResourceRequest;
    toJSON(message: QueryGetResourceRequest): unknown;
    create<I extends {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryGetResourceRequest>]: never; }>(base?: I | undefined): QueryGetResourceRequest;
    fromPartial<I_1 extends {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryGetResourceRequest>]: never; }>(object: I_1): QueryGetResourceRequest;
};
export declare const QueryResourceResponse: {
    encode(message: QueryResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceResponse;
    fromJSON(object: any): QueryResourceResponse;
    toJSON(message: QueryResourceResponse): unknown;
    create<I extends {
        resource?: {
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
        } | undefined;
    } & {
        resource?: ({
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
            } & { [K in Exclude<keyof I["resource"]["header"], keyof ResourceHeader>]: never; }) | undefined;
            data?: Uint8Array | undefined;
        } & { [K_1 in Exclude<keyof I["resource"], keyof Resource>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "resource">]: never; }>(base?: I | undefined): QueryResourceResponse;
    fromPartial<I_1 extends {
        resource?: {
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
        } | undefined;
    } & {
        resource?: ({
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
            } & { [K_3 in Exclude<keyof I_1["resource"]["header"], keyof ResourceHeader>]: never; }) | undefined;
            data?: Uint8Array | undefined;
        } & { [K_4 in Exclude<keyof I_1["resource"], keyof Resource>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "resource">]: never; }>(object: I_1): QueryResourceResponse;
};
export declare const QueryGetCollectionResourcesRequest: {
    encode(message: QueryGetCollectionResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetCollectionResourcesRequest;
    fromJSON(object: any): QueryGetCollectionResourcesRequest;
    toJSON(message: QueryGetCollectionResourcesRequest): unknown;
    create<I extends {
        collectionId?: string | undefined;
    } & {
        collectionId?: string | undefined;
    } & { [K in Exclude<keyof I, "collectionId">]: never; }>(base?: I | undefined): QueryGetCollectionResourcesRequest;
    fromPartial<I_1 extends {
        collectionId?: string | undefined;
    } & {
        collectionId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "collectionId">]: never; }>(object: I_1): QueryGetCollectionResourcesRequest;
};
export declare const QueryCollectionResourcesResponse: {
    encode(message: QueryCollectionResourcesResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResourcesResponse;
    fromJSON(object: any): QueryCollectionResourcesResponse;
    toJSON(message: QueryCollectionResourcesResponse): unknown;
    create<I extends {
        resources?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] | undefined;
    } & {
        resources?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
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
        } & { [K in Exclude<keyof I["resources"][number], keyof ResourceHeader>]: never; })[] & { [K_1 in Exclude<keyof I["resources"], keyof {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "resources">]: never; }>(base?: I | undefined): QueryCollectionResourcesResponse;
    fromPartial<I_1 extends {
        resources?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] | undefined;
    } & {
        resources?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
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
        } & { [K_3 in Exclude<keyof I_1["resources"][number], keyof ResourceHeader>]: never; })[] & { [K_4 in Exclude<keyof I_1["resources"], keyof {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "resources">]: never; }>(object: I_1): QueryCollectionResourcesResponse;
};
export declare const QueryGetAllResourceVersionsRequest: {
    encode(message: QueryGetAllResourceVersionsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllResourceVersionsRequest;
    fromJSON(object: any): QueryGetAllResourceVersionsRequest;
    toJSON(message: QueryGetAllResourceVersionsRequest): unknown;
    create<I extends {
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
    } & {
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryGetAllResourceVersionsRequest>]: never; }>(base?: I | undefined): QueryGetAllResourceVersionsRequest;
    fromPartial<I_1 extends {
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
    } & {
        collectionId?: string | undefined;
        name?: string | undefined;
        resourceType?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryGetAllResourceVersionsRequest>]: never; }>(object: I_1): QueryGetAllResourceVersionsRequest;
};
export declare const QueryGetAllResourceVersionsResponse: {
    encode(message: QueryGetAllResourceVersionsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetAllResourceVersionsResponse;
    fromJSON(object: any): QueryGetAllResourceVersionsResponse;
    toJSON(message: QueryGetAllResourceVersionsResponse): unknown;
    create<I extends {
        resources?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] | undefined;
    } & {
        resources?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
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
        } & { [K in Exclude<keyof I["resources"][number], keyof ResourceHeader>]: never; })[] & { [K_1 in Exclude<keyof I["resources"], keyof {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, "resources">]: never; }>(base?: I | undefined): QueryGetAllResourceVersionsResponse;
    fromPartial<I_1 extends {
        resources?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] | undefined;
    } & {
        resources?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
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
        } & { [K_3 in Exclude<keyof I_1["resources"][number], keyof ResourceHeader>]: never; })[] & { [K_4 in Exclude<keyof I_1["resources"], keyof {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            resourceType?: string | undefined;
            mediaType?: string | undefined;
            created?: string | undefined;
            checksum?: Uint8Array | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, "resources">]: never; }>(object: I_1): QueryGetAllResourceVersionsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    Resource(request: QueryGetResourceRequest): Promise<QueryResourceResponse>;
    CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse>;
    AllResourceVersions(request: QueryGetAllResourceVersionsRequest): Promise<QueryGetAllResourceVersionsResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Resource(request: QueryGetResourceRequest): Promise<QueryResourceResponse>;
    CollectionResources(request: QueryGetCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse>;
    AllResourceVersions(request: QueryGetAllResourceVersionsRequest): Promise<QueryGetAllResourceVersionsResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=query.d.ts.map