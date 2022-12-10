"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = exports.provider = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/compat/app"));

require("firebase/compat/firestore");

require("firebase/compat/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var firebaseConfig = {
  apiKey: "AIzaSyBOGFv9isVFDQNXwTCCOdmDxfuPpVhLJjw",
  authDomain: "storage-app-eee55.firebaseapp.com",
  projectId: "storage-app-eee55",
  storageBucket: "storage-app-eee55.appspot.com",
  messagingSenderId: "1019170109992",
  appId: "1:1019170109992:web:0af2410a50ef4d7ace131d",
  measurementId: "G-SQ4JQSLRER"
};

var firebaseApp = _app["default"].initializeApp(firebaseConfig);

var db = firebaseApp.firestore();
exports.db = db;

var auth = _app["default"].auth();

exports.auth = auth;
var provider = new _app["default"].auth.GoogleAuthProvider();
exports.provider = provider;