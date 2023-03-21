import _m0 from "protobufjs/minimal.js";
import { SignInfo } from "../../did/v2/tx.js";
import { AlternativeUri, Metadata } from "./resource.js";
/**
 * MsgCreateResource defines the Msg/CreateResource request type.
 * It describes the parameters of a request for creating a resource.
 */
export interface MsgCreateResource {
    /** Payload containing the resource to be created. */
    payload: MsgCreateResourcePayload | undefined;
    /** Signatures of the corresponding DID Document's controller(s). */
    signatures: SignInfo[];
}
/**
 * MsgCreateResourcePayload defines the structure of the payload for creating a resource.
 *
 * If a resource with the given id does not exist already,
 * it will be created. The resource will be created in the resource collection.
 *
 * If a resource with the given id, collection_id already exists, an error code 2200 will be returned.
 *
 * A new version of the resource in an existing collection will be created,
 * if a resource in that collection with the same name, resource_type and empty next_version_id exists.
 *
 * An update operation is not possible, because the resource is immutable by design.
 */
export interface MsgCreateResourcePayload {
    /** data is a byte-representation of the actual Data the user wants to store. */
    data: Uint8Array;
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
    /**
     * name is a human-readable name of the resource.
     * Format: <string>
     *
     * Does not change between different versions.
     * Example: PassportSchema, EducationTrustRegistry
     */
    name: string;
    /**
     * version is a version of the resource.
     * Format: <string>
     * Stored as a string. OPTIONAL.
     *
     * Example: 1.0.0, v2.1.0
     */
    version: string;
    /**
     * resource_type is a type of the resource.
     * Format: <string>
     *
     * This is NOT the same as the resource's media type.
     * Example: AnonCredsSchema, StatusList2021
     */
    resourceType: string;
    /** also_known_as is a list of URIs that can be used to get the resource. */
    alsoKnownAs: AlternativeUri[];
}
export interface MsgCreateResourceResponse {
    /** Return the created resource metadata. */
    resource: Metadata | undefined;
}
export declare const MsgCreateResource: {
    encode(message: MsgCreateResource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResource;
    fromJSON(object: any): MsgCreateResource;
    toJSON(message: MsgCreateResource): unknown;
    create<I extends {
        payload?: {
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
        } & {
            data?: Uint8Array | undefined;
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
            } & { [K in Exclude<keyof I["payload"]["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_2 in Exclude<keyof I["payload"], keyof MsgCreateResourcePayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_3 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_4 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I, keyof MsgCreateResource>]: never; }>(base?: I | undefined): MsgCreateResource;
    fromPartial<I_1 extends {
        payload?: {
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            data?: Uint8Array | undefined;
            collectionId?: string | undefined;
            id?: string | undefined;
            name?: string | undefined;
            version?: string | undefined;
            resourceType?: string | undefined;
            alsoKnownAs?: {
                uri?: string | undefined;
                description?: string | undefined;
            }[] | undefined;
        } & {
            data?: Uint8Array | undefined;
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
            } & { [K_6 in Exclude<keyof I_1["payload"]["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_7 in Exclude<keyof I_1["payload"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I_1["payload"], keyof MsgCreateResourcePayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_9 in Exclude<keyof I_1["signatures"][number], keyof SignInfo>]: never; })[] & { [K_10 in Exclude<keyof I_1["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_11 in Exclude<keyof I_1, keyof MsgCreateResource>]: never; }>(object: I_1): MsgCreateResource;
};
export declare const MsgCreateResourcePayload: {
    encode(message: MsgCreateResourcePayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourcePayload;
    fromJSON(object: any): MsgCreateResourcePayload;
    toJSON(message: MsgCreateResourcePayload): unknown;
    create<I extends {
        data?: Uint8Array | undefined;
        collectionId?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        version?: string | undefined;
        resourceType?: string | undefined;
        alsoKnownAs?: {
            uri?: string | undefined;
            description?: string | undefined;
        }[] | undefined;
    } & {
        data?: Uint8Array | undefined;
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
        } & { [K in Exclude<keyof I["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["alsoKnownAs"], keyof {
            uri?: string | undefined;
            description?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_2 in Exclude<keyof I, keyof MsgCreateResourcePayload>]: never; }>(base?: I | undefined): MsgCreateResourcePayload;
    fromPartial<I_1 extends {
        data?: Uint8Array | undefined;
        collectionId?: string | undefined;
        id?: string | undefined;
        name?: string | undefined;
        version?: string | undefined;
        resourceType?: string | undefined;
        alsoKnownAs?: {
            uri?: string | undefined;
            description?: string | undefined;
        }[] | undefined;
    } & {
        data?: Uint8Array | undefined;
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
        } & { [K_3 in Exclude<keyof I_1["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_4 in Exclude<keyof I_1["alsoKnownAs"], keyof {
            uri?: string | undefined;
            description?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof MsgCreateResourcePayload>]: never; }>(object: I_1): MsgCreateResourcePayload;
};
export declare const MsgCreateResourceResponse: {
    encode(message: MsgCreateResourceResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResourceResponse;
    fromJSON(object: any): MsgCreateResourceResponse;
    toJSON(message: MsgCreateResourceResponse): unknown;
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
            } & { [K in Exclude<keyof I["resource"]["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["resource"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_2 in Exclude<keyof I["resource"], keyof Metadata>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, "resource">]: never; }>(base?: I | undefined): MsgCreateResourceResponse;
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
            } & { [K_4 in Exclude<keyof I_1["resource"]["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_5 in Exclude<keyof I_1["resource"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_6 in Exclude<keyof I_1["resource"], keyof Metadata>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, "resource">]: never; }>(object: I_1): MsgCreateResourceResponse;
};
/** Msg defines the Cosmos SDK Msg service for the cheqd.resource.v2 module. */
export interface Msg {
    /** CreateResource defines a method for creating a resource. */
    CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateResource(request: MsgCreateResource): Promise<MsgCreateResourceResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=tx.d.ts.map