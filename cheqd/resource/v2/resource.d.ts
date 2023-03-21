import _m0 from "protobufjs/minimal.js";
/** Resource stores the contents of a DID-Linked Resource */
export interface Resource {
    /** bytes is the raw data of the Resource */
    data: Uint8Array;
}
/** Metadata stores the metadata of a DID-Linked Resource */
export interface Metadata {
    /**
     * collection_id is the ID of the collection that the Resource belongs to. Defined client-side.
     * This field is the unique identifier of the DID linked to this Resource
     * Format: <unique-identifier>
     *
     * Examples:
     * - c82f2b02-bdab-4dd7-b833-3e143745d612
     * - wGHEXrZvJxR8vw5P3UWH1j
     */
    collectionId: string;
    /**
     * id is the ID of the Resource. Defined client-side.
     * This field is a unique identifier for this specific version of the Resource.
     * Format: <uuid>
     */
    id: string;
    /**
     * name is a human-readable name for the Resource. Defined client-side.
     * Does not change between different versions.
     * Example: PassportSchema, EducationTrustRegistry
     */
    name: string;
    /**
     * version is a human-readable semantic version for the Resource. Defined client-side.
     * Stored as a string. OPTIONAL.
     * Example: 1.0.0, v2.1.0
     */
    version: string;
    /**
     * resource_type is a Resource type that identifies what the Resource is. Defined client-side.
     * This is NOT the same as the resource's media type.
     * Example: AnonCredsSchema, StatusList2021
     */
    resourceType: string;
    /** List of alternative URIs for the SAME Resource. */
    alsoKnownAs: AlternativeUri[];
    /**
     * media_type is IANA media type of the Resource. Defined ledger-side.
     * Example: application/json, image/png
     */
    mediaType: string;
    /**
     * created is the time at which the Resource was created. Defined ledger-side.
     * Format: RFC3339
     * Example: 2021-01-01T00:00:00Z
     */
    created: Date | undefined;
    /**
     * checksum is a SHA-256 checksum hash of the Resource. Defined ledger-side.
     * Example: d14a028c2a3a2bc9476102bb288234c415a2b01f828ea62ac5b3e42f
     */
    checksum: string;
    /**
     * previous_version_id is the ID of the previous version of the Resource. Defined ledger-side.
     * This is based on the Resource's name and Resource type to determine whether it's the same Resource.
     * Format: <uuid>
     */
    previousVersionId: string;
    /**
     * next_version_id is the ID of the next version of the Resource. Defined ledger-side.
     * This is based on the Resource's name and Resource type to determine whether it's the same Resource.
     * Format: <uuid>
     */
    nextVersionId: string;
}
/**
 * AlternativeUri are alternative URIs that can be used to access the Resource.
 * By default, at least the DID URI equivalent of the Resource is populated.
 */
export interface AlternativeUri {
    /**
     * uri is the URI of the Resource.
     * Examples:
     * - did:canow:testnet:MjYxNzYKMjYxNzYK/resources/4600ea35-8916-4ac4-b412-55b8f49dd94e
     * - https://resolver..cheqd.net/1.0/identifiers/did:canow:testnet:MjYxNzYKMjYxNzYK/resources/4600ea35-8916-4ac4-b412-55b8f49dd94e
     * - https://example.com/example.json
     * - https://gateway.ipfs.io/ipfs/bafybeihetj2ng3d74k7t754atv2s5dk76pcqtvxls6dntef3xa6rax25xe
     * - ipfs://bafybeihetj2ng3d74k7t754atv2s5dk76pcqtvxls6dntef3xa6rax25xe
     */
    uri: string;
    /**
     * description is a human-readable description of the URI. Defined client-side.
     * Examples:
     * - did-uri
     * - http-uri
     * - ipfs-uri
     */
    description: string;
}
/** ResourceWithMetadata describes the overall structure of a DID-Linked Resource */
export interface ResourceWithMetadata {
    resource: Resource | undefined;
    metadata: Metadata | undefined;
}
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Resource;
    fromJSON(object: any): Resource;
    toJSON(message: Resource): unknown;
    create<I extends {
        data?: Uint8Array | undefined;
    } & {
        data?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, "data">]: never; }>(base?: I | undefined): Resource;
    fromPartial<I_1 extends {
        data?: Uint8Array | undefined;
    } & {
        data?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, "data">]: never; }>(object: I_1): Resource;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_1 in Exclude<keyof I["alsoKnownAs"], keyof {
            uri?: string | undefined;
            description?: string | undefined;
        }[]>]: never; }) | undefined;
        mediaType?: string | undefined;
        created?: Date | undefined;
        checksum?: string | undefined;
        previousVersionId?: string | undefined;
        nextVersionId?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof Metadata>]: never; }>(base?: I | undefined): Metadata;
    fromPartial<I_1 extends {
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
        } & { [K_3 in Exclude<keyof I_1["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_4 in Exclude<keyof I_1["alsoKnownAs"], keyof {
            uri?: string | undefined;
            description?: string | undefined;
        }[]>]: never; }) | undefined;
        mediaType?: string | undefined;
        created?: Date | undefined;
        checksum?: string | undefined;
        previousVersionId?: string | undefined;
        nextVersionId?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof Metadata>]: never; }>(object: I_1): Metadata;
};
export declare const AlternativeUri: {
    encode(message: AlternativeUri, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): AlternativeUri;
    fromJSON(object: any): AlternativeUri;
    toJSON(message: AlternativeUri): unknown;
    create<I extends {
        uri?: string | undefined;
        description?: string | undefined;
    } & {
        uri?: string | undefined;
        description?: string | undefined;
    } & { [K in Exclude<keyof I, keyof AlternativeUri>]: never; }>(base?: I | undefined): AlternativeUri;
    fromPartial<I_1 extends {
        uri?: string | undefined;
        description?: string | undefined;
    } & {
        uri?: string | undefined;
        description?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof AlternativeUri>]: never; }>(object: I_1): AlternativeUri;
};
export declare const ResourceWithMetadata: {
    encode(message: ResourceWithMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): ResourceWithMetadata;
    fromJSON(object: any): ResourceWithMetadata;
    toJSON(message: ResourceWithMetadata): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["resource"], "data">]: never; }) | undefined;
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
            } & { [K_1 in Exclude<keyof I["metadata"]["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_2 in Exclude<keyof I["metadata"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_3 in Exclude<keyof I["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof ResourceWithMetadata>]: never; }>(base?: I | undefined): ResourceWithMetadata;
    fromPartial<I_1 extends {
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
        } & { [K_5 in Exclude<keyof I_1["resource"], "data">]: never; }) | undefined;
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
            } & { [K_6 in Exclude<keyof I_1["metadata"]["alsoKnownAs"][number], keyof AlternativeUri>]: never; })[] & { [K_7 in Exclude<keyof I_1["metadata"]["alsoKnownAs"], keyof {
                uri?: string | undefined;
                description?: string | undefined;
            }[]>]: never; }) | undefined;
            mediaType?: string | undefined;
            created?: Date | undefined;
            checksum?: string | undefined;
            previousVersionId?: string | undefined;
            nextVersionId?: string | undefined;
        } & { [K_8 in Exclude<keyof I_1["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof ResourceWithMetadata>]: never; }>(object: I_1): ResourceWithMetadata;
};
//# sourceMappingURL=resource.d.ts.map