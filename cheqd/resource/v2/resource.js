/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Timestamp } from "../../../google/protobuf/timestamp.js";
function createBaseResource() {
    return { data: new Uint8Array() };
}
export const Resource = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data.length !== 0) {
            writer.uint32(10).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResource();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return { data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array() };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    create(base) {
        return Resource.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResource();
        message.data = object.data ?? new Uint8Array();
        return message;
    },
};
function createBaseMetadata() {
    return {
        collectionId: "",
        id: "",
        name: "",
        version: "",
        resourceType: "",
        alsoKnownAs: [],
        mediaType: "",
        created: undefined,
        checksum: "",
        previousVersionId: "",
        nextVersionId: "",
    };
}
export const Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.version !== "") {
            writer.uint32(34).string(message.version);
        }
        if (message.resourceType !== "") {
            writer.uint32(42).string(message.resourceType);
        }
        for (const v of message.alsoKnownAs) {
            AlternativeUri.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.mediaType !== "") {
            writer.uint32(58).string(message.mediaType);
        }
        if (message.created !== undefined) {
            Timestamp.encode(toTimestamp(message.created), writer.uint32(66).fork()).ldelim();
        }
        if (message.checksum !== "") {
            writer.uint32(74).string(message.checksum);
        }
        if (message.previousVersionId !== "") {
            writer.uint32(82).string(message.previousVersionId);
        }
        if (message.nextVersionId !== "") {
            writer.uint32(90).string(message.nextVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.collectionId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.version = reader.string();
                    break;
                case 5:
                    message.resourceType = reader.string();
                    break;
                case 6:
                    message.alsoKnownAs.push(AlternativeUri.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.mediaType = reader.string();
                    break;
                case 8:
                    message.created = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
                    break;
                case 9:
                    message.checksum = reader.string();
                    break;
                case 10:
                    message.previousVersionId = reader.string();
                    break;
                case 11:
                    message.nextVersionId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            collectionId: isSet(object.collectionId) ? String(object.collectionId) : "",
            id: isSet(object.id) ? String(object.id) : "",
            name: isSet(object.name) ? String(object.name) : "",
            version: isSet(object.version) ? String(object.version) : "",
            resourceType: isSet(object.resourceType) ? String(object.resourceType) : "",
            alsoKnownAs: Array.isArray(object?.alsoKnownAs)
                ? object.alsoKnownAs.map((e) => AlternativeUri.fromJSON(e))
                : [],
            mediaType: isSet(object.mediaType) ? String(object.mediaType) : "",
            created: isSet(object.created) ? fromJsonTimestamp(object.created) : undefined,
            checksum: isSet(object.checksum) ? String(object.checksum) : "",
            previousVersionId: isSet(object.previousVersionId) ? String(object.previousVersionId) : "",
            nextVersionId: isSet(object.nextVersionId) ? String(object.nextVersionId) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined && (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.version !== undefined && (obj.version = message.version);
        message.resourceType !== undefined && (obj.resourceType = message.resourceType);
        if (message.alsoKnownAs) {
            obj.alsoKnownAs = message.alsoKnownAs.map((e) => e ? AlternativeUri.toJSON(e) : undefined);
        }
        else {
            obj.alsoKnownAs = [];
        }
        message.mediaType !== undefined && (obj.mediaType = message.mediaType);
        message.created !== undefined && (obj.created = message.created.toISOString());
        message.checksum !== undefined && (obj.checksum = message.checksum);
        message.previousVersionId !== undefined && (obj.previousVersionId = message.previousVersionId);
        message.nextVersionId !== undefined && (obj.nextVersionId = message.nextVersionId);
        return obj;
    },
    create(base) {
        return Metadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.collectionId = object.collectionId ?? "";
        message.id = object.id ?? "";
        message.name = object.name ?? "";
        message.version = object.version ?? "";
        message.resourceType = object.resourceType ?? "";
        message.alsoKnownAs = object.alsoKnownAs?.map((e) => AlternativeUri.fromPartial(e)) || [];
        message.mediaType = object.mediaType ?? "";
        message.created = object.created ?? undefined;
        message.checksum = object.checksum ?? "";
        message.previousVersionId = object.previousVersionId ?? "";
        message.nextVersionId = object.nextVersionId ?? "";
        return message;
    },
};
function createBaseAlternativeUri() {
    return { uri: "", description: "" };
}
export const AlternativeUri = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.uri !== "") {
            writer.uint32(10).string(message.uri);
        }
        if (message.description !== "") {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAlternativeUri();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.uri = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            uri: isSet(object.uri) ? String(object.uri) : "",
            description: isSet(object.description) ? String(object.description) : "",
        };
    },
    toJSON(message) {
        const obj = {};
        message.uri !== undefined && (obj.uri = message.uri);
        message.description !== undefined && (obj.description = message.description);
        return obj;
    },
    create(base) {
        return AlternativeUri.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseAlternativeUri();
        message.uri = object.uri ?? "";
        message.description = object.description ?? "";
        return message;
    },
};
function createBaseResourceWithMetadata() {
    return { resource: undefined, metadata: undefined };
}
export const ResourceWithMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.resource !== undefined) {
            Resource.encode(message.resource, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResourceWithMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.resource = Resource.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata = Metadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            resource: isSet(object.resource) ? Resource.fromJSON(object.resource) : undefined,
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.resource !== undefined && (obj.resource = message.resource ? Resource.toJSON(message.resource) : undefined);
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    create(base) {
        return ResourceWithMetadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseResourceWithMetadata();
        message.resource = (object.resource !== undefined && object.resource !== null)
            ? Resource.fromPartial(object.resource)
            : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
var tsProtoGlobalThis = (() => {
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof global !== "undefined") {
        return global;
    }
    throw "Unable to locate global object";
})();
function bytesFromBase64(b64) {
    if (tsProtoGlobalThis.Buffer) {
        return Uint8Array.from(tsProtoGlobalThis.Buffer.from(b64, "base64"));
    }
    else {
        const bin = tsProtoGlobalThis.atob(b64);
        const arr = new Uint8Array(bin.length);
        for (let i = 0; i < bin.length; ++i) {
            arr[i] = bin.charCodeAt(i);
        }
        return arr;
    }
}
function base64FromBytes(arr) {
    if (tsProtoGlobalThis.Buffer) {
        return tsProtoGlobalThis.Buffer.from(arr).toString("base64");
    }
    else {
        const bin = [];
        arr.forEach((byte) => {
            bin.push(String.fromCharCode(byte));
        });
        return tsProtoGlobalThis.btoa(bin.join(""));
    }
}
function toTimestamp(date) {
    const seconds = numberToLong(date.getTime() / 1_000);
    const nanos = (date.getTime() % 1_000) * 1_000_000;
    return { seconds, nanos };
}
function fromTimestamp(t) {
    let millis = t.seconds.toNumber() * 1_000;
    millis += t.nanos / 1_000_000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return Long.fromNumber(number);
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=resource.js.map