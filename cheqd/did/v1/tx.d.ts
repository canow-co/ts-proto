import _m0 from "protobufjs/minimal.js";
import { Did, Service, VerificationMethod } from "./did.js";
import { Metadata } from "./stateValue.js";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateDid {
    payload: MsgCreateDidPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgUpdateDid {
    payload: MsgUpdateDidPayload | undefined;
    signatures: SignInfo[];
}
export interface MsgDeactivateDid {
    payload: MsgDeactivateDidPayload | undefined;
    signatures: SignInfo[];
}
export interface SignInfo {
    verificationMethodId: string;
    signature: string;
}
export interface MsgDeactivateDidPayload {
    id: string;
}
export interface MsgDeactivateDidResponse {
    did: Did | undefined;
    metadata: Metadata | undefined;
}
export interface MsgCreateDidPayload {
    context: string[];
    id: string;
    controller: string[];
    verificationMethod: VerificationMethod[];
    authentication: string[];
    assertionMethod: string[];
    capabilityInvocation: string[];
    capabilityDelegation: string[];
    keyAgreement: string[];
    alsoKnownAs: string[];
    service: Service[];
}
export interface MsgCreateDidResponse {
    /** Not necessary */
    id: string;
}
export interface MsgUpdateDidPayload {
    context: string[];
    id: string;
    controller: string[];
    verificationMethod: VerificationMethod[];
    authentication: string[];
    assertionMethod: string[];
    capabilityInvocation: string[];
    capabilityDelegation: string[];
    keyAgreement: string[];
    alsoKnownAs: string[];
    service: Service[];
    versionId: string;
}
export interface MsgUpdateDidResponse {
    /** Not necessary */
    id: string;
}
export declare const MsgCreateDid: {
    encode(message: MsgCreateDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDid;
    fromJSON(object: any): MsgCreateDid;
    toJSON(message: MsgCreateDid): unknown;
    create<I extends {
        payload?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["payload"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_2 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_4 in Exclude<keyof I["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["payload"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["payload"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["payload"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_11 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_12 in Exclude<keyof I["payload"]["service"][number], keyof Service>]: never; })[] & { [K_13 in Exclude<keyof I["payload"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["payload"], keyof MsgCreateDidPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_15 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_16 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof MsgCreateDid>]: never; }>(base?: I | undefined): MsgCreateDid;
    fromPartial<I_1 extends {
        payload?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
        } & {
            context?: (string[] & string[] & { [K_18 in Exclude<keyof I_1["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_19 in Exclude<keyof I_1["payload"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_20 in Exclude<keyof I_1["payload"]["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_21 in Exclude<keyof I_1["payload"]["verificationMethod"][number]["publicKeyJwk"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_22 in Exclude<keyof I_1["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_23 in Exclude<keyof I_1["payload"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["payload"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_25 in Exclude<keyof I_1["payload"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_26 in Exclude<keyof I_1["payload"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_27 in Exclude<keyof I_1["payload"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_28 in Exclude<keyof I_1["payload"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_30 in Exclude<keyof I_1["payload"]["service"][number], keyof Service>]: never; })[] & { [K_31 in Exclude<keyof I_1["payload"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
        } & { [K_32 in Exclude<keyof I_1["payload"], keyof MsgCreateDidPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_33 in Exclude<keyof I_1["signatures"][number], keyof SignInfo>]: never; })[] & { [K_34 in Exclude<keyof I_1["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_35 in Exclude<keyof I_1, keyof MsgCreateDid>]: never; }>(object: I_1): MsgCreateDid;
};
export declare const MsgUpdateDid: {
    encode(message: MsgUpdateDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDid;
    fromJSON(object: any): MsgUpdateDid;
    toJSON(message: MsgUpdateDid): unknown;
    create<I extends {
        payload?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["payload"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_2 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["payload"]["verificationMethod"][number]["publicKeyJwk"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_4 in Exclude<keyof I["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["payload"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["payload"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["payload"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["payload"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["payload"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["payload"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_11 in Exclude<keyof I["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_12 in Exclude<keyof I["payload"]["service"][number], keyof Service>]: never; })[] & { [K_13 in Exclude<keyof I["payload"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_14 in Exclude<keyof I["payload"], keyof MsgUpdateDidPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_15 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_16 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof MsgUpdateDid>]: never; }>(base?: I | undefined): MsgUpdateDid;
    fromPartial<I_1 extends {
        payload?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            alsoKnownAs?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            versionId?: string | undefined;
        } & {
            context?: (string[] & string[] & { [K_18 in Exclude<keyof I_1["payload"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_19 in Exclude<keyof I_1["payload"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_20 in Exclude<keyof I_1["payload"]["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_21 in Exclude<keyof I_1["payload"]["verificationMethod"][number]["publicKeyJwk"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_22 in Exclude<keyof I_1["payload"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_23 in Exclude<keyof I_1["payload"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["payload"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_25 in Exclude<keyof I_1["payload"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_26 in Exclude<keyof I_1["payload"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_27 in Exclude<keyof I_1["payload"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_28 in Exclude<keyof I_1["payload"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_29 in Exclude<keyof I_1["payload"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_30 in Exclude<keyof I_1["payload"]["service"][number], keyof Service>]: never; })[] & { [K_31 in Exclude<keyof I_1["payload"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
            versionId?: string | undefined;
        } & { [K_32 in Exclude<keyof I_1["payload"], keyof MsgUpdateDidPayload>]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_33 in Exclude<keyof I_1["signatures"][number], keyof SignInfo>]: never; })[] & { [K_34 in Exclude<keyof I_1["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_35 in Exclude<keyof I_1, keyof MsgUpdateDid>]: never; }>(object: I_1): MsgUpdateDid;
};
export declare const MsgDeactivateDid: {
    encode(message: MsgDeactivateDid, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDid;
    fromJSON(object: any): MsgDeactivateDid;
    toJSON(message: MsgDeactivateDid): unknown;
    create<I extends {
        payload?: {
            id?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & { [K in Exclude<keyof I["payload"], "id">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_1 in Exclude<keyof I["signatures"][number], keyof SignInfo>]: never; })[] & { [K_2 in Exclude<keyof I["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_3 in Exclude<keyof I, keyof MsgDeactivateDid>]: never; }>(base?: I | undefined): MsgDeactivateDid;
    fromPartial<I_1 extends {
        payload?: {
            id?: string | undefined;
        } | undefined;
        signatures?: {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] | undefined;
    } & {
        payload?: ({
            id?: string | undefined;
        } & {
            id?: string | undefined;
        } & { [K_4 in Exclude<keyof I_1["payload"], "id">]: never; }) | undefined;
        signatures?: ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[] & ({
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        } & { [K_5 in Exclude<keyof I_1["signatures"][number], keyof SignInfo>]: never; })[] & { [K_6 in Exclude<keyof I_1["signatures"], keyof {
            verificationMethodId?: string | undefined;
            signature?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_7 in Exclude<keyof I_1, keyof MsgDeactivateDid>]: never; }>(object: I_1): MsgDeactivateDid;
};
export declare const SignInfo: {
    encode(message: SignInfo, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): SignInfo;
    fromJSON(object: any): SignInfo;
    toJSON(message: SignInfo): unknown;
    create<I extends {
        verificationMethodId?: string | undefined;
        signature?: string | undefined;
    } & {
        verificationMethodId?: string | undefined;
        signature?: string | undefined;
    } & { [K in Exclude<keyof I, keyof SignInfo>]: never; }>(base?: I | undefined): SignInfo;
    fromPartial<I_1 extends {
        verificationMethodId?: string | undefined;
        signature?: string | undefined;
    } & {
        verificationMethodId?: string | undefined;
        signature?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof SignInfo>]: never; }>(object: I_1): SignInfo;
};
export declare const MsgDeactivateDidPayload: {
    encode(message: MsgDeactivateDidPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidPayload;
    fromJSON(object: any): MsgDeactivateDidPayload;
    toJSON(message: MsgDeactivateDidPayload): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): MsgDeactivateDidPayload;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): MsgDeactivateDidPayload;
};
export declare const MsgDeactivateDidResponse: {
    encode(message: MsgDeactivateDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeactivateDidResponse;
    fromJSON(object: any): MsgDeactivateDidResponse;
    toJSON(message: MsgDeactivateDidResponse): unknown;
    create<I extends {
        did?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } | undefined;
        metadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } | undefined;
    } & {
        did?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } & {
            context?: (string[] & string[] & { [K in Exclude<keyof I["did"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["did"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_2 in Exclude<keyof I["did"]["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["did"]["verificationMethod"][number]["publicKeyJwk"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_4 in Exclude<keyof I["did"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["did"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["did"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["did"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["did"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["did"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["did"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_11 in Exclude<keyof I["did"]["service"][number], keyof Service>]: never; })[] & { [K_12 in Exclude<keyof I["did"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_13 in Exclude<keyof I["did"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        } & { [K_14 in Exclude<keyof I["did"], keyof Did>]: never; }) | undefined;
        metadata?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } & {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: (string[] & string[] & { [K_15 in Exclude<keyof I["metadata"]["resources"], keyof string[]>]: never; }) | undefined;
        } & { [K_16 in Exclude<keyof I["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_17 in Exclude<keyof I, keyof MsgDeactivateDidResponse>]: never; }>(base?: I | undefined): MsgDeactivateDidResponse;
    fromPartial<I_1 extends {
        did?: {
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } | undefined;
        metadata?: {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } | undefined;
    } & {
        did?: ({
            context?: string[] | undefined;
            id?: string | undefined;
            controller?: string[] | undefined;
            verificationMethod?: {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] | undefined;
            authentication?: string[] | undefined;
            assertionMethod?: string[] | undefined;
            capabilityInvocation?: string[] | undefined;
            capabilityDelegation?: string[] | undefined;
            keyAgreement?: string[] | undefined;
            service?: {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] | undefined;
            alsoKnownAs?: string[] | undefined;
        } & {
            context?: (string[] & string[] & { [K_18 in Exclude<keyof I_1["did"]["context"], keyof string[]>]: never; }) | undefined;
            id?: string | undefined;
            controller?: (string[] & string[] & { [K_19 in Exclude<keyof I_1["did"]["controller"], keyof string[]>]: never; }) | undefined;
            verificationMethod?: ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: ({
                    key?: string | undefined;
                    value?: string | undefined;
                }[] & ({
                    key?: string | undefined;
                    value?: string | undefined;
                } & {
                    key?: string | undefined;
                    value?: string | undefined;
                } & { [K_20 in Exclude<keyof I_1["did"]["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_21 in Exclude<keyof I_1["did"]["verificationMethod"][number]["publicKeyJwk"], keyof {
                    key?: string | undefined;
                    value?: string | undefined;
                }[]>]: never; }) | undefined;
                publicKeyMultibase?: string | undefined;
            } & { [K_22 in Exclude<keyof I_1["did"]["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_23 in Exclude<keyof I_1["did"]["verificationMethod"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                controller?: string | undefined;
                publicKeyJwk?: {
                    key?: string | undefined;
                    value?: string | undefined;
                }[] | undefined;
                publicKeyMultibase?: string | undefined;
            }[]>]: never; }) | undefined;
            authentication?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["did"]["authentication"], keyof string[]>]: never; }) | undefined;
            assertionMethod?: (string[] & string[] & { [K_25 in Exclude<keyof I_1["did"]["assertionMethod"], keyof string[]>]: never; }) | undefined;
            capabilityInvocation?: (string[] & string[] & { [K_26 in Exclude<keyof I_1["did"]["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
            capabilityDelegation?: (string[] & string[] & { [K_27 in Exclude<keyof I_1["did"]["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
            keyAgreement?: (string[] & string[] & { [K_28 in Exclude<keyof I_1["did"]["keyAgreement"], keyof string[]>]: never; }) | undefined;
            service?: ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[] & ({
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            } & { [K_29 in Exclude<keyof I_1["did"]["service"][number], keyof Service>]: never; })[] & { [K_30 in Exclude<keyof I_1["did"]["service"], keyof {
                id?: string | undefined;
                type?: string | undefined;
                serviceEndpoint?: string | undefined;
            }[]>]: never; }) | undefined;
            alsoKnownAs?: (string[] & string[] & { [K_31 in Exclude<keyof I_1["did"]["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        } & { [K_32 in Exclude<keyof I_1["did"], keyof Did>]: never; }) | undefined;
        metadata?: ({
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: string[] | undefined;
        } & {
            created?: string | undefined;
            updated?: string | undefined;
            deactivated?: boolean | undefined;
            versionId?: string | undefined;
            resources?: (string[] & string[] & { [K_33 in Exclude<keyof I_1["metadata"]["resources"], keyof string[]>]: never; }) | undefined;
        } & { [K_34 in Exclude<keyof I_1["metadata"], keyof Metadata>]: never; }) | undefined;
    } & { [K_35 in Exclude<keyof I_1, keyof MsgDeactivateDidResponse>]: never; }>(object: I_1): MsgDeactivateDidResponse;
};
export declare const MsgCreateDidPayload: {
    encode(message: MsgCreateDidPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidPayload;
    fromJSON(object: any): MsgCreateDidPayload;
    toJSON(message: MsgCreateDidPayload): unknown;
    create<I extends {
        context?: string[] | undefined;
        id?: string | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        alsoKnownAs?: string[] | undefined;
        service?: {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] | undefined;
    } & {
        context?: (string[] & string[] & { [K in Exclude<keyof I["context"], keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["controller"], keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & { [K_2 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>]: never; }) | undefined;
            publicKeyMultibase?: string | undefined;
        } & { [K_4 in Exclude<keyof I["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["verificationMethod"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["authentication"], keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["assertionMethod"], keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["keyAgreement"], keyof string[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_11 in Exclude<keyof I["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        service?: ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & { [K_12 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_13 in Exclude<keyof I["service"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof MsgCreateDidPayload>]: never; }>(base?: I | undefined): MsgCreateDidPayload;
    fromPartial<I_1 extends {
        context?: string[] | undefined;
        id?: string | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        alsoKnownAs?: string[] | undefined;
        service?: {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] | undefined;
    } & {
        context?: (string[] & string[] & { [K_15 in Exclude<keyof I_1["context"], keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_16 in Exclude<keyof I_1["controller"], keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & { [K_17 in Exclude<keyof I_1["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_18 in Exclude<keyof I_1["verificationMethod"][number]["publicKeyJwk"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>]: never; }) | undefined;
            publicKeyMultibase?: string | undefined;
        } & { [K_19 in Exclude<keyof I_1["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_20 in Exclude<keyof I_1["verificationMethod"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_21 in Exclude<keyof I_1["authentication"], keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_22 in Exclude<keyof I_1["assertionMethod"], keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_23 in Exclude<keyof I_1["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_25 in Exclude<keyof I_1["keyAgreement"], keyof string[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_26 in Exclude<keyof I_1["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        service?: ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & { [K_27 in Exclude<keyof I_1["service"][number], keyof Service>]: never; })[] & { [K_28 in Exclude<keyof I_1["service"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[]>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof MsgCreateDidPayload>]: never; }>(object: I_1): MsgCreateDidPayload;
};
export declare const MsgCreateDidResponse: {
    encode(message: MsgCreateDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDidResponse;
    fromJSON(object: any): MsgCreateDidResponse;
    toJSON(message: MsgCreateDidResponse): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): MsgCreateDidResponse;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): MsgCreateDidResponse;
};
export declare const MsgUpdateDidPayload: {
    encode(message: MsgUpdateDidPayload, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidPayload;
    fromJSON(object: any): MsgUpdateDidPayload;
    toJSON(message: MsgUpdateDidPayload): unknown;
    create<I extends {
        context?: string[] | undefined;
        id?: string | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        alsoKnownAs?: string[] | undefined;
        service?: {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] | undefined;
        versionId?: string | undefined;
    } & {
        context?: (string[] & string[] & { [K in Exclude<keyof I["context"], keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_1 in Exclude<keyof I["controller"], keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & { [K_2 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>]: never; }) | undefined;
            publicKeyMultibase?: string | undefined;
        } & { [K_4 in Exclude<keyof I["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["verificationMethod"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_6 in Exclude<keyof I["authentication"], keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_7 in Exclude<keyof I["assertionMethod"], keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_8 in Exclude<keyof I["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_9 in Exclude<keyof I["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_10 in Exclude<keyof I["keyAgreement"], keyof string[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_11 in Exclude<keyof I["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        service?: ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & { [K_12 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_13 in Exclude<keyof I["service"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[]>]: never; }) | undefined;
        versionId?: string | undefined;
    } & { [K_14 in Exclude<keyof I, keyof MsgUpdateDidPayload>]: never; }>(base?: I | undefined): MsgUpdateDidPayload;
    fromPartial<I_1 extends {
        context?: string[] | undefined;
        id?: string | undefined;
        controller?: string[] | undefined;
        verificationMethod?: {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] | undefined;
        authentication?: string[] | undefined;
        assertionMethod?: string[] | undefined;
        capabilityInvocation?: string[] | undefined;
        capabilityDelegation?: string[] | undefined;
        keyAgreement?: string[] | undefined;
        alsoKnownAs?: string[] | undefined;
        service?: {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] | undefined;
        versionId?: string | undefined;
    } & {
        context?: (string[] & string[] & { [K_15 in Exclude<keyof I_1["context"], keyof string[]>]: never; }) | undefined;
        id?: string | undefined;
        controller?: (string[] & string[] & { [K_16 in Exclude<keyof I_1["controller"], keyof string[]>]: never; }) | undefined;
        verificationMethod?: ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: ({
                key?: string | undefined;
                value?: string | undefined;
            }[] & ({
                key?: string | undefined;
                value?: string | undefined;
            } & {
                key?: string | undefined;
                value?: string | undefined;
            } & { [K_17 in Exclude<keyof I_1["verificationMethod"][number]["publicKeyJwk"][number], keyof import("./common.js").KeyValuePair>]: never; })[] & { [K_18 in Exclude<keyof I_1["verificationMethod"][number]["publicKeyJwk"], keyof {
                key?: string | undefined;
                value?: string | undefined;
            }[]>]: never; }) | undefined;
            publicKeyMultibase?: string | undefined;
        } & { [K_19 in Exclude<keyof I_1["verificationMethod"][number], keyof VerificationMethod>]: never; })[] & { [K_20 in Exclude<keyof I_1["verificationMethod"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            controller?: string | undefined;
            publicKeyJwk?: {
                key?: string | undefined;
                value?: string | undefined;
            }[] | undefined;
            publicKeyMultibase?: string | undefined;
        }[]>]: never; }) | undefined;
        authentication?: (string[] & string[] & { [K_21 in Exclude<keyof I_1["authentication"], keyof string[]>]: never; }) | undefined;
        assertionMethod?: (string[] & string[] & { [K_22 in Exclude<keyof I_1["assertionMethod"], keyof string[]>]: never; }) | undefined;
        capabilityInvocation?: (string[] & string[] & { [K_23 in Exclude<keyof I_1["capabilityInvocation"], keyof string[]>]: never; }) | undefined;
        capabilityDelegation?: (string[] & string[] & { [K_24 in Exclude<keyof I_1["capabilityDelegation"], keyof string[]>]: never; }) | undefined;
        keyAgreement?: (string[] & string[] & { [K_25 in Exclude<keyof I_1["keyAgreement"], keyof string[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_26 in Exclude<keyof I_1["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
        service?: ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] & ({
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        } & { [K_27 in Exclude<keyof I_1["service"][number], keyof Service>]: never; })[] & { [K_28 in Exclude<keyof I_1["service"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[]>]: never; }) | undefined;
        versionId?: string | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof MsgUpdateDidPayload>]: never; }>(object: I_1): MsgUpdateDidPayload;
};
export declare const MsgUpdateDidResponse: {
    encode(message: MsgUpdateDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateDidResponse;
    fromJSON(object: any): MsgUpdateDidResponse;
    toJSON(message: MsgUpdateDidResponse): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): MsgUpdateDidResponse;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): MsgUpdateDidResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse>;
    UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse>;
    DeactivateDid(request: MsgDeactivateDid): Promise<MsgDeactivateDidResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    CreateDid(request: MsgCreateDid): Promise<MsgCreateDidResponse>;
    UpdateDid(request: MsgUpdateDid): Promise<MsgUpdateDidResponse>;
    DeactivateDid(request: MsgDeactivateDid): Promise<MsgDeactivateDidResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=tx.d.ts.map