import _m0 from "protobufjs/minimal.js";
import { Did } from "./did.js";
import { Metadata } from "./stateValue.js";
export interface QueryGetDidRequest {
    id: string;
}
export interface QueryGetDidResponse {
    did: Did | undefined;
    metadata: Metadata | undefined;
}
export declare const QueryGetDidRequest: {
    encode(message: QueryGetDidRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidRequest;
    fromJSON(object: any): QueryGetDidRequest;
    toJSON(message: QueryGetDidRequest): unknown;
    create<I extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K in Exclude<keyof I, "id">]: never; }>(base?: I | undefined): QueryGetDidRequest;
    fromPartial<I_1 extends {
        id?: string | undefined;
    } & {
        id?: string | undefined;
    } & { [K_1 in Exclude<keyof I_1, "id">]: never; }>(object: I_1): QueryGetDidRequest;
};
export declare const QueryGetDidResponse: {
    encode(message: QueryGetDidResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDidResponse;
    fromJSON(object: any): QueryGetDidResponse;
    toJSON(message: QueryGetDidResponse): unknown;
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
            } & { [K_4 in Exclude<keyof I["did"]["verificationMethod"][number], keyof import("./did.js").VerificationMethod>]: never; })[] & { [K_5 in Exclude<keyof I["did"]["verificationMethod"], keyof {
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
            } & { [K_11 in Exclude<keyof I["did"]["service"][number], keyof import("./did.js").Service>]: never; })[] & { [K_12 in Exclude<keyof I["did"]["service"], keyof {
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
    } & { [K_17 in Exclude<keyof I, keyof QueryGetDidResponse>]: never; }>(base?: I | undefined): QueryGetDidResponse;
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
            } & { [K_22 in Exclude<keyof I_1["did"]["verificationMethod"][number], keyof import("./did.js").VerificationMethod>]: never; })[] & { [K_23 in Exclude<keyof I_1["did"]["verificationMethod"], keyof {
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
            } & { [K_29 in Exclude<keyof I_1["did"]["service"][number], keyof import("./did.js").Service>]: never; })[] & { [K_30 in Exclude<keyof I_1["did"]["service"], keyof {
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
    } & { [K_35 in Exclude<keyof I_1, keyof QueryGetDidResponse>]: never; }>(object: I_1): QueryGetDidResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Did(request: QueryGetDidRequest): Promise<QueryGetDidResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
export {};
//# sourceMappingURL=query.d.ts.map