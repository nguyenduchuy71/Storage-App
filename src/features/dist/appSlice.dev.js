"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.selectRoomId = exports.enterRoom = exports.appSlice = void 0;

var _toolkit = require("@reduxjs/toolkit");

var appSlice = (0, _toolkit.createSlice)({
  name: "app",
  initialState: {
    roomId: null
  },
  reducers: {
    enterRoom: function enterRoom(state, action) {
      state.roomId = action.payload.roomId;
    }
  }
});
exports.appSlice = appSlice;
var enterRoom = appSlice.actions.enterRoom;
exports.enterRoom = enterRoom;

var selectRoomId = function selectRoomId(state) {
  return state.app.roomId;
};

exports.selectRoomId = selectRoomId;
var _default = appSlice.reducer;
exports["default"] = _default;