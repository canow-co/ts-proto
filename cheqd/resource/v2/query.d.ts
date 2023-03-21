import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { Metadata, ResourceWithMetadata } from "./resource.js";
/** QueryResourceRequest is the request type for the Query/Resource RPC method */
export interface QueryResourceRequest {
    /**
     * collection_id is an identifier of the DidDocument the resource belongs to.
     * Format: <unique-identifier>
     *
     * Examples:
     * - c82f2b02-bdab-4dd7-b833-3e143745d612
     * - wGHEXrZvJxR8vw5P3UWH1j
     */
    collectionId: string;
    /**
     * id is a unique id of the resource.
     * Format: <uuid>
     */
    id: string;
}
/** QueryResourceResponse is the response type for the Query/Resource RPC method */
export interface QueryResourceResponse {
    /**
     * Successful resolution of the resource returns the following:
     * - resource is the requested resource
     * - metadata is the resource metadata associated with the requested resource
     */
    resource: ResourceWithMetadata | undefined;
}
/** QueryResourceMetadataRequest is the request type for the Query/ResourceMetadata RPC method */
export interface QueryResourceMetadataRequest {
    /**
     * collection_id is an identifier of the DidDocument the resource belongs to.
     * Format: <unique-identifier>
     *
     * Examples:
     * - c82f2b02-bdab-4dd7-b833-3e143745d612
     * - wGHEXrZvJxR8vw5P3UWH1j
     */
    collectionId: string;
    /**
     * id is a unique id of the resource.
     * Format: <uuid>
     */
    id: string;
}
/** QueryResourceMetadataResponse is the response type for the Query/ResourceMetadata RPC method */
export interface QueryResourceMetadataResponse {
    /** resource is the requested resource metadata */
    resource: Metadata | undefined;
}
/** QueryCollectionResourcesRequest is the request type for the Query/CollectionResources RPC method */
export interface QueryCollectionResourcesRequest {
    /**
     * collection_id is an identifier of the DidDocument the resource belongs to.
     * Format: <unique-identifier>
     *
     * Examples:
     * - c82f2b02-bdab-4dd7-b833-3e143745d612
     * - wGHEXrZvJxR8vw5P3UWH1j
     */
    collectionId: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryCollectionResourcesResponse is the response type for the Query/CollectionResources RPC method */
export interface QueryCollectionResourcesResponse {
    /** resources is the requested collection of resource metadata */
    resources: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
export declare const QueryResourceRequest: {
    encode(message: QueryResourceRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceRequest;
    fromJSON(object: any): QueryResourceRequest;
    toJSON(message: QueryResourceRequest): unknown;
    create<I extends {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryResourceRequest>]: never; }>(base?: I | undefined): QueryResourceRequest;
    fromPartial<I_1 extends {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryResourceRequest>]: never; }>(object: I_1): QueryResourceRequest;
};
export declare const QueryResourceResponse: {
    encode(message: QueryResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceResponse;
    fromJSON(object: any): QueryResourceResponse;
    toJSON(message: QueryResourceResponse): unknown;
    create<I extends {
        resource?: {
            resource?: {
                data?: Uint8Array | undefined;
            } | undefined;
            metadata?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        resource?: ({
            resource?: {
                data?: Uint8Array | undefined;
            } | undefined;
            metadata?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } & {
            resource?: ({
                data?: Uint8Array | undefined;
            } & {
                data?: Uint8Array | undefined;
            } & { [K in Exclude<keyof I["resource"]["resource"], "data">]: never; }) | undefined;
            metadata?: ({
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: ({
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    description?: string | undefined;
                } & {
                    uri?: string | undefined;
                    description?: string | undefined;
                } & { [K_1 in Exclude<keyof I["resource"]["metadata"]["alsoKnownAs"][number], keyof import("./resource.js").AlternativeUri>]: never; })[] & { [K_2 in Exclude<keyof I["resource"]["metadata"]["alsoKnownAs"], keyof {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[]>]: never; }) | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K_3 in Exclude<keyof I["resource"]["metadata"], keyof Metadata>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["resource"], keyof ResourceWithMetadata>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, "resource">]: never; }>(base?: I | undefined): QueryResourceResponse;
    fromPartial<I_1 extends {
        resource?: {
            resource?: {
                data?: Uint8Array | undefined;
            } | undefined;
            metadata?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        resource?: ({
            resource?: {
                data?: Uint8Array | undefined;
            } | undefined;
            metadata?: {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } | undefined;
        } & {
            resource?: ({
                data?: Uint8Array | undefined;
            } & {
                data?: Uint8Array | undefined;
            } & { [K_6 in Exclude<keyof I_1["resource"]["resource"], "data">]: never; }) | undefined;
            metadata?: ({
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & {
                collectionId?: string | undefined;
                id?: string | undefined;
                name?: string | undefined;
                version?: string | undefined;
                resourceType?: string | undefined;
                alsoKnownAs?: ({
                    uri?: string | undefined;
                    description?: string | undefined;
                }[] & ({
                    uri?: string | undefined;
                    description?: string | undefined;
                } & {
                    uri?: string | undefined;
                    description?: string | undefined;
                } & { [K_7 in Exclude<keyof I_1["resource"]["metadata"]["alsoKnownAs"][number], keyof import("./resource.js").AlternativeUri>]: never; })[] & { [K_8 in Exclude<keyof I_1["resource"]["metadata"]["alsoKnownAs"], keyof {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[]>]: never; }) | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K_9 in Exclude<keyof I_1["resource"]["metadata"], keyof Metadata>]: never; }) | undefined;
        } & { [K_10 in Exclude<keyof I_1["resource"], keyof ResourceWithMetadata>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, "resource">]: never; }>(object: I_1): QueryResourceResponse;
};
export declare const QueryResourceMetadataRequest: {
    encode(message: QueryResourceMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceMetadataRequest;
    fromJSON(object: any): QueryResourceMetadataRequest;
    toJSON(message: QueryResourceMetadataRequest): unknown;
    create<I extends {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryResourceMetadataRequest>]: never; }>(base?: I | undefined): QueryResourceMetadataRequest;
    fromPartial<I_1 extends {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & {
        collectionId?: string | undefined;
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryResourceMetadataRequest>]: never; }>(object: I_1): QueryResourceMetadataRequest;
};
export declare const QueryResourceMetadataResponse: {
    encode(message: QueryResourceMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryResourceMetadataResponse;
    fromJSON(object: any): QueryResourceMetadataResponse;
    toJSON(message: QueryResourceMetadataResponse): unknown;
    create<I extends {
        resource?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } | undefined;
    } & {
        resource?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                uri?: string | undefined;
                description?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                description?: string | undefined;
            } & {
                uri?: string | undefined;
                description?: string | undefined;
            } & { [K in Exclude<keyof I["resource"]["alsoKnownAs"][number], keyof import("./resource.js").AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["resource"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["resource"], keyof Metadata>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "resource">]: never; }>(base?: I | undefined): QueryResourceMetadataResponse;
    fromPartial<I_1 extends {
        resource?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } | undefined;
    } & {
        resource?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                uri?: string | undefined;
                description?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                description?: string | undefined;
            } & {
                uri?: string | undefined;
                description?: string | undefined;
            } & { [K_4 in Exclude<keyof I_1["resource"]["alsoKnownAs"][number], keyof import("./resource.js").AlternativeUri>]: never; })[] & { [K_5 in Exclude<keyof I_1["resource"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["resource"], keyof Metadata>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "resource">]: never; }>(object: I_1): QueryResourceMetadataResponse;
};
export declare const QueryCollectionResourcesRequest: {
    encode(message: QueryCollectionResourcesRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResourcesRequest;
    fromJSON(object: any): QueryCollectionResourcesRequest;
    toJSON(message: QueryCollectionResourcesRequest): unknown;
    create<I extends {
        collectionId?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        collectionId?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K in Exclude<keyof I["pagination"]["offset"], keyof Long>]: never; }) | undefined;
            limit?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_1 in Exclude<keyof I["pagination"]["limit"], keyof Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_2 in Exclude<keyof I["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof QueryCollectionResourcesRequest>]: never; }>(base?: I | undefined): QueryCollectionResourcesRequest;
    fromPartial<I_1 extends {
        collectionId?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        collectionId?: string | undefined;
        pagination?: ({
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & {
            key?: Uint8Array | undefined;
            offset?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_4 in Exclude<keyof I_1["pagination"]["offset"], keyof Long>]: never; }) | undefined;
            limit?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_5 in Exclude<keyof I_1["pagination"]["limit"], keyof Long>]: never; }) | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } & { [K_6 in Exclude<keyof I_1["pagination"], keyof PageRequest>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof QueryCollectionResourcesRequest>]: never; }>(object: I_1): QueryCollectionResourcesRequest;
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
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } | undefined;
    } & {
        resources?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                uri?: string | undefined;
                description?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                description?: string | undefined;
            } & {
                uri?: string | undefined;
                description?: string | undefined;
            } & { [K in Exclude<keyof I["resources"][number]["alsoKnownAs"][number], keyof import("./resource.js").AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["resources"][number]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["resources"][number], keyof Metadata>]: never; })[] & { [K_3 in Exclude<keyof I["resources"], keyof {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_4 in Exclude<keyof I["pagination"]["total"], keyof Long>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_6 in Exclude<keyof I, keyof QueryCollectionResourcesResponse>]: never; }>(base?: I | undefined): QueryCollectionResourcesResponse;
    fromPartial<I_1 extends {
        resources?: {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } | undefined;
    } & {
        resources?: ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[] & ({
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: ({
                uri?: string | undefined;
                description?: string | undefined;
            }[] & ({
                uri?: string | undefined;
                description?: string | undefined;
            } & {
                uri?: string | undefined;
                description?: string | undefined;
            } & { [K_7 in Exclude<keyof I_1["resources"][number]["alsoKnownAs"][number], keyof import("./resource.js").AlternativeUri>]: never; })[] & { [K_8 in Exclude<keyof I_1["resources"][number]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_9 in Exclude<keyof I_1["resources"][number], keyof Metadata>]: never; })[] & { [K_10 in Exclude<keyof I_1["resources"], keyof {
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        }[]>]: never; }) | undefined;
        pagination?: ({
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } & {
            nextKey?: Uint8Array | undefined;
            total?: string | number | (Long & {
                high: number;
                low: number;
                unsigned: boolean;
                add: (addend: string | number | Long) => Long;
                and: (other: string | number | Long) => Long;
                compare: (other: string | number | Long) => number;
                comp: (other: string | number | Long) => number;
                divide: (divisor: string | number | Long) => Long;
                div: (divisor: string | number | Long) => Long;
                equals: (other: string | number | Long) => boolean;
                eq: (other: string | number | Long) => boolean;
                getHighBits: () => number;
                getHighBitsUnsigned: () => number;
                getLowBits: () => number;
                getLowBitsUnsigned: () => number;
                getNumBitsAbs: () => number;
                greaterThan: (other: string | number | Long) => boolean;
                gt: (other: string | number | Long) => boolean;
                greaterThanOrEqual: (other: string | number | Long) => boolean;
                gte: (other: string | number | Long) => boolean;
                isEven: () => boolean;
                isNegative: () => boolean;
                isOdd: () => boolean;
                isPositive: () => boolean;
                isZero: () => boolean;
                lessThan: (other: string | number | Long) => boolean;
                lt: (other: string | number | Long) => boolean;
                lessThanOrEqual: (other: string | number | Long) => boolean;
                lte: (other: string | number | Long) => boolean;
                modulo: (other: string | number | Long) => Long;
                mod: (other: string | number | Long) => Long;
                multiply: (multiplier: string | number | Long) => Long;
                mul: (multiplier: string | number | Long) => Long;
                negate: () => Long;
                neg: () => Long;
                not: () => Long;
                notEquals: (other: string | number | Long) => boolean;
                neq: (other: string | number | Long) => boolean;
                or: (other: string | number | Long) => Long;
                shiftLeft: (numBits: number | Long) => Long;
                shl: (numBits: number | Long) => Long;
                shiftRight: (numBits: number | Long) => Long;
                shr: (numBits: number | Long) => Long;
                shiftRightUnsigned: (numBits: number | Long) => Long;
                shru: (numBits: number | Long) => Long;
                subtract: (subtrahend: string | number | Long) => Long;
                sub: (subtrahend: string | number | Long) => Long;
                toInt: () => number;
                toNumber: () => number;
                toBytes: (le?: boolean | undefined) => number[];
                toBytesLE: () => number[];
                toBytesBE: () => number[];
                toSigned: () => Long;
                toString: (radix?: number | undefined) => string;
                toUnsigned: () => Long;
                xor: (other: string | number | Long) => Long;
            } & { [K_11 in Exclude<keyof I_1["pagination"]["total"], keyof Long>]: never; }) | undefined;
        } & { [K_12 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_13 in Exclude<keyof I_1, keyof QueryCollectionResourcesResponse>]: never; }>(object: I_1): QueryCollectionResourcesResponse;
};
/** Query defines the gRPC querier service for the resource module */
export interface Query {
    /** Fetch data/payload for a specific resource (without metadata) */
    Resource(request: QueryResourceRequest): Promise<QueryResourceResponse>;
    /** Fetch only metadata for a specific resource */
    ResourceMetadata(request: QueryResourceMetadataRequest): Promise<QueryResourceMetadataResponse>;
    /** Fetch metadata for all resources in a collection */
    CollectionResources(request: QueryCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Resource(request: QueryResourceRequest): Promise<QueryResourceResponse>;
    ResourceMetadata(request: QueryResourceMetadataRequest): Promise<QueryResourceMetadataResponse>;
    CollectionResources(request: QueryCollectionResourcesRequest): Promise<QueryCollectionResourcesResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=query.d.ts.map