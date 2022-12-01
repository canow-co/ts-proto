"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const stateValue_1 = require("./stateValue");
exports.protobufPackage = "cheqdid.cheqdnode.cheqd.v1";
function createBaseGenesisState() {
    return { didNamespace: "", didList: [] };
}
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.didNamespace !== "") {
            writer.uint32(10).string(message.didNamespace);
        }
        for (const v of message.didList) {
            stateValue_1.StateValue.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseGenesisState();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.didNamespace = reader.string();
                    break;
                case 2:
                    message.didList.push(stateValue_1.StateValue.decode(reader, reader.uint32()));
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
            didNamespace: isSet(object.didNamespace) ? String(object.didNamespace) : "",
            didList: Array.isArray(object?.didList) ? object.didList.map((e) => stateValue_1.StateValue.fromJSON(e)) : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.didNamespace !== undefined && (obj.didNamespace = message.didNamespace);
        if (message.didList) {
            obj.didList = message.didList.map((e) => e ? stateValue_1.StateValue.toJSON(e) : undefined);
        }
        else {
            obj.didList = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.didNamespace = object.didNamespace ?? "";
        message.didList = object.didList?.map((e) => stateValue_1.StateValue.fromPartial(e)) || [];
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=genesis.js.map