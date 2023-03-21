import _m0 from "protobufjs/minimal.js";
import { KeyValuePair } from "./common.js";
export interface Did {
    /** optional */
    context: string[];
    id: string;
    /** optional */
    controller: string[];
    /** optional */
    verificationMethod: VerificationMethod[];
    /** optional */
    authentication: string[];
    /** optional */
    assertionMethod: string[];
    /** optional */
    capabilityInvocation: string[];
    /** optional */
    capabilityDelegation: string[];
    /** optional */
    keyAgreement: string[];
    /** optional */
    service: Service[];
    /** optional */
    alsoKnownAs: string[];
}
export interface VerificationMethod {
    id: string;
    type: string;
    controller: string;
    /** optional */
    publicKeyJwk: KeyValuePair[];
    /** optional */
    publicKeyMultibase: string;
}
export interface Service {
    id: string;
    type: string;
    serviceEndpoint: string;
}
export declare const Did: {
    encode(message: Did, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Did;
    fromJSON(object: any): Did;
    toJSON(message: Did): unknown;
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
        service?: {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] | undefined;
        alsoKnownAs?: string[] | undefined;
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
            } & { [K_2 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"][number], keyof KeyValuePair>]: never; })[] & { [K_3 in Exclude<keyof I["verificationMethod"][number]["publicKeyJwk"], keyof {
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
        } & { [K_11 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_12 in Exclude<keyof I["service"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_13 in Exclude<keyof I["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
    } & { [K_14 in Exclude<keyof I, keyof Did>]: never; }>(base?: I | undefined): Did;
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
        service?: {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[] | undefined;
        alsoKnownAs?: string[] | undefined;
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
            } & { [K_17 in Exclude<keyof I_1["verificationMethod"][number]["publicKeyJwk"][number], keyof KeyValuePair>]: never; })[] & { [K_18 in Exclude<keyof I_1["verificationMethod"][number]["publicKeyJwk"], keyof {
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
        } & { [K_26 in Exclude<keyof I_1["service"][number], keyof Service>]: never; })[] & { [K_27 in Exclude<keyof I_1["service"], keyof {
            id?: string | undefined;
            type?: string | undefined;
            serviceEndpoint?: string | undefined;
        }[]>]: never; }) | undefined;
        alsoKnownAs?: (string[] & string[] & { [K_28 in Exclude<keyof I_1["alsoKnownAs"], keyof string[]>]: never; }) | undefined;
    } & { [K_29 in Exclude<keyof I_1, keyof Did>]: never; }>(object: I_1): Did;
};
export declare const VerificationMethod: {
    encode(message: VerificationMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod;
    fromJSON(object: any): VerificationMethod;
    toJSON(message: VerificationMethod): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["publicKeyJwk"][number], keyof KeyValuePair>]: never; })[] & { [K_1 in Exclude<keyof I["publicKeyJwk"], keyof {
            key?: string | undefined;
            value?: string | undefined;
        }[]>]: never; }) | undefined;
        publicKeyMultibase?: string | undefined;
    } & { [K_2 in Exclude<keyof I, keyof VerificationMethod>]: never; }>(base?: I | undefined): VerificationMethod;
    fromPartial<I_1 extends {
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
        } & { [K_3 in Exclude<keyof I_1["publicKeyJwk"][number], keyof KeyValuePair>]: never; })[] & { [K_4 in Exclude<keyof I_1["publicKeyJwk"], keyof {
            key?: string | undefined;
            value?: string | undefined;
        }[]>]: never; }) | undefined;
        publicKeyMultibase?: string | undefined;
    } & { [K_5 in Exclude<keyof I_1, keyof VerificationMethod>]: never; }>(object: I_1): VerificationMethod;
};
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    create<I extends {
        id?: string | undefined;
        type?: string | undefined;
        serviceEndpoint?: string | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
        serviceEndpoint?: string | undefined;
    } & { [K in Exclude<keyof I, keyof Service>]: never; }>(base?: I | undefined): Service;
    fromPartial<I_1 extends {
        id?: string | undefined;
        type?: string | undefined;
        serviceEndpoint?: string | undefined;
    } & {
        id?: string | undefined;
        type?: string | undefined;
        serviceEndpoint?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, keyof Service>]: never; }>(object: I_1): Service;
};
//# sourceMappingURL=did.d.ts.map