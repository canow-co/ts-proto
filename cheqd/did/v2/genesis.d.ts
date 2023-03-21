import _m0 from "protobufjs/minimal.js";
import { DidDocWithMetadata } from "./diddoc.js";
import { FeeParams } from "./fee.js";
/**
 * DidDocVersionSet contains all versions of DID Documents and their metadata for a given DID.
 * The latest version of the DID Document set is stored in the latest_version field.
 */
export interface DidDocVersionSet {
    /** Latest version of the DID Document set */
    latestVersion: string;
    /** All versions of the DID Document set */
    didDocs: DidDocWithMetadata[];
}
/** GenesisState defines the cheqd DID module's genesis state. */
export interface GenesisState {
    /**
     * Namespace for the DID module
     * Example: mainnet, testnet, local
     */
    didNamespace: string;
    /** All DID Document version sets (contains all versions of all DID Documents) */
    versionSets: DidDocVersionSet[];
    /**
     * Fee parameters for the DID module
     * Defines fixed fees and burn percentage for each DID operation type (create, update, delete)
     */
    feeParams: FeeParams | undefined;
}
export declare const DidDocVersionSet: {
    encode(message: DidDocVersionSet, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DidDocVersionSet;
    fromJSON(object: any): DidDocVersionSet;
    toJSON(message: DidDocVersionSet): unknown;
    create<I extends {
        latestVersion?: string | undefined;
        didDocs?: {
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
        }[] | undefined;
    } & {
        latestVersion?: string | undefined;
        didDocs?: ({
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
        }[] & ({
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
                context?: (string[] & string[] & { [K in Exclude<keyof I["didDocs"][number]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["didDocs"][number]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_2 in Exclude<keyof I["didDocs"][number]["didDoc"]["verificationMethod"][number], keyof import("./diddoc.js").VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["didDocs"][number]["didDoc"]["verificationMethod"], keyof {
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
                    } & { [K_4 in Exclude<keyof I["didDocs"][number]["didDoc"]["authentication"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_5 in Exclude<keyof I["didDocs"][number]["didDoc"]["authentication"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["didDocs"][number]["didDoc"]["authentication"], keyof {
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
                    } & { [K_7 in Exclude<keyof I["didDocs"][number]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_8 in Exclude<keyof I["didDocs"][number]["didDoc"]["assertionMethod"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["didDocs"][number]["didDoc"]["assertionMethod"], keyof {
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
                    } & { [K_10 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_11 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityInvocation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityInvocation"], keyof {
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
                    } & { [K_13 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_14 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityDelegation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["didDocs"][number]["didDoc"]["capabilityDelegation"], keyof {
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
                    } & { [K_16 in Exclude<keyof I["didDocs"][number]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_17 in Exclude<keyof I["didDocs"][number]["didDoc"]["keyAgreement"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["didDocs"][number]["didDoc"]["keyAgreement"], keyof {
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
                    serviceEndpoint?: (string[] & string[] & { [K_19 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                    accept?: (string[] & string[] & { [K_20 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                    routingKeys?: (string[] & string[] & { [K_21 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
                } & { [K_22 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"][number], keyof import("./diddoc.js").Service>]: never; })[] & { [K_23 in Exclude<keyof I["didDocs"][number]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_24 in Exclude<keyof I["didDocs"][number]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_25 in Exclude<keyof I["didDocs"][number]["didDoc"], keyof import("./diddoc.js").DidDoc>]: never; }) | undefined;
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
            } & { [K_26 in Exclude<keyof I["didDocs"][number]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
        } & { [K_27 in Exclude<keyof I["didDocs"][number], keyof DidDocWithMetadata>]: never; })[] & { [K_28 in Exclude<keyof I["didDocs"], keyof {
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
        }[]>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I, keyof DidDocVersionSet>]: never; }>(base?: I | undefined): DidDocVersionSet;
    fromPartial<I_1 extends {
        latestVersion?: string | undefined;
        didDocs?: {
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
        }[] | undefined;
    } & {
        latestVersion?: string | undefined;
        didDocs?: ({
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
        }[] & ({
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
                context?: (string[] & string[] & { [K_30 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                id?: string | undefined;
                controller?: (string[] & string[] & { [K_31 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
                } & { [K_32 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["verificationMethod"][number], keyof import("./diddoc.js").VerificationMethod>]: never; })[] & { [K_33 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["verificationMethod"], keyof {
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
                    } & { [K_34 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["authentication"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_35 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["authentication"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_36 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["authentication"], keyof {
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
                    } & { [K_37 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_38 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["assertionMethod"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_39 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["assertionMethod"], keyof {
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
                    } & { [K_40 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_41 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["capabilityInvocation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_42 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["capabilityInvocation"], keyof {
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
                    } & { [K_43 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_44 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["capabilityDelegation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_45 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["capabilityDelegation"], keyof {
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
                    } & { [K_46 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                } & { [K_47 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["keyAgreement"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_48 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["keyAgreement"], keyof {
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
                    serviceEndpoint?: (string[] & string[] & { [K_49 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                    accept?: (string[] & string[] & { [K_50 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                    routingKeys?: (string[] & string[] & { [K_51 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
                } & { [K_52 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["service"][number], keyof import("./diddoc.js").Service>]: never; })[] & { [K_53 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["service"], keyof {
                    id?: string | undefined;
                    serviceType?: string | undefined;
                    serviceEndpoint?: string[] | undefined;
                    accept?: string[] | undefined;
                    routingKeys?: string[] | undefined;
                }[]>]: never; }) | undefined;
                alsoKnownAs?: (string[] & string[] & { [K_54 in Exclude<keyof I_1["didDocs"][number]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            } & { [K_55 in Exclude<keyof I_1["didDocs"][number]["didDoc"], keyof import("./diddoc.js").DidDoc>]: never; }) | undefined;
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
            } & { [K_56 in Exclude<keyof I_1["didDocs"][number]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
        } & { [K_57 in Exclude<keyof I_1["didDocs"][number], keyof DidDocWithMetadata>]: never; })[] & { [K_58 in Exclude<keyof I_1["didDocs"], keyof {
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
        }[]>]: never; }) | undefined;
    } & { [K_59 in Exclude<keyof I_1, keyof DidDocVersionSet>]: never; }>(object: I_1): DidDocVersionSet;
};
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        didNamespace?: string | undefined;
        versionSets?: {
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[] | undefined;
        feeParams?: {
            createDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            updateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            deactivateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } | undefined;
    } & {
        didNamespace?: string | undefined;
        versionSets?: ({
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[] & ({
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        } & {
            latestVersion?: string | undefined;
            didDocs?: ({
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
            }[] & ({
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
                    context?: (string[] & string[] & { [K in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                    id?: string | undefined;
                    controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_2 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["verificationMethod"][number], keyof import("./diddoc.js").VerificationMethod>]: never; })[] & { [K_3 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["verificationMethod"], keyof {
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
                        } & { [K_4 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["authentication"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_5 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["authentication"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_6 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["authentication"], keyof {
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
                        } & { [K_7 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_8 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["assertionMethod"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_9 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["assertionMethod"], keyof {
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
                        } & { [K_10 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_11 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityInvocation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_12 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityInvocation"], keyof {
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
                        } & { [K_13 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_14 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityDelegation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_15 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityDelegation"], keyof {
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
                        } & { [K_16 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_17 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["keyAgreement"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_18 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["keyAgreement"], keyof {
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
                        serviceEndpoint?: (string[] & string[] & { [K_19 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                        accept?: (string[] & string[] & { [K_20 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                        routingKeys?: (string[] & string[] & { [K_21 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
                    } & { [K_22 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number], keyof import("./diddoc.js").Service>]: never; })[] & { [K_23 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["service"], keyof {
                        id?: string | undefined;
                        serviceType?: string | undefined;
                        serviceEndpoint?: string[] | undefined;
                        accept?: string[] | undefined;
                        routingKeys?: string[] | undefined;
                    }[]>]: never; }) | undefined;
                    alsoKnownAs?: (string[] & string[] & { [K_24 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
                } & { [K_25 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["didDoc"], keyof import("./diddoc.js").DidDoc>]: never; }) | undefined;
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
                } & { [K_26 in Exclude<keyof I["versionSets"][number]["didDocs"][number]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
            } & { [K_27 in Exclude<keyof I["versionSets"][number]["didDocs"][number], keyof DidDocWithMetadata>]: never; })[] & { [K_28 in Exclude<keyof I["versionSets"][number]["didDocs"], keyof {
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
            }[]>]: never; }) | undefined;
        } & { [K_29 in Exclude<keyof I["versionSets"][number], keyof DidDocVersionSet>]: never; })[] & { [K_30 in Exclude<keyof I["versionSets"], keyof {
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[]>]: never; }) | undefined;
        feeParams?: ({
            createDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            updateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            deactivateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } & {
            createDid?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_31 in Exclude<keyof I["feeParams"]["createDid"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            updateDid?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_32 in Exclude<keyof I["feeParams"]["updateDid"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            deactivateDid?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_33 in Exclude<keyof I["feeParams"]["deactivateDid"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            burnFactor?: string | undefined;
        } & { [K_34 in Exclude<keyof I["feeParams"], keyof FeeParams>]: never; }) | undefined;
    } & { [K_35 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        didNamespace?: string | undefined;
        versionSets?: {
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[] | undefined;
        feeParams?: {
            createDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            updateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            deactivateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } | undefined;
    } & {
        didNamespace?: string | undefined;
        versionSets?: ({
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[] & ({
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        } & {
            latestVersion?: string | undefined;
            didDocs?: ({
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
            }[] & ({
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
                    context?: (string[] & string[] & { [K_36 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["context"], keyof string[]>]: never; }) | undefined;
                    id?: string | undefined;
                    controller?: (string[] & string[] & { [K_37 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["controller"], keyof string[]>]: never; }) | undefined;
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
                    } & { [K_38 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["verificationMethod"][number], keyof import("./diddoc.js").VerificationMethod>]: never; })[] & { [K_39 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["verificationMethod"], keyof {
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
                        } & { [K_40 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["authentication"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_41 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["authentication"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_42 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["authentication"], keyof {
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
                        } & { [K_43 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["assertionMethod"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_44 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["assertionMethod"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_45 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["assertionMethod"], keyof {
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
                        } & { [K_46 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityInvocation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_47 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityInvocation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_48 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityInvocation"], keyof {
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
                        } & { [K_49 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityDelegation"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_50 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityDelegation"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_51 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["capabilityDelegation"], keyof {
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
                        } & { [K_52 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["keyAgreement"][number]["verificationMethod"], keyof import("./diddoc.js").VerificationMethod>]: never; }) | undefined;
                    } & { [K_53 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["keyAgreement"][number], keyof import("./diddoc.js").VerificationRelationship>]: never; })[] & { [K_54 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["keyAgreement"], keyof {
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
                        serviceEndpoint?: (string[] & string[] & { [K_55 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number]["serviceEndpoint"], keyof string[]>]: never; }) | undefined;
                        accept?: (string[] & string[] & { [K_56 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number]["accept"], keyof string[]>]: never; }) | undefined;
                        routingKeys?: (string[] & string[] & { [K_57 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number]["routingKeys"], keyof string[]>]: never; }) | undefined;
                    } & { [K_58 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["service"][number], keyof import("./diddoc.js").Service>]: never; })[] & { [K_59 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["service"], keyof {
                        id?: string | undefined;
                        serviceType?: string | undefined;
                        serviceEndpoint?: string[] | undefined;
                        accept?: string[] | undefined;
                        routingKeys?: string[] | undefined;
                    }[]>]: never; }) | undefined;
                    alsoKnownAs?: (string[] & string[] & { [K_60 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
                } & { [K_61 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["didDoc"], keyof import("./diddoc.js").DidDoc>]: never; }) | undefined;
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
                } & { [K_62 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number]["metadata"], keyof import("./diddoc.js").Metadata>]: never; }) | undefined;
            } & { [K_63 in Exclude<keyof I_1["versionSets"][number]["didDocs"][number], keyof DidDocWithMetadata>]: never; })[] & { [K_64 in Exclude<keyof I_1["versionSets"][number]["didDocs"], keyof {
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
            }[]>]: never; }) | undefined;
        } & { [K_65 in Exclude<keyof I_1["versionSets"][number], keyof DidDocVersionSet>]: never; })[] & { [K_66 in Exclude<keyof I_1["versionSets"], keyof {
            latestVersion?: string | undefined;
            didDocs?: {
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
            }[] | undefined;
        }[]>]: never; }) | undefined;
        feeParams?: ({
            createDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            updateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            deactivateDid?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } & {
            createDid?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_67 in Exclude<keyof I_1["feeParams"]["createDid"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            updateDid?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_68 in Exclude<keyof I_1["feeParams"]["updateDid"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            deactivateDid?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_69 in Exclude<keyof I_1["feeParams"]["deactivateDid"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            burnFactor?: string | undefined;
        } & { [K_70 in Exclude<keyof I_1["feeParams"], keyof FeeParams>]: never; }) | undefined;
    } & { [K_71 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
};
//# sourceMappingURL=genesis.d.ts.map