import { EncryptionMode, UID, SDK_MODE } from "agora-rtc-sdk-ng";

const config: configType = {
  uid: 0,
  appId: "40e7b71ff8aa48f7a55d9c39b0d5e42e",
  channelName: "sample-test-video",
  rtcToken: "007eJxTYOg/bNAsdvv1hsu84ZNmMl7eOKf3p2+AkNaH08F2rfdr7f4rMJgYpJonmRumpVkkJppYpJknmpqmWCYbWyYZpJimmhilzmWwS2sIZGRQec3IAIMgviBDcWJuQU6qbklqcYluWWZKaj4DAwBziyUG",
  serverUrl: "",
  proxyUrl: "http://localhost:8080/",
  tokenExpiryTime: 600,
  token: "",
  encryptionMode: "aes-128-gcm2",
  salt: "",
  encryptionKey: "",
  destChannelName: "",
  destChannelToken: "",
  destUID: 2,
  secondChannel: "",
  secondChannelToken: "",
  secondChannelUID: 2,
  selectedProduct: "rtc"
};

export type configType = {
  uid: UID;
  appId: string;
  channelName: string;
  rtcToken: string | null;
  serverUrl: string;
  proxyUrl: string;
  tokenExpiryTime: number;
  token: string;
  encryptionMode: EncryptionMode;
  salt: "";
  encryptionKey: string;
  destUID: number;
  destChannelName: string,
  destChannelToken: string,
  secondChannel: string,
  secondChannelToken: string
  secondChannelUID: number,
  selectedProduct: SDK_MODE
};

export default config;