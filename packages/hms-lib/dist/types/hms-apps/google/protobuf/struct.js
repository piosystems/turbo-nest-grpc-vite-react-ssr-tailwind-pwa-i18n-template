"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListValue = exports.Value = exports.Struct = exports.GOOGLE_PROTOBUF_PACKAGE_NAME = exports.NullValue = exports.protobufPackage = void 0;
const protobufjs_1 = require("protobufjs");
exports.protobufPackage = "google.protobuf";
var NullValue;
(function (NullValue) {
    NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    NullValue[NullValue["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(NullValue || (exports.NullValue = NullValue = {}));
exports.GOOGLE_PROTOBUF_PACKAGE_NAME = "google.protobuf";
function createBaseStruct() {
    return { fields: {} };
}
exports.Struct = {
    wrap(object) {
        const struct = createBaseStruct();
        if (object !== undefined) {
            Object.keys(object).forEach((key) => {
                struct.fields[key] = exports.Value.wrap(object[key]);
            });
        }
        return struct;
    },
    unwrap(message) {
        const object = {};
        if (message.fields) {
            Object.keys(message.fields).forEach((key) => {
                object[key] = exports.Value.unwrap(message.fields[key]);
            });
        }
        return object;
    },
};
function createBaseValue() {
    return {};
}
exports.Value = {
    wrap(value) {
        const result = {};
        if (value === null) {
            result.nullValue = NullValue.NULL_VALUE;
        }
        else if (typeof value === "boolean") {
            result.boolValue = value;
        }
        else if (typeof value === "number") {
            result.numberValue = value;
        }
        else if (typeof value === "string") {
            result.stringValue = value;
        }
        else if (globalThis.Array.isArray(value)) {
            result.listValue = exports.ListValue.wrap(value);
        }
        else if (typeof value === "object") {
            result.structValue = exports.Struct.wrap(value);
        }
        else if (typeof value !== "undefined") {
            throw new Error("Unsupported any value type: " + typeof value);
        }
        return result;
    },
    unwrap(message) {
        if (message?.hasOwnProperty("stringValue") && message.stringValue !== undefined) {
            return message.stringValue;
        }
        else if (message?.hasOwnProperty("numberValue") && message?.numberValue !== undefined) {
            return message.numberValue;
        }
        else if (message?.hasOwnProperty("boolValue") && message?.boolValue !== undefined) {
            return message.boolValue;
        }
        else if (message?.hasOwnProperty("structValue") && message?.structValue !== undefined) {
            return exports.Struct.unwrap(message.structValue);
        }
        else if (message?.hasOwnProperty("listValue") && message?.listValue !== undefined) {
            return exports.ListValue.unwrap(message.listValue);
        }
        else if (message?.hasOwnProperty("nullValue") && message?.nullValue !== undefined) {
            return null;
        }
        return undefined;
    },
};
function createBaseListValue() {
    return { values: [] };
}
exports.ListValue = {
    wrap(array) {
        const result = createBaseListValue();
        result.values = (array ?? []).map(exports.Value.wrap);
        return result;
    },
    unwrap(message) {
        if (message?.hasOwnProperty("values") && globalThis.Array.isArray(message.values)) {
            return message.values.map(exports.Value.unwrap);
        }
        else {
            return message;
        }
    },
};
protobufjs_1.wrappers[".google.protobuf.Struct"] = { fromObject: exports.Struct.wrap, toObject: exports.Struct.unwrap };
//# sourceMappingURL=struct.js.map