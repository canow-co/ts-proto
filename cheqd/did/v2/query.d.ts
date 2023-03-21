import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { PageRequest, PageResponse } from "../../../cosmos/base/query/v1beta1/pagination.js";
import { DidDocWithMetadata, Metadata } from "./diddoc.js";
/** QueryDidDocRequest is the request type for the Query/DidDoc method */
export interface QueryDidDocRequest {
    /**
     * DID unique identifier of the DID Document to fetch.
     * UUID-style DIDs as well as Indy-style DID are supported.
     *
     * Format: did:canow:<namespace>:<unique-identifier>
     *
     * Examples:
     * - did:canow:mainnet:c82f2b02-bdab-4dd7-b833-3e143745d612
     * - did:canow:testnet:wGHEXrZvJxR8vw5P3UWH1j
     */
    id: string;
}
/** QueryDidDocResponse is the response type for the Query/DidDoc method */
export interface QueryDidDocResponse {
    /**
     * Successful resolution of the DID Document returns the following:
     * - did_doc is the latest version of the DID Document
     * - metadata is is the DID Document metadata associated with the latest version of the DID Document
     */
    value: DidDocWithMetadata | undefined;
}
/** QueryDidDocVersionRequest is the request type for the Query/DidDocVersion method */
export interface QueryDidDocVersionRequest {
    /**
     * DID unique identifier of the DID Document to fetch.
     * UUID-style DIDs as well as Indy-style DID are supported.
     *
     * Format: did:canow:<namespace>:<unique-identifier>
     *
     * Examples:
     * - did:canow:mainnet:c82f2b02-bdab-4dd7-b833-3e143745d612
     * - did:canow:testnet:wGHEXrZvJxR8vw5P3UWH1j
     */
    id: string;
    /**
     * Unique version identifier of the DID Document to fetch.
     * Returns the specified version of the DID Document.
     *
     * Format: <uuid>
     *
     * Example: 93f2573c-eca9-4098-96cb-a1ec676a29ed
     */
    version: string;
}
/** QueryDidDocVersionResponse is the response type for the Query/DidDocVersion method */
export interface QueryDidDocVersionResponse {
    /**
     * Successful resolution of the DID Document returns the following:
     * - did_doc is the requested version of the DID Document
     * - metadata is DID Document metadata associated with the requested version of the DID Document
     */
    value: DidDocWithMetadata | undefined;
}
/** QueryAllDidDocVersionsMetadataRequest is the request type for the Query/AllDidDocVersionsMetadata method */
export interface QueryAllDidDocVersionsMetadataRequest {
    /**
     * DID unique identifier of the DID Document to fetch version metadata.
     * UUID-style DIDs as well as Indy-style DID are supported.
     *
     * Format: did:canow:<namespace>:<unique-identifier>
     *
     * Examples:
     * - did:canow:mainnet:c82f2b02-bdab-4dd7-b833-3e143745d612
     * - did:canow:testnet:wGHEXrZvJxR8vw5P3UWH1j
     */
    id: string;
    /** pagination defines an optional pagination for the request. */
    pagination: PageRequest | undefined;
}
/** QueryAllDidDocVersionsMetadataResponse is the response type for the Query/AllDidDocVersionsMetadata method */
export interface QueryAllDidDocVersionsMetadataResponse {
    /** versions is the list of all versions of the requested DID Document */
    versions: Metadata[];
    /** pagination defines the pagination in the response. */
    pagination: PageResponse | undefined;
}
export declare const QueryDidDocRequest: {
    encode(message: QueryDidDocRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocRequest;
    fromJSON(object: any): QueryDidDocRequest;
    toJSON(message: QueryDidDocRequest): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): QueryDidDocRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): QueryDidDocRequest;
};
export declare const QueryDidDocResponse: {
    encode(message: QueryDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocResponse;
    fromJSON(object: any): QueryDidDocResponse;
    toJSON(message: QueryDidDocResponse): unknown;
    create<I extends {
        value?: {
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } | undefined;
            metadata?: {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        value?: ({
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } | undefined;
            metadata?: {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } | undefined;
        } & {
            didDoc?: ({
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } & {
                context?: (string[] & string[] & { [K in Exclude<keyof I["value"]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof import("./diddoc.js").VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_4 in Exclude<keyof I["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["value"]["didDoc"]["authentication"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["authentication"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                assertionMethod?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_7 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                capabilityInvocation?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                capabilityDelegation?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_13 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                keyAgreement?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_16 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                service?: ({
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] & ({
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                } & {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: (string[] & string[] & { [K_19 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                    accept?: (string[] & string[] & { [K_20 in Exclude<keyof I["value"]["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                    routingKeys?: (string[] & string[] & { [K_21 in Exclude<keyof I["value"]["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof import("./diddoc.js").Service>]: never; })[] & { [K_23 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_24 in Exclude<keyof I["value"]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I["value"]["didDoc"], keyof import("./diddoc.js").DidDoc>]: never; }) | undefined;
            metadata?: ({
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } & {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } & { [K_26 in Exclude<keyof I["value"]["metadata"], keyof Metadata>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_28 in Exclude<keyof I, "value">]: never; }>(base?: I | undefined): QueryDidDocResponse;
    fromPartial<I_1 extends {
        value?: {
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } | undefined;
            metadata?: {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        value?: ({
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } | undefined;
            metadata?: {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } | undefined;
        } & {
            didDoc?: ({
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } & {
                context?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["value"]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_30 in Exclude<keyof I_1["value"]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & { [K_31 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"][number], keyof import("./diddoc.js").VerificationMethod>]: never; })[] & { [K_32 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_33 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_34 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_35 in Exclude<keyof I_1["value"]["didDoc"]["authentication"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                assertionMethod?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_36 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_38 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                capabilityInvocation?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_39 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_41 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                capabilityDelegation?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_42 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_43 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_44 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                keyAgreement?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_45 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_46 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_47 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                service?: ({
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] & ({
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                } & {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["value"]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                    accept?: (string[] & string[] & { [K_49 in Exclude<keyof I_1["value"]["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                    routingKeys?: (string[] & string[] & { [K_50 in Exclude<keyof I_1["value"]["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
                } & { [K_51 in Exclude<keyof I_1["value"]["didDoc"]["service"][number], keyof import("./diddoc.js").Service>]: never; })[] & { [K_52 in Exclude<keyof I_1["value"]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_53 in Exclude<keyof I_1["value"]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_54 in Exclude<keyof I_1["value"]["didDoc"], keyof import("./diddoc.js").DidDoc>]: never; }) | undefined;
            metadata?: ({
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } & {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } & { [K_55 in Exclude<keyof I_1["value"]["metadata"], keyof Metadata>]: never; }) | undefined;
        } & { [K_56 in Exclude<keyof I_1["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_57 in Exclude<keyof I_1, "value">]: never; }>(object: I_1): QueryDidDocResponse;
};
export declare const QueryDidDocVersionRequest: {
    encode(message: QueryDidDocVersionRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocVersionRequest;
    fromJSON(object: any): QueryDidDocVersionRequest;
    toJSON(message: QueryDidDocVersionRequest): unknown;
    create<I extends {
        id?: string | undefined;
        version?: string | undefined;
    } & {
        id?: string | undefined;
        version?: string | undefined;
    } & { [K in Exclude<keyof I, keyof QueryDidDocVersionRequest>]: never; }>(base?: I | undefined): QueryDidDocVersionRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
        version?: string | undefined;
    } & {
        id?: string | undefined;
        version?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof QueryDidDocVersionRequest>]: never; }>(object: I_1): QueryDidDocVersionRequest;
};
export declare const QueryDidDocVersionResponse: {
    encode(message: QueryDidDocVersionResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryDidDocVersionResponse;
    fromJSON(object: any): QueryDidDocVersionResponse;
    toJSON(message: QueryDidDocVersionResponse): unknown;
    create<I extends {
        value?: {
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } | undefined;
            metadata?: {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        value?: ({
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } | undefined;
            metadata?: {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } | undefined;
        } & {
            didDoc?: ({
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } & {
                context?: (string[] & string[] & { [K in Exclude<keyof I["value"]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["value"]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof import("./diddoc.js").VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_4 in Exclude<keyof I["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["value"]["didDoc"]["authentication"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["authentication"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                assertionMethod?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_7 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                capabilityInvocation?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                capabilityDelegation?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_13 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                keyAgreement?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_16 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                service?: ({
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] & ({
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                } & {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: (string[] & string[] & { [K_19 in Exclude<keyof I["value"]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                    accept?: (string[] & string[] & { [K_20 in Exclude<keyof I["value"]["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                    routingKeys?: (string[] & string[] & { [K_21 in Exclude<keyof I["value"]["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof import("./diddoc.js").Service>]: never; })[] & { [K_23 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_24 in Exclude<keyof I["value"]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I["value"]["didDoc"], keyof import("./diddoc.js").DidDoc>]: never; }) | undefined;
            metadata?: ({
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } & {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } & { [K_26 in Exclude<keyof I["value"]["metadata"], keyof Metadata>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_28 in Exclude<keyof I, "value">]: never; }>(base?: I | undefined): QueryDidDocVersionResponse;
    fromPartial<I_1 extends {
        value?: {
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } | undefined;
            metadata?: {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } | undefined;
        } | undefined;
    } & {
        value?: ({
            didDoc?: {
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } | undefined;
            metadata?: {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } | undefined;
        } & {
            didDoc?: ({
                context?: string[] | undefined;
                id?: string | undefined;
                controller?: string[] | undefined;
                verificationMethod?: {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] | undefined;
                authentication?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                assertionMethod?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityInvocation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                capabilityDelegation?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                keyAgreement?: {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] | undefined;
                service?: {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] | undefined;
                alsoKnownAs?: string[] | undefined;
            } & {
                context?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["value"]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_30 in Exclude<keyof I_1["value"]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
                verificationMethod?: ({
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[] & ({
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                } & { [K_31 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"][number], keyof import("./diddoc.js").VerificationMethod>]: never; })[] & { [K_32 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"], keyof {
                    id?: string | undefined;
                    verificationMethodType?: string | undefined;
                    controller?: string | undefined;
                    verificationMaterial?: string | undefined;
                }[]>]: never; }) | undefined;
                authentication?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_33 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_34 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_35 in Exclude<keyof I_1["value"]["didDoc"]["authentication"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                assertionMethod?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_36 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_38 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                capabilityInvocation?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_39 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_41 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                capabilityDelegation?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_42 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_43 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_44 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                keyAgreement?: ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[] & ({
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                } & {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: ({
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } & { [K_45 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_46 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_47 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"], keyof {
                    verificationMethodId?: string | undefined;
                    verificationMethod?: {
                        id?: string | undefined;
                        verificationMethodType?: string | undefined;
                        controller?: string | undefined;
                        verificationMaterial?: string | undefined;
                    } | undefined;
                }[]>]: never; }) | undefined;
                service?: ({
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[] & ({
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                } & {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["value"]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                    accept?: (string[] & string[] & { [K_49 in Exclude<keyof I_1["value"]["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                    routingKeys?: (string[] & string[] & { [K_50 in Exclude<keyof I_1["value"]["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
                } & { [K_51 in Exclude<keyof I_1["value"]["didDoc"]["service"][number], keyof import("./diddoc.js").Service>]: never; })[] & { [K_52 in Exclude<keyof I_1["value"]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_53 in Exclude<keyof I_1["value"]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_54 in Exclude<keyof I_1["value"]["didDoc"], keyof import("./diddoc.js").DidDoc>]: never; }) | undefined;
            metadata?: ({
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } & {
                created?: Date | undefined;
                updated?: Date | undefined;
                deactivated?: boolean | undefined;
                versionId?: string | undefined;
                nextVersionId?: string | undefined;
                previousVersionId?: string | undefined;
            } & { [K_55 in Exclude<keyof I_1["value"]["metadata"], keyof Metadata>]: never; }) | undefined;
        } & { [K_56 in Exclude<keyof I_1["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_57 in Exclude<keyof I_1, "value">]: never; }>(object: I_1): QueryDidDocVersionResponse;
};
export declare const QueryAllDidDocVersionsMetadataRequest: {
    encode(message: QueryAllDidDocVersionsMetadataRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidDocVersionsMetadataRequest;
    fromJSON(object: any): QueryAllDidDocVersionsMetadataRequest;
    toJSON(message: QueryAllDidDocVersionsMetadataRequest): unknown;
    create<I extends {
        id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
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
    } & { [K_3 in Exclude<keyof I, keyof QueryAllDidDocVersionsMetadataRequest>]: never; }>(base?: I | undefined): QueryAllDidDocVersionsMetadataRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
        pagination?: {
            key?: Uint8Array | undefined;
            offset?: string | number | Long | undefined;
            limit?: string | number | Long | undefined;
            countTotal?: boolean | undefined;
            reverse?: boolean | undefined;
        } | undefined;
    } & {
        id?: string | undefined;
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
    } & { [K_7 in Exclude<keyof I_1, keyof QueryAllDidDocVersionsMetadataRequest>]: never; }>(object: I_1): QueryAllDidDocVersionsMetadataRequest;
};
export declare const QueryAllDidDocVersionsMetadataResponse: {
    encode(message: QueryAllDidDocVersionsMetadataResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllDidDocVersionsMetadataResponse;
    fromJSON(object: any): QueryAllDidDocVersionsMetadataResponse;
    toJSON(message: QueryAllDidDocVersionsMetadataResponse): unknown;
    create<I extends {
        versions?: {
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } | undefined;
    } & {
        versions?: ({
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        }[] & ({
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        } & {
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        } & { [K in Exclude<keyof I["versions"][number], keyof Metadata>]: never; })[] & { [K_1 in Exclude<keyof I["versions"], keyof {
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
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
            } & { [K_2 in Exclude<keyof I["pagination"]["total"], keyof Long>]: never; }) | undefined;
        } & { [K_3 in Exclude<keyof I["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_4 in Exclude<keyof I, keyof QueryAllDidDocVersionsMetadataResponse>]: never; }>(base?: I | undefined): QueryAllDidDocVersionsMetadataResponse;
    fromPartial<I_1 extends {
        versions?: {
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        }[] | undefined;
        pagination?: {
            nextKey?: Uint8Array | undefined;
            total?: string | number | Long | undefined;
        } | undefined;
    } & {
        versions?: ({
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        }[] & ({
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        } & {
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["versions"][number], keyof Metadata>]: never; })[] & { [K_6 in Exclude<keyof I_1["versions"], keyof {
            created?: Date | undefined;
            updated?: Date | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            nextVersionId?: string | undefined;
            previousVersionId?: string | undefined;
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
            } & { [K_7 in Exclude<keyof I_1["pagination"]["total"], keyof Long>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I_1["pagination"], keyof PageResponse>]: never; }) | undefined;
    } & { [K_9 in Exclude<keyof I_1, keyof QueryAllDidDocVersionsMetadataResponse>]: never; }>(object: I_1): QueryAllDidDocVersionsMetadataResponse;
};
/** Query defines the gRPC querier service for the DID module */
export interface Query {
    /** Fetch latest version of a DID Document for a given DID */
    DidDoc(request: QueryDidDocRequest): Promise<QueryDidDocResponse>;
    /** Fetch specific version of a DID Document for a given DID */
    DidDocVersion(request: QueryDidDocVersionRequest): Promise<QueryDidDocVersionResponse>;
    /** Fetch list of all versions of DID Documents for a given DID */
    AllDidDocVersionsMetadata(request: QueryAllDidDocVersionsMetadataRequest): Promise<QueryAllDidDocVersionsMetadataResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    DidDoc(request: QueryDidDocRequest): Promise<QueryDidDocResponse>;
    DidDocVersion(request: QueryDidDocVersionRequest): Promise<QueryDidDocVersionResponse>;
    AllDidDocVersionsMetadata(request: QueryAllDidDocVersionsMetadataRequest): Promise<QueryAllDidDocVersionsMetadataResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=query.d.ts.map