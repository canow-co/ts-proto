import _m0 from "protobufjs/minimal.js";
import { DidDocWithMetadata, Service, VerificationMethod, VerificationRelationship } from "./diddoc.js";
/**
 * MsgCreateDidDoc defines the Msg/CreateDidDoc request type.
 * It describes the parameters of a request for creating a new DID document.
 */
export interface MsgCreateDidDoc {
    /** Payload containing the DID Document to be created */
    payload: MsgCreateDidDocPayload | undefined;
    /** Signatures of the DID Document's controller(s) */
    signatures: SignInfo[];
}
/**
 * MsgUpdateDidDoc defines the Msg/UpdateDidDoc request type.
 * It describes the parameters of a request for updating an existing DID document.
 */
export interface MsgUpdateDidDoc {
    /** Payload containing the DID Document to be updated. This should be updated the DID Document. */
    payload: MsgUpdateDidDocPayload | undefined;
    /** Signatures of the DID Document's controller(s) */
    signatures: SignInfo[];
}
/**
 * MsgDeactivateDidDoc defines the Msg/DeactivateDidDoc request type.
 * It describes the parameters of a request for deactivating an existing DID document.
 */
export interface MsgDeactivateDidDoc {
    /** Payload containing the DID Document to be deactivated */
    payload: MsgDeactivateDidDocPayload | undefined;
    /** Signatures of the DID Document's controller(s) */
    signatures: SignInfo[];
}
/** SignInfo defines the structure of a DID Document controller's signature */
export interface SignInfo {
    /** Verification method ID of the DID Controller */
    verificationMethodId: string;
    /** Signature of the DID Document controller */
    signature: Uint8Array;
}
/** MsgCreateDidDocPayload defines the structure of the payload for creating a new DID document */
export interface MsgCreateDidDocPayload {
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
     * Documentation: https://www.w3.org/TR/did-core/#verification-methods
     *
     * Required fields:
     * - id: A unique identifier for the verification method
     * - type: A supported verification method type (supported: Ed25519VerificationKey2018, Ed25519VerificationKey2020, JsonWebKey2020)
     * - controller: DID of the controller of the verification method
     * - verification_material: Public key of the verification method (supported: publicJwk, publicKeyBase58, publicKeyMultibase)
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
    /**
     * service is a list of services that can be used to interact with the DID subject.
     * Documentation: https://www.w3.org/TR/did-core/#services
     *
     * Required fields:
     * - id: A unique identifier for the service
     * - type: A service type defined in DID Specification Registries
     * - service_endpoint: Service endpoint(s), provided as a URI or set of URIs
     */
    service: Service[];
    /** alsoKnownAs is a list of DIDs that are known to refer to the same DID subject. */
    alsoKnownAs: string[];
    /**
     * Version ID of the DID Document to be created
     *
     * Format: <uuid>
     */
    versionId: string;
}
/** MsgCreateDidDocResponse defines response type for Msg/CreateDidDoc. */
export interface MsgCreateDidDocResponse {
    /** Return the created DID Document with metadata */
    value: DidDocWithMetadata | undefined;
}
/** MsgUpdateDidDocPayload defines the structure of the payload for updating an existing DID document */
export interface MsgUpdateDidDocPayload {
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
     * Documentation: https://www.w3.org/TR/did-core/#verification-methods
     *
     * Required fields:
     * - id: A unique identifier for the verification method
     * - type: A supported verification method type (supported: Ed25519VerificationKey2018, Ed25519VerificationKey2020, JsonWebKey2020)
     * - controller: DID of the controller of the verification method
     * - verification_material: Public key of the verification method (supported: publicJwk, publicKeyBase58, publicKeyMultibase)
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
    /**
     * service is a list of services that can be used to interact with the DID subject.
     * Documentation: https://www.w3.org/TR/did-core/#services
     *
     * Required fields:
     * - id: A unique identifier for the service
     * - type: A service type defined in DID Specification Registries
     * - service_endpoint: Service endpoint(s), provided as a URI or set of URIs
     */
    service: Service[];
    /** alsoKnownAs is a list of DIDs that are known to refer to the same DID subject. */
    alsoKnownAs: string[];
    /**
     * Updated version ID of the DID Document.
     * Links to next/previous versions of the DID Document will be automatically updated.
     *
     * Format: <uuid>
     */
    versionId: string;
}
export interface MsgUpdateDidDocResponse {
    /** Return the updated DID Document with metadata */
    value: DidDocWithMetadata | undefined;
}
/** MsgDeactivateDidDocPayload defines the structure of the payload for deactivating an existing DID document */
export interface MsgDeactivateDidDocPayload {
    /** Unique identifier of the DID Document to be deactivated */
    id: string;
    /**
     * Version ID of the DID Document to be deactivated
     * This is primarily used as a sanity check to ensure that the correct DID Document is being deactivated.
     */
    versionId: string;
}
/** MsgDeactivateDidDocResponse defines response type for Msg/DeactivateDidDoc. */
export interface MsgDeactivateDidDocResponse {
    /** Return the deactivated DID Document with metadata */
    value: DidDocWithMetadata | undefined;
}
export declare const MsgCreateDidDoc: {
    encode(message: MsgCreateDidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDoc;
    fromJSON(object: any): MsgCreateDidDoc;
    toJSON(message: MsgCreateDidDoc): unknown;
    create<I extends {
        payload?: {
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
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
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
            versionId?: string | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["payload"]["controller"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["payload"]["verificationMethod"], keyof {
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
                } & { [K_4 in Exclude<keyof I["payload"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["payload"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["payload"]["authentication"], keyof {
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
                } & { [K_7 in Exclude<keyof I["payload"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["payload"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["payload"]["assertionMethod"], keyof {
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
                } & { [K_10 in Exclude<keyof I["payload"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["payload"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["payload"]["capabilityInvocation"], keyof {
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
                } & { [K_13 in Exclude<keyof I["payload"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["payload"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["payload"]["capabilityDelegation"], keyof {
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
                } & { [K_16 in Exclude<keyof I["payload"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_17 in Exclude<keyof I["payload"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["payload"]["keyAgreement"], keyof {
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
                serviceEndpoint?: (string[] & string[] & { [K_19 in Exclude<keyof I["payload"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                accept?: (string[] & string[] & { [K_20 in Exclude<keyof I["payload"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                routingKeys?: (string[] & string[] & { [K_21 in Exclude<keyof I["payload"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["payload"]["service"][number], keyof Service>]: never; })[] & { [K_23 in Exclude<keyof I["payload"]["service"], keyof {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
                accept?: string[] | undefined;
                routingKeys?: string[] | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_24 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_25 in Exclude<keyof I["payload"], keyof MsgCreateDidDocPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_26 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_27 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_28 in Exclude<keyof I, keyof MsgCreateDidDoc>]: never; }>(base?: I | undefined): MsgCreateDidDoc;
    fromPartial<I_1 extends {
        payload?: {
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
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
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
            versionId?: string | undefined;
        } & {
            context?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_30 in Exclude<keyof I_1["payload"]["controller"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_31 in Exclude<keyof I_1["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_32 in Exclude<keyof I_1["payload"]["verificationMethod"], keyof {
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
                } & { [K_33 in Exclude<keyof I_1["payload"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_34 in Exclude<keyof I_1["payload"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_35 in Exclude<keyof I_1["payload"]["authentication"], keyof {
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
                } & { [K_36 in Exclude<keyof I_1["payload"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I_1["payload"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_38 in Exclude<keyof I_1["payload"]["assertionMethod"], keyof {
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
                } & { [K_39 in Exclude<keyof I_1["payload"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_40 in Exclude<keyof I_1["payload"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_41 in Exclude<keyof I_1["payload"]["capabilityInvocation"], keyof {
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
                } & { [K_42 in Exclude<keyof I_1["payload"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_43 in Exclude<keyof I_1["payload"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_44 in Exclude<keyof I_1["payload"]["capabilityDelegation"], keyof {
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
                } & { [K_45 in Exclude<keyof I_1["payload"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_46 in Exclude<keyof I_1["payload"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_47 in Exclude<keyof I_1["payload"]["keyAgreement"], keyof {
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
                serviceEndpoint?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["payload"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                accept?: (string[] & string[] & { [K_49 in Exclude<keyof I_1["payload"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                routingKeys?: (string[] & string[] & { [K_50 in Exclude<keyof I_1["payload"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
            } & { [K_51 in Exclude<keyof I_1["payload"]["service"][number], keyof Service>]: never; })[] & { [K_52 in Exclude<keyof I_1["payload"]["service"], keyof {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
                accept?: string[] | undefined;
                routingKeys?: string[] | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_53 in Exclude<keyof I_1["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_54 in Exclude<keyof I_1["payload"], keyof MsgCreateDidDocPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_55 in Exclude<keyof I_1["signatures"][number], keyof SignInfo>]: never; })[] & { [K_56 in Exclude<keyof I_1["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_57 in Exclude<keyof I_1, keyof MsgCreateDidDoc>]: never; }>(object: I_1): MsgCreateDidDoc;
};
export declare const MsgUpdateDidDoc: {
    encode(message: MsgUpdateDidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDoc;
    fromJSON(object: any): MsgUpdateDidDoc;
    toJSON(message: MsgUpdateDidDoc): unknown;
    create<I extends {
        payload?: {
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
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
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
            versionId?: string | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["payload"]["controller"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_2 in Exclude<keyof I["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["payload"]["verificationMethod"], keyof {
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
                } & { [K_4 in Exclude<keyof I["payload"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_5 in Exclude<keyof I["payload"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["payload"]["authentication"], keyof {
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
                } & { [K_7 in Exclude<keyof I["payload"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_8 in Exclude<keyof I["payload"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["payload"]["assertionMethod"], keyof {
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
                } & { [K_10 in Exclude<keyof I["payload"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_11 in Exclude<keyof I["payload"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["payload"]["capabilityInvocation"], keyof {
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
                } & { [K_13 in Exclude<keyof I["payload"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_14 in Exclude<keyof I["payload"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["payload"]["capabilityDelegation"], keyof {
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
                } & { [K_16 in Exclude<keyof I["payload"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_17 in Exclude<keyof I["payload"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["payload"]["keyAgreement"], keyof {
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
                serviceEndpoint?: (string[] & string[] & { [K_19 in Exclude<keyof I["payload"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                accept?: (string[] & string[] & { [K_20 in Exclude<keyof I["payload"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                routingKeys?: (string[] & string[] & { [K_21 in Exclude<keyof I["payload"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
            } & { [K_22 in Exclude<keyof I["payload"]["service"][number], keyof Service>]: never; })[] & { [K_23 in Exclude<keyof I["payload"]["service"], keyof {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
                accept?: string[] | undefined;
                routingKeys?: string[] | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_24 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_25 in Exclude<keyof I["payload"], keyof MsgUpdateDidDocPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_26 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_27 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_28 in Exclude<keyof I, keyof MsgUpdateDidDoc>]: never; }>(base?: I | undefined): MsgUpdateDidDoc;
    fromPartial<I_1 extends {
        payload?: {
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
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
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
            versionId?: string | undefined;
        } & {
            context?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_30 in Exclude<keyof I_1["payload"]["controller"], keyof string[]>]: never; }) | undefined;
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
            } & { [K_31 in Exclude<keyof I_1["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_32 in Exclude<keyof I_1["payload"]["verificationMethod"], keyof {
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
                } & { [K_33 in Exclude<keyof I_1["payload"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_34 in Exclude<keyof I_1["payload"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_35 in Exclude<keyof I_1["payload"]["authentication"], keyof {
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
                } & { [K_36 in Exclude<keyof I_1["payload"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_37 in Exclude<keyof I_1["payload"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_38 in Exclude<keyof I_1["payload"]["assertionMethod"], keyof {
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
                } & { [K_39 in Exclude<keyof I_1["payload"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_40 in Exclude<keyof I_1["payload"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_41 in Exclude<keyof I_1["payload"]["capabilityInvocation"], keyof {
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
                } & { [K_42 in Exclude<keyof I_1["payload"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_43 in Exclude<keyof I_1["payload"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_44 in Exclude<keyof I_1["payload"]["capabilityDelegation"], keyof {
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
                } & { [K_45 in Exclude<keyof I_1["payload"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
            } & { [K_46 in Exclude<keyof I_1["payload"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_47 in Exclude<keyof I_1["payload"]["keyAgreement"], keyof {
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
                serviceEndpoint?: (string[] & string[] & { [K_48 in Exclude<keyof I_1["payload"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                accept?: (string[] & string[] & { [K_49 in Exclude<keyof I_1["payload"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                routingKeys?: (string[] & string[] & { [K_50 in Exclude<keyof I_1["payload"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
            } & { [K_51 in Exclude<keyof I_1["payload"]["service"][number], keyof Service>]: never; })[] & { [K_52 in Exclude<keyof I_1["payload"]["service"], keyof {
                id?: string | undefined;
                serviceType?: string | undefined;
                serviceEndpoint?: string[] | undefined;
                accept?: string[] | undefined;
                routingKeys?: string[] | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_53 in Exclude<keyof I_1["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_54 in Exclude<keyof I_1["payload"], keyof MsgUpdateDidDocPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_55 in Exclude<keyof I_1["signatures"][number], keyof SignInfo>]: never; })[] & { [K_56 in Exclude<keyof I_1["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_57 in Exclude<keyof I_1, keyof MsgUpdateDidDoc>]: never; }>(object: I_1): MsgUpdateDidDoc;
};
export declare const MsgDeactivateDidDoc: {
    encode(message: MsgDeactivateDidDoc, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDoc;
    fromJSON(object: any): MsgDeactivateDidDoc;
    toJSON(message: MsgDeactivateDidDoc): unknown;
    create<I extends {
        payload?: {
            id?: string | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            id?: string | undefined;
            versionId?: string | undefined;
        } & {
            id?: string | undefined;
            versionId?: string | undefined;
        } & { [K in Exclude<keyof I["payload"], keyof MsgDeactivateDidDocPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_1 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_2 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MsgDeactivateDidDoc>]: never; }>(base?: I | undefined): MsgDeactivateDidDoc;
    fromPartial<I_1 extends {
        payload?: {
            id?: string | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            id?: string | undefined;
            versionId?: string | undefined;
        } & {
            id?: string | undefined;
            versionId?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["payload"], keyof MsgDeactivateDidDocPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        } & { [K_5 in Exclude<keyof I_1["signatures"][number], keyof SignInfo>]: never; })[] & { [K_6 in Exclude<keyof I_1["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: Uint8Array | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof MsgDeactivateDidDoc>]: never; }>(object: I_1): MsgDeactivateDidDoc;
};
export declare const SignInfo: {
    encode(message: SignInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignInfo;
    fromJSON(object: any): SignInfo;
    toJSON(message: SignInfo): unknown;
    create<I extends {
        verificationMethodId?: string | undefined;
        signature?: Uint8Array | undefined;
    } & {
        verificationMethodId?: string | undefined;
        signature?: Uint8Array | undefined;
    } & { [K in Exclude<keyof I, keyof SignInfo>]: never; }>(base?: I | undefined): SignInfo;
    fromPartial<I_1 extends {
        verificationMethodId?: string | undefined;
        signature?: Uint8Array | undefined;
    } & {
        verificationMethodId?: string | undefined;
        signature?: Uint8Array | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SignInfo>]: never; }>(object: I_1): SignInfo;
};
export declare const MsgCreateDidDocPayload: {
    encode(message: MsgCreateDidDocPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocPayload;
    fromJSON(object: any): MsgCreateDidDocPayload;
    toJSON(message: MsgCreateDidDocPayload): unknown;
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
        versionId?: string | undefined;
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
        versionId?: string | undefined;
    } & { [K_25 in Exclude<keyof I, keyof MsgCreateDidDocPayload>]: never; }>(base?: I | undefined): MsgCreateDidDocPayload;
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
        versionId?: string | undefined;
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
        versionId?: string | undefined;
    } & { [K_51 in Exclude<keyof I_1, keyof MsgCreateDidDocPayload>]: never; }>(object: I_1): MsgCreateDidDocPayload;
};
export declare const MsgCreateDidDocResponse: {
    encode(message: MsgCreateDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidDocResponse;
    fromJSON(object: any): MsgCreateDidDocResponse;
    toJSON(message: MsgCreateDidDocResponse): unknown;
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
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
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
                    } & { [K_4 in Exclude<keyof I["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["value"]["didDoc"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["authentication"], keyof {
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
                    } & { [K_7 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], keyof {
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
                    } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], keyof {
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
                    } & { [K_13 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], keyof {
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
                    } & { [K_16 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], keyof {
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
                } & { [K_22 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_23 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
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
            } & { [K_26 in Exclude<keyof I["value"]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_28 in Exclude<keyof I, "value">]: never; }>(base?: I | undefined): MsgCreateDidDocResponse;
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
                } & { [K_31 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_32 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"], keyof {
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
                    } & { [K_33 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_34 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_35 in Exclude<keyof I_1["value"]["didDoc"]["authentication"], keyof {
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
                    } & { [K_36 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_38 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"], keyof {
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
                    } & { [K_39 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_41 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"], keyof {
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
                    } & { [K_42 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_43 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_44 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"], keyof {
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
                    } & { [K_45 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_46 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_47 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"], keyof {
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
                } & { [K_51 in Exclude<keyof I_1["value"]["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_52 in Exclude<keyof I_1["value"]["didDoc"]["service"], keyof {
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
            } & { [K_55 in Exclude<keyof I_1["value"]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
        } & { [K_56 in Exclude<keyof I_1["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_57 in Exclude<keyof I_1, "value">]: never; }>(object: I_1): MsgCreateDidDocResponse;
};
export declare const MsgUpdateDidDocPayload: {
    encode(message: MsgUpdateDidDocPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocPayload;
    fromJSON(object: any): MsgUpdateDidDocPayload;
    toJSON(message: MsgUpdateDidDocPayload): unknown;
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
        versionId?: string | undefined;
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
        versionId?: string | undefined;
    } & { [K_25 in Exclude<keyof I, keyof MsgUpdateDidDocPayload>]: never; }>(base?: I | undefined): MsgUpdateDidDocPayload;
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
        versionId?: string | undefined;
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
        versionId?: string | undefined;
    } & { [K_51 in Exclude<keyof I_1, keyof MsgUpdateDidDocPayload>]: never; }>(object: I_1): MsgUpdateDidDocPayload;
};
export declare const MsgUpdateDidDocResponse: {
    encode(message: MsgUpdateDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidDocResponse;
    fromJSON(object: any): MsgUpdateDidDocResponse;
    toJSON(message: MsgUpdateDidDocResponse): unknown;
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
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
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
                    } & { [K_4 in Exclude<keyof I["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["value"]["didDoc"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["authentication"], keyof {
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
                    } & { [K_7 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], keyof {
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
                    } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], keyof {
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
                    } & { [K_13 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], keyof {
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
                    } & { [K_16 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], keyof {
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
                } & { [K_22 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_23 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
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
            } & { [K_26 in Exclude<keyof I["value"]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_28 in Exclude<keyof I, "value">]: never; }>(base?: I | undefined): MsgUpdateDidDocResponse;
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
                } & { [K_31 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_32 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"], keyof {
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
                    } & { [K_33 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_34 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_35 in Exclude<keyof I_1["value"]["didDoc"]["authentication"], keyof {
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
                    } & { [K_36 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_38 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"], keyof {
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
                    } & { [K_39 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_41 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"], keyof {
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
                    } & { [K_42 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_43 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_44 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"], keyof {
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
                    } & { [K_45 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_46 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_47 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"], keyof {
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
                } & { [K_51 in Exclude<keyof I_1["value"]["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_52 in Exclude<keyof I_1["value"]["didDoc"]["service"], keyof {
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
            } & { [K_55 in Exclude<keyof I_1["value"]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
        } & { [K_56 in Exclude<keyof I_1["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_57 in Exclude<keyof I_1, "value">]: never; }>(object: I_1): MsgUpdateDidDocResponse;
};
export declare const MsgDeactivateDidDocPayload: {
    encode(message: MsgDeactivateDidDocPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDocPayload;
    fromJSON(object: any): MsgDeactivateDidDocPayload;
    toJSON(message: MsgDeactivateDidDocPayload): unknown;
    create<I extends {
        id?: string | undefined;
        versionId?: string | undefined;
    } & {
        id?: string | undefined;
        versionId?: string | undefined;
    } & { [K in Exclude<keyof I, keyof MsgDeactivateDidDocPayload>]: never; }>(base?: I | undefined): MsgDeactivateDidDocPayload;
    fromPartial<I_1 extends {
        id?: string | undefined;
        versionId?: string | undefined;
    } & {
        id?: string | undefined;
        versionId?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDeactivateDidDocPayload>]: never; }>(object: I_1): MsgDeactivateDidDocPayload;
};
export declare const MsgDeactivateDidDocResponse: {
    encode(message: MsgDeactivateDidDocResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidDocResponse;
    fromJSON(object: any): MsgDeactivateDidDocResponse;
    toJSON(message: MsgDeactivateDidDocResponse): unknown;
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
                } & { [K_2 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["value"]["didDoc"]["verificationMethod"], keyof {
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
                    } & { [K_4 in Exclude<keyof I["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["value"]["didDoc"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["value"]["didDoc"]["authentication"], keyof {
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
                    } & { [K_7 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["value"]["didDoc"]["assertionMethod"], keyof {
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
                    } & { [K_10 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["value"]["didDoc"]["capabilityInvocation"], keyof {
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
                    } & { [K_13 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["value"]["didDoc"]["capabilityDelegation"], keyof {
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
                    } & { [K_16 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["value"]["didDoc"]["keyAgreement"], keyof {
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
                } & { [K_22 in Exclude<keyof I["value"]["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_23 in Exclude<keyof I["value"]["didDoc"]["service"], keyof {
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
            } & { [K_26 in Exclude<keyof I["value"]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_28 in Exclude<keyof I, "value">]: never; }>(base?: I | undefined): MsgDeactivateDidDocResponse;
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
                } & { [K_31 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_32 in Exclude<keyof I_1["value"]["didDoc"]["verificationMethod"], keyof {
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
                    } & { [K_33 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_34 in Exclude<keyof I_1["value"]["didDoc"]["authentication"][number], keyof VerificationRelationship>]: never; })[] & { [K_35 in Exclude<keyof I_1["value"]["didDoc"]["authentication"], keyof {
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
                    } & { [K_36 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_37 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"][number], keyof VerificationRelationship>]: never; })[] & { [K_38 in Exclude<keyof I_1["value"]["didDoc"]["assertionMethod"], keyof {
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
                    } & { [K_39 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_40 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"][number], keyof VerificationRelationship>]: never; })[] & { [K_41 in Exclude<keyof I_1["value"]["didDoc"]["capabilityInvocation"], keyof {
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
                    } & { [K_42 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_43 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"][number], keyof VerificationRelationship>]: never; })[] & { [K_44 in Exclude<keyof I_1["value"]["didDoc"]["capabilityDelegation"], keyof {
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
                    } & { [K_45 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof VerificationMethod>]: never; }) | undefined;
                } & { [K_46 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"][number], keyof VerificationRelationship>]: never; })[] & { [K_47 in Exclude<keyof I_1["value"]["didDoc"]["keyAgreement"], keyof {
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
                } & { [K_51 in Exclude<keyof I_1["value"]["didDoc"]["service"][number], keyof Service>]: never; })[] & { [K_52 in Exclude<keyof I_1["value"]["didDoc"]["service"], keyof {
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
            } & { [K_55 in Exclude<keyof I_1["value"]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
        } & { [K_56 in Exclude<keyof I_1["value"], keyof DidDocWithMetadata>]: never; }) | undefined;
    } & { [K_57 in Exclude<keyof I_1, "value">]: never; }>(object: I_1): MsgDeactivateDidDocResponse;
};
/** Msg defines the Cosmos SDK Msg service for the cheqd.did.v2 module. */
export interface Msg {
    /** CreateDidDoc defines a method for creating a new DID document */
    CreateDidDoc(request: MsgCreateDidDoc): Promise<MsgCreateDidDocResponse>;
    /** UpdateDidDoc defines a method for updating an existing DID document */
    UpdateDidDoc(request: MsgUpdateDidDoc): Promise<MsgUpdateDidDocResponse>;
    /** DeactivateDidDoc defines a method for deactivating an existing DID document */
    DeactivateDidDoc(request: MsgDeactivateDidDoc): Promise<MsgDeactivateDidDocResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateDidDoc(request: MsgCreateDidDoc): Promise<MsgCreateDidDocResponse>;
    UpdateDidDoc(request: MsgUpdateDidDoc): Promise<MsgUpdateDidDocResponse>;
    DeactivateDidDoc(request: MsgDeactivateDidDoc): Promise<MsgDeactivateDidDocResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=tx.d.ts.map