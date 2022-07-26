"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceHeader = exports.Resource = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "cheqdid.cheqdnode.resource.v1";
const baseResource = {};
exports.Resource = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.header !== undefined) {
            exports.ResourceHeader.encode(message.header, writer.uint32(10).fork()).ldelim();
        }
        if (message.data.length !== 0) {
            writer.uint32(18).bytes(message.data);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResource };
        message.data = new Uint8Array();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.header = exports.ResourceHeader.decode(reader, reader.uint32());
                    break;
                case 2:
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
        const message = { ...baseResource };
        message.data = new Uint8Array();
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.ResourceHeader.fromJSON(object.header);
        }
        else {
            message.header = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.header !== undefined &&
            (obj.header = message.header
                ? exports.ResourceHeader.toJSON(message.header)
                : undefined);
        message.data !== undefined &&
            (obj.data = base64FromBytes(message.data !== undefined ? message.data : new Uint8Array()));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = { ...baseResource };
        if (object.header !== undefined && object.header !== null) {
            message.header = exports.ResourceHeader.fromPartial(object.header);
        }
        else {
            message.header = undefined;
        }
        message.data = (_a = object.data) !== null && _a !== void 0 ? _a : new Uint8Array();
        return message;
    },
};
const baseResourceHeader = {
    collectionId: "",
    id: "",
    name: "",
    resourceType: "",
    mediaType: "",
    created: "",
    previousVersionId: "",
    nextVersionId: "",
};
exports.ResourceHeader = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.collectionId !== "") {
            writer.uint32(10).string(message.collectionId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.name !== "") {
            writer.uint32(26).string(message.name);
        }
        if (message.resourceType !== "") {
            writer.uint32(34).string(message.resourceType);
        }
        if (message.mediaType !== "") {
            writer.uint32(42).string(message.mediaType);
        }
        if (message.created !== "") {
            writer.uint32(50).string(message.created);
        }
        if (message.checksum.length !== 0) {
            writer.uint32(58).bytes(message.checksum);
        }
        if (message.previousVersionId !== "") {
            writer.uint32(66).string(message.previousVersionId);
        }
        if (message.nextVersionId !== "") {
            writer.uint32(74).string(message.nextVersionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseResourceHeader };
        message.checksum = new Uint8Array();
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
                    message.resourceType = reader.string();
                    break;
                case 5:
                    message.mediaType = reader.string();
                    break;
                case 6:
                    message.created = reader.string();
                    break;
                case 7:
                    message.checksum = reader.bytes();
                    break;
                case 8:
                    message.previousVersionId = reader.string();
                    break;
                case 9:
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
        const message = { ...baseResourceHeader };
        message.checksum = new Uint8Array();
        if (object.collectionId !== undefined && object.collectionId !== null) {
            message.collectionId = String(object.collectionId);
        }
        else {
            message.collectionId = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.resourceType !== undefined && object.resourceType !== null) {
            message.resourceType = String(object.resourceType);
        }
        else {
            message.resourceType = "";
        }
        if (object.mediaType !== undefined && object.mediaType !== null) {
            message.mediaType = String(object.mediaType);
        }
        else {
            message.mediaType = "";
        }
        if (object.created !== undefined && object.created !== null) {
            message.created = String(object.created);
        }
        else {
            message.created = "";
        }
        if (object.checksum !== undefined && object.checksum !== null) {
            message.checksum = bytesFromBase64(object.checksum);
        }
        if (object.previousVersionId !== undefined &&
            object.previousVersionId !== null) {
            message.previousVersionId = String(object.previousVersionId);
        }
        else {
            message.previousVersionId = "";
        }
        if (object.nextVersionId !== undefined && object.nextVersionId !== null) {
            message.nextVersionId = String(object.nextVersionId);
        }
        else {
            message.nextVersionId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.collectionId !== undefined &&
            (obj.collectionId = message.collectionId);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.resourceType !== undefined &&
            (obj.resourceType = message.resourceType);
        message.mediaType !== undefined && (obj.mediaType = message.mediaType);
        message.created !== undefined && (obj.created = message.created);
        message.checksum !== undefined &&
            (obj.checksum = base64FromBytes(message.checksum !== undefined ? message.checksum : new Uint8Array()));
        message.previousVersionId !== undefined &&
            (obj.previousVersionId = message.previousVersionId);
        message.nextVersionId !== undefined &&
            (obj.nextVersionId = message.nextVersionId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const message = { ...baseResourceHeader };
        message.collectionId = (_a = object.collectionId) !== null && _a !== void 0 ? _a : "";
        message.id = (_b = object.id) !== null && _b !== void 0 ? _b : "";
        message.name = (_c = object.name) !== null && _c !== void 0 ? _c : "";
        message.resourceType = (_d = object.resourceType) !== null && _d !== void 0 ? _d : "";
        message.mediaType = (_e = object.mediaType) !== null && _e !== void 0 ? _e : "";
        message.created = (_f = object.created) !== null && _f !== void 0 ? _f : "";
        message.checksum = (_g = object.checksum) !== null && _g !== void 0 ? _g : new Uint8Array();
        message.previousVersionId = (_h = object.previousVersionId) !== null && _h !== void 0 ? _h : "";
        message.nextVersionId = (_j = object.nextVersionId) !== null && _j !== void 0 ? _j : "";
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
