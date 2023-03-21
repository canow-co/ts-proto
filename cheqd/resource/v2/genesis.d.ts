import _m0 from "protobufjs/minimal.js";
import { FeeParams } from "./fee.js";
import { ResourceWithMetadata } from "./resource.js";
/** GenesisState defines the chqed Resource module's genesis state */
export interface GenesisState {
    /** All Resources with metadata */
    resources: ResourceWithMetadata[];
    /**
     * Fee parameters for the Resource module
     * Defines fixed fees and burn percentage for resources
     */
    feeParams: FeeParams | undefined;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        resources?: {
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
        }[] | undefined;
        feeParams?: {
            image?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            json?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            default?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } | undefined;
    } & {
        resources?: ({
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
        }[] & ({
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
            } & { [K in Exclude<keyof I["resources"][number]["resource"], "data">]: never; }) | undefined;
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
                } & { [K_1 in Exclude<keyof I["resources"][number]["metadata"]["alsoKnownAs"][number], keyof import("./resource.js").AlternativeUri>]: never; })[] & { [K_2 in Exclude<keyof I["resources"][number]["metadata"]["alsoKnownAs"], keyof {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[]>]: never; }) | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K_3 in Exclude<keyof I["resources"][number]["metadata"], keyof import("./resource.js").Metadata>]: never; }) | undefined;
        } & { [K_4 in Exclude<keyof I["resources"][number], keyof ResourceWithMetadata>]: never; })[] & { [K_5 in Exclude<keyof I["resources"], keyof {
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
        }[]>]: never; }) | undefined;
        feeParams?: ({
            image?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            json?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            default?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } & {
            image?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_6 in Exclude<keyof I["feeParams"]["image"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            json?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_7 in Exclude<keyof I["feeParams"]["json"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            default?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_8 in Exclude<keyof I["feeParams"]["default"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            burnFactor?: string | undefined;
        } & { [K_9 in Exclude<keyof I["feeParams"], keyof FeeParams>]: never; }) | undefined;
    } & { [K_10 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I | undefined): GenesisState;
    fromPartial<I_1 extends {
        resources?: {
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
        }[] | undefined;
        feeParams?: {
            image?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            json?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            default?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } | undefined;
    } & {
        resources?: ({
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
        }[] & ({
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
            } & { [K_11 in Exclude<keyof I_1["resources"][number]["resource"], "data">]: never; }) | undefined;
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
                } & { [K_12 in Exclude<keyof I_1["resources"][number]["metadata"]["alsoKnownAs"][number], keyof import("./resource.js").AlternativeUri>]: never; })[] & { [K_13 in Exclude<keyof I_1["resources"][number]["metadata"]["alsoKnownAs"], keyof {
                    uri?: string | undefined;
                    description?: string | undefined;
                }[]>]: never; }) | undefined;
                mediaType?: string | undefined;
                created?: Date | undefined;
                checksum?: string | undefined;
                previousVersionId?: string | undefined;
                nextVersionId?: string | undefined;
            } & { [K_14 in Exclude<keyof I_1["resources"][number]["metadata"], keyof import("./resource.js").Metadata>]: never; }) | undefined;
        } & { [K_15 in Exclude<keyof I_1["resources"][number], keyof ResourceWithMetadata>]: never; })[] & { [K_16 in Exclude<keyof I_1["resources"], keyof {
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
        }[]>]: never; }) | undefined;
        feeParams?: ({
            image?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            json?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            default?: {
                denom?: string | undefined;
                amount?: string | undefined;
            } | undefined;
            burnFactor?: string | undefined;
        } & {
            image?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_17 in Exclude<keyof I_1["feeParams"]["image"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            json?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_18 in Exclude<keyof I_1["feeParams"]["json"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            default?: ({
                denom?: string | undefined;
                amount?: string | undefined;
            } & {
                denom?: string | undefined;
                amount?: string | undefined;
            } & { [K_19 in Exclude<keyof I_1["feeParams"]["default"], keyof import("../../../cosmos/base/v1beta1/coin.js").Coin>]: never; }) | undefined;
            burnFactor?: string | undefined;
        } & { [K_20 in Exclude<keyof I_1["feeParams"], keyof FeeParams>]: never; }) | undefined;
    } & { [K_21 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
};
//# sourceMappingURL=genesis.d.ts.map