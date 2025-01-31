/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal.js";
import { Any } from "../../../google/protobuf/any.js";
function createBaseStateValue() {
    return { data: undefined, metadata: undefined };
}
export const StateValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.data !== undefined) {
            Any.encode(message.data, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseStateValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.data = Any.decode(reader, reader.uint32());
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
            data: isSet(object.data) ? Any.fromJSON(object.data) : undefined,
            metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.data !== undefined && (obj.data = message.data ? Any.toJSON(message.data) : undefined);
        message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
        return obj;
    },
    create(base) {
        return StateValue.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseStateValue();
        message.data = (object.data !== undefined && object.data !== null) ? Any.fromPartial(object.data) : undefined;
        message.metadata = (object.metadata !== undefined && object.metadata !== null)
            ? Metadata.fromPartial(object.metadata)
            : undefined;
        return message;
    },
};
function createBaseMetadata() {
    return { created: "", updated: "", deactivated: false, versionId: "", resources: [] };
}
export const Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.created !== "") {
            writer.uint32(10).string(message.created);
        }
        if (message.updated !== "") {
            writer.uint32(18).string(message.updated);
        }
        if (message.deactivated === true) {
            writer.uint32(24).bool(message.deactivated);
        }
        if (message.versionId !== "") {
            writer.uint32(34).string(message.versionId);
        }
        for (const v of message.resources) {
            writer.uint32(42).string(v);
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
                    message.created = reader.string();
                    break;
                case 2:
                    message.updated = reader.string();
                    break;
                case 3:
                    message.deactivated = reader.bool();
                    break;
                case 4:
                    message.versionId = reader.string();
                    break;
                case 5:
                    message.resources.push(reader.string());
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
            created: isSet(object.created) ? String(object.created) : "",
            updated: isSet(object.updated) ? String(object.updated) : "",
            deactivated: isSet(object.deactivated) ? Boolean(object.deactivated) : false,
            versionId: isSet(object.versionId) ? String(object.versionId) : "",
            resources: Array.isArray(object?.resources) ? object.resources.map((e) => String(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.created !== undefined && (obj.created = message.created);
        message.updated !== undefined && (obj.updated = message.updated);
        message.deactivated !== undefined && (obj.deactivated = message.deactivated);
        message.versionId !== undefined && (obj.versionId = message.versionId);
        if (message.resources) {
            obj.resources = message.resources.map((e) => e);
        }
        else {
            obj.resources = [];
        }
        return obj;
    },
    create(base) {
        return Metadata.fromPartial(base ?? {});
    },
    fromPartial(object) {
        const message = createBaseMetadata();
        message.created = object.created ?? "";
        message.updated = object.updated ?? "";
        message.deactivated = object.deactivated ?? false;
        message.versionId = object.versionId ?? "";
        message.resources = object.resources?.map((e) => e) || [];
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=stateValue.js.map