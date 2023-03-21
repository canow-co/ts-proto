import _m0 from "protobufjs/minimal.js";
/**
 * DidDoc defines a DID Document, as defined in the DID Core specification.
 * Documentation: https://www.w3.org/TR/did-core/
 */
export interface DidDoc {
    /**
     * context is a list of URIs used to identify the context of the DID document.
     * Default: https://www.w3.org/ns/did/v1
     */
    context: string[];
    /**
     * id is the DID of the DID document.
     * Format: did:canow:<namespace>:<unique-identifier>
     */
    id: string;
    /** controller is a list of DIDs that are allowed to control the DID document. */
    controller: string[];
    /**
     * verificationMethod is a list of verification methods that can be used to
     * verify a digital signature or cryptographic proof.
     */
    verificationMethod: VerificationMethod[];
    /**
     * authentication is a list of verification methods that can be used to
     * authenticate as the DID subject.
     */
    authentication: VerificationRelationship[];
    /**
     * assertionMethod is a list of verification methods that can be used to
     * assert statements as the DID subject.
     */
    assertionMethod: VerificationRelationship[];
    /**
     * capabilityInvocation is a list of verification methods that can be used to
     * invoke capabilities as the DID subject.
     */
    capabilityInvocation: VerificationRelationship[];
    /**
     * capabilityDelegation is a list of verification methods that can be used to
     * delegate capabilities as the DID subject.
     */
    capabilityDelegation: VerificationRelationship[];
    /**
     * keyAgreement is a list of verification methods that can be used to perform
     * key agreement as the DID subject.
     */
    keyAgreement: VerificationRelationship[];
    /** service is a list of services that can be used to interact with the DID subject. */
    service: Service[];
    /** alsoKnownAs is a list of DIDs that are known to refer to the same DID subject. */
    alsoKnownAs: string[];
}
/**
 * VerificationMethod defines a verification method, as defined in the DID Core specification.
 * Documentation: https://www.w3.org/TR/did-core/#verification-methods
 */
export interface VerificationMethod {
    /**
     * id is the unique identifier of the verification method.
     * Format: did:canow:<namespace>:<unique-identifier>#<key-id>
     */
    id: string;
    /**
     * type is the type of the verification method.
     * Example: Ed25519VerificationKey2020
     */
    verificationMethodType: string;
    /**
     * controller is the DID of the controller of the verification method.
     * Format: did:canow:<namespace>:<unique-identifier>
     */
    controller: string;
    /**
     * verification_material is the public key of the verification method.
     * Commonly used verification material types: publicJwk, publicKeyBase58, publicKeyMultibase
     */
    verificationMaterial: string;
}
export interface VerificationRelationship {
    verificationMethodId: string;
    verificationMethod: VerificationMethod | undefined;
}
/**
 * Service defines a service, as defined in the DID Core specification.
 * Documentation: https://www.w3.org/TR/did-core/#services
 */
export interface Service {
    /**
     * id is the unique identifier of the service.
     * Format: did:canow:<namespace>:<unique-identifier>#<service-id>
     */
    id: string;
    /**
     * type is the type of the service.
     * Example: LinkedResource
     */
    serviceType: string;
    /**
     * serviceEndpoint is the endpoint of the service.
     * Example: https://example.com/endpoint
     */
    serviceEndpoint: string[];
    accept: string[];
    routingKeys: string[];
}
/**
 * DidDocWithMetadata defines a DID Document with metadata, as defined in the DID Core specification.
 * Contains the DID Document, as well as DID Document metadata.
 */
export interface DidDocWithMetadata {
    /** didDocument is the DID Document. */
    didDoc: DidDoc | undefined;
    /** didDocumentMetadata is the DID Document metadata. */
    metadata: Metadata | undefined;
}
/**
 * Metadata defines DID Document metadata, as defined in the DID Core specification.
 * Documentation: https://www.w3.org/TR/did-core/#did-document-metadata-properties
 */
export interface Metadata {
    /**
     * created is the timestamp of the creation of the DID Document.
     * Format: RFC3339
     * Example: 2021-03-10T15:16:17Z
     */
    created: Date | undefined;
    /**
     * updated is the timestamp of the last update of the DID Document.
     * Format: RFC3339
     * Example: 2021-03-10T15:16:17Z
     */
    updated: Date | undefined;
    /**
     * deactivated is a flag that indicates whether the DID Document is deactivated.
     * Default: false
     */
    deactivated: boolean;
    /**
     * version_id is the version identifier of the DID Document.
     * Format: UUID
     * Example: 123e4567-e89b-12d3-a456-426655440000
     */
    versionId: string;
    /**
     * next_version_id is the version identifier of the next version of the DID Document.
     * Format: UUID
     * Example: 123e4567-e89b-12d3-a456-426655440000
     */
    nextVersionId: string;
    /**
     * previous_version_id is the version identifier of the previous version of the DID Document.
     * Format: UUID
     * Example: 123e4567-e89b-12d3-a456-426655440000
     */
    previousVersionId: string;
}
export declare const DidDoc: {
    encode(message: DidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidDoc;
    fromJSON(object: any): DidDoc;
    toJSON(message: DidDoc): unknown;
    create<I extends {
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
        context?: (string[] & string[] & { [K in Exclude<keyof I["context"], keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["controller"], keyof string[]>]: never; }) | undefined;
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
        } & { [K_2 in Exclude<keyof I["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["verificationMethod"], keyof {
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
            } & { [K_4 in Exclude<keyof I["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_5 in Exclude<keyof I["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["authentication"], keyof {
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
            } & { [K_7 in Exclude<keyof I["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_8 in Exclude<keyof I["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["assertionMethod"], keyof {
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
            } & { [K_10 in Exclude<keyof I["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_11 in Exclude<keyof I["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["capabilityInvocation"], keyof {
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
            } & { [K_13 in Exclude<keyof I["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["capabilityDelegation"], keyof {
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
            } & { [K_16 in Exclude<keyof I["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_17 in Exclude<keyof I["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["keyAgreement"], keyof {
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
            serviceEndpoint?: (string[] & string[] & { [K_19 in Exclude<keyof I["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
            accept?: (string[] & string[] & { [K_20 in Exclude<keyof I["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
            routingKeys?: (string[] & string[] & { [K_21 in Exclude<keyof I["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
        } & { [K_22 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_23 in Exclude<keyof I["service"], keyof {
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
            accept?: string[] | undefined;
            routingKeys?: string[] | undefined;
        }[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_24 in Exclude<keyof I["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
    } & { [K_25 in Exclude<keyof I, keyof DidDoc>]: never; }>(base?: I | undefined): DidDoc;
    fromPartial<I_1 extends {
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
        context?: (string[] & string[] & { [K_26 in Exclude<keyof I_1["context"], keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_27 in Exclude<keyof I_1["controller"], keyof string[]>]: never; }) | undefined;
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
        } & { [K_28 in Exclude<keyof I_1["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_29 in Exclude<keyof I_1["verificationMethod"], keyof {
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
            } & { [K_30 in Exclude<keyof I_1["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_31 in Exclude<keyof I_1["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_32 in Exclude<keyof I_1["authentication"], keyof {
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
            } & { [K_33 in Exclude<keyof I_1["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_34 in Exclude<keyof I_1["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_35 in Exclude<keyof I_1["assertionMethod"], keyof {
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
            } & { [K_36 in Exclude<keyof I_1["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_37 in Exclude<keyof I_1["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_38 in Exclude<keyof I_1["capabilityInvocation"], keyof {
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
            } & { [K_39 in Exclude<keyof I_1["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_40 in Exclude<keyof I_1["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_41 in Exclude<keyof I_1["capabilityDelegation"], keyof {
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
            } & { [K_42 in Exclude<keyof I_1["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
        } & { [K_43 in Exclude<keyof I_1["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_44 in Exclude<keyof I_1["keyAgreement"], keyof {
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
            serviceEndpoint?: (string[] & string[] & { [K_45 in Exclude<keyof I_1["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
            accept?: (string[] & string[] & { [K_46 in Exclude<keyof I_1["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
            routingKeys?: (string[] & string[] & { [K_47 in Exclude<keyof I_1["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
        } & { [K_48 in Exclude<keyof I_1["service"][number], keyof Service>]: never; })[] & { [K_49 in Exclude<keyof I_1["service"], keyof {
            id?: string | undefined;
            serviceType?: string | undefined;
            serviceEndpoint?: string[] | undefined;
            accept?: string[] | undefined;
            routingKeys?: string[] | undefined;
        }[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_50 in Exclude<keyof I_1["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
    } & { [K_51 in Exclude<keyof I_1, keyof DidDoc>]: never; }>(object: I_1): DidDoc;
};
export declare const VerificationMethod: {
    encode(message: VerificationMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod;
    fromJSON(object: any): VerificationMethod;
    toJSON(message: VerificationMethod): unknown;
    create<I extends {
        id?: string | undefined;
        verificationMethodType?: string | undefined;
        controller?: string | undefined;
        verificationMaterial?: string | undefined;
    } & {
        id?: string | undefined;
        verificationMethodType?: string | undefined;
        controller?: string | undefined;
        verificationMaterial?: string | undefined;
    } & { [K in Exclude<keyof I, keyof VerificationMethod>]: never; }>(base?: I | undefined): VerificationMethod;
    fromPartial<I_1 extends {
        id?: string | undefined;
        verificationMethodType?: string | undefined;
        controller?: string | undefined;
        verificationMaterial?: string | undefined;
    } & {
        id?: string | undefined;
        verificationMethodType?: string | undefined;
        controller?: string | undefined;
        verificationMaterial?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof VerificationMethod>]: never; }>(object: I_1): VerificationMethod;
};
export declare const VerificationRelationship: {
    encode(message: VerificationRelationship, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationRelationship;
    fromJSON(object: any): VerificationRelationship;
    toJSON(message: VerificationRelationship): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
    } & { [K_1 in Exclude<keyof I, keyof VerificationRelationship>]: never; }>(base?: I | undefined): VerificationRelationship;
    fromPartial<I_1 extends {
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
        } & { [K_2 in Exclude<keyof I_1["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I_1, keyof VerificationRelationship>]: never; }>(object: I_1): VerificationRelationship;
};
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    create<I extends {
        id?: string | undefined;
        serviceType?: string | undefined;
        serviceEndpoint?: string[] | undefined;
        accept?: string[] | undefined;
        routingKeys?: string[] | undefined;
    } & {
        id?: string | undefined;
        serviceType?: string | undefined;
        serviceEndpoint?: (string[] & string[] & { [K in Exclude<keyof I["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
        accept?: (string[] & string[] & { [K_1 in Exclude<keyof I["accept"], keyof string[]>]: never; }) | undefined;
        routingKeys?: (string[] & string[] & { [K_2 in Exclude<keyof I["routingKeys"], keyof string[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof Service>]: never; }>(base?: I | undefined): Service;
    fromPartial<I_1 extends {
        id?: string | undefined;
        serviceType?: string | undefined;
        serviceEndpoint?: string[] | undefined;
        accept?: string[] | undefined;
        routingKeys?: string[] | undefined;
    } & {
        id?: string | undefined;
        serviceType?: string | undefined;
        serviceEndpoint?: (string[] & string[] & { [K_4 in Exclude<keyof I_1["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
        accept?: (string[] & string[] & { [K_5 in Exclude<keyof I_1["accept"], keyof string[]>]: never; }) | undefined;
        routingKeys?: (string[] & string[] & { [K_6 in Exclude<keyof I_1["routingKeys"], keyof string[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof Service>]: never; }>(object: I_1): Service;
};
export declare const DidDocWithMetadata: {
    encode(message: DidDocWithMetadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidDocWithMetadata;
    fromJSON(object: any): DidDocWithMetadata;
    toJSON(message: DidDocWithMetadata): unknown;
    create<I extends {
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
            context?: (string[] & string[] & { [K in Exclude<keyof I["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["didDoc"]["verificationMethod"], keyof {
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
                } & { [K_4 in Exclude<keyof I["didDoc"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["didDoc"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["didDoc"]["authentication"], keyof {
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
                } & { [K_7 in Exclude<keyof I["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["didDoc"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["didDoc"]["assertionMethod"], keyof {
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
                } & { [K_10 in Exclude<keyof I["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["didDoc"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["didDoc"]["capabilityInvocation"], keyof {
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
                } & { [K_13 in Exclude<keyof I["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["didDoc"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["didDoc"]["capabilityDelegation"], keyof {
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
                } & { [K_16 in Exclude<keyof I["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_17 in Exclude<keyof I["didDoc"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["didDoc"]["keyAgreement"], keyof {
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
                serviceEndpoint?: (string[] & string[] & { [K_19 in Exclude<keyof I["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                accept?: (string[] & string[] & { [K_20 in Exclude<keyof I["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                routingKeys?: (string[] & string[] & { [K_21 in Exclude<keyof I["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_23 in Exclude<keyof I["didDoc"]["service"], keyof {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
                accept?: string[] | undefined;
                routingKeys?: string[] | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_24 in Exclude<keyof I["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        } & { [K_25 in Exclude<keyof I["didDoc"], keyof DidDoc>]: never; }) | undefined;
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
        } & { [K_26 in Exclude<keyof I["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_27 in Exclude<keyof I, keyof DidDocWithMetadata>]: never; }>(base?: I | undefined): DidDocWithMetadata;
    fromPartial<I_1 extends {
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
            context?: (string[] & string[] & { [K_28 in Exclude<keyof I_1["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_30 in Exclude<keyof I_1["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_31 in Exclude<keyof I_1["didDoc"]["verificationMethod"], keyof {
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
                } & { [K_32 in Exclude<keyof I_1["didDoc"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_33 in Exclude<keyof I_1["didDoc"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_34 in Exclude<keyof I_1["didDoc"]["authentication"], keyof {
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
                } & { [K_35 in Exclude<keyof I_1["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_36 in Exclude<keyof I_1["didDoc"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_37 in Exclude<keyof I_1["didDoc"]["assertionMethod"], keyof {
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
                } & { [K_38 in Exclude<keyof I_1["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_39 in Exclude<keyof I_1["didDoc"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_40 in Exclude<keyof I_1["didDoc"]["capabilityInvocation"], keyof {
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
                } & { [K_41 in Exclude<keyof I_1["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_42 in Exclude<keyof I_1["didDoc"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_43 in Exclude<keyof I_1["didDoc"]["capabilityDelegation"], keyof {
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
                } & { [K_44 in Exclude<keyof I_1["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_45 in Exclude<keyof I_1["didDoc"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_46 in Exclude<keyof I_1["didDoc"]["keyAgreement"], keyof {
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
                serviceEndpoint?: (string[] & string[] & { [K_47 in Exclude<keyof I_1["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                accept?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                routingKeys?: (string[] & string[] & { [K_49 in Exclude<keyof I_1["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
            } & { [K_50 in Exclude<keyof I_1["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_51 in Exclude<keyof I_1["didDoc"]["service"], keyof {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
                accept?: string[] | undefined;
                routingKeys?: string[] | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_52 in Exclude<keyof I_1["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        } & { [K_53 in Exclude<keyof I_1["didDoc"], keyof DidDoc>]: never; }) | undefined;
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
        } & { [K_54 in Exclude<keyof I_1["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_55 in Exclude<keyof I_1, keyof DidDocWithMetadata>]: never; }>(object: I_1): DidDocWithMetadata;
};
export declare const Metadata: {
    encode(message: Metadata, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Metadata;
    fromJSON(object: any): Metadata;
    toJSON(message: Metadata): unknown;
    create<I extends {
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
    } & { [K in Exclude<keyof I, keyof Metadata>]: never; }>(base?: I | undefined): Metadata;
    fromPartial<I_1 extends {
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
    } & { [K_1 in Exclude<keyof I_1, keyof Metadata>]: never; }>(object: I_1): Metadata;
};
//# sourceMappingURL=diddoc.d.ts.map