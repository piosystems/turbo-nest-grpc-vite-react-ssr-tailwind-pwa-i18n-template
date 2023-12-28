/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { wrappers } from "protobufjs";
import { Observable } from "rxjs";
import { Struct } from "../google/protobuf/struct";
import { Timestamp } from "../google/protobuf/timestamp";

export const protobufPackage = "identity";

export enum Gender {
  M = 0,
  F = 1,
  UNRECOGNIZED = -1,
}

export enum CountryList {
  AF = 0,
  AX = 1,
  AL = 2,
  DZ = 3,
  AS = 4,
  AD = 5,
  AO = 6,
  AI = 7,
  AQ = 8,
  AG = 9,
  AR = 10,
  AM = 11,
  AW = 12,
  AU = 13,
  AT = 14,
  AZ = 15,
  BS = 16,
  BH = 17,
  BD = 18,
  BB = 19,
  BY = 20,
  BE = 21,
  BZ = 22,
  BJ = 23,
  BM = 24,
  BT = 25,
  BO = 26,
  BQ = 27,
  BA = 28,
  BW = 29,
  BV = 30,
  BR = 31,
  IO = 32,
  VG = 33,
  BN = 34,
  BG = 35,
  BF = 36,
  BI = 37,
  KH = 38,
  CM = 39,
  CA = 40,
  CV = 41,
  KY = 42,
  CF = 43,
  TD = 44,
  CL = 45,
  CN = 46,
  CX = 47,
  CC = 48,
  CO = 49,
  KM = 50,
  CK = 51,
  CR = 52,
  HR = 53,
  CU = 54,
  CW = 55,
  CY = 56,
  CZ = 57,
  CD = 58,
  DK = 59,
  DJ = 60,
  DM = 61,
  DO = 62,
  TL = 63,
  EC = 64,
  EG = 65,
  SV = 66,
  GQ = 67,
  ER = 68,
  EE = 69,
  ET = 70,
  FK = 71,
  FO = 72,
  FJ = 73,
  FI = 74,
  FR = 75,
  GF = 76,
  PF = 77,
  TF = 78,
  GA = 79,
  GM = 80,
  GE = 81,
  DE = 82,
  GH = 83,
  GI = 84,
  GR = 85,
  GL = 86,
  GD = 87,
  GP = 88,
  GU = 89,
  GT = 90,
  GG = 91,
  GN = 92,
  GW = 93,
  GY = 94,
  HT = 95,
  HM = 96,
  HN = 97,
  HK = 98,
  HU = 99,
  IS = 100,
  IN = 101,
  ID = 102,
  IR = 103,
  IQ = 104,
  IE = 105,
  IM = 106,
  IL = 107,
  IT = 108,
  CI = 109,
  JM = 110,
  JP = 111,
  JE = 112,
  JO = 113,
  KZ = 114,
  KE = 115,
  KI = 116,
  XK = 117,
  KW = 118,
  KG = 119,
  LA = 120,
  LV = 121,
  LB = 122,
  LS = 123,
  LR = 124,
  LY = 125,
  LI = 126,
  LT = 127,
  LU = 128,
  MO = 129,
  MK = 130,
  MG = 131,
  MW = 132,
  MY = 133,
  MV = 134,
  ML = 135,
  MT = 136,
  MH = 137,
  MQ = 138,
  MR = 139,
  MU = 140,
  YT = 141,
  MX = 142,
  FM = 143,
  MD = 144,
  MC = 145,
  MN = 146,
  ME = 147,
  MS = 148,
  MA = 149,
  MZ = 150,
  MM = 151,
  NA = 152,
  NR = 153,
  NP = 154,
  NL = 155,
  AN = 156,
  NC = 157,
  NZ = 158,
  NI = 159,
  NE = 160,
  NG = 161,
  NU = 162,
  NF = 163,
  KP = 164,
  MP = 165,
  NO = 166,
  OM = 167,
  PK = 168,
  PW = 169,
  PS = 170,
  PA = 171,
  PG = 172,
  PY = 173,
  PE = 174,
  PH = 175,
  PN = 176,
  PL = 177,
  PT = 178,
  PR = 179,
  QA = 180,
  CG = 181,
  RE = 182,
  RO = 183,
  RU = 184,
  RW = 185,
  BL = 186,
  SH = 187,
  KN = 188,
  LC = 189,
  MF = 190,
  PM = 191,
  VC = 192,
  WS = 193,
  SM = 194,
  ST = 195,
  SA = 196,
  SN = 197,
  RS = 198,
  CS = 199,
  SC = 200,
  SL = 201,
  SG = 202,
  SX = 203,
  SK = 204,
  SI = 205,
  SB = 206,
  SO = 207,
  ZA = 208,
  GS = 209,
  KR = 210,
  SS = 211,
  ES = 212,
  LK = 213,
  SD = 214,
  SR = 215,
  SJ = 216,
  SZ = 217,
  SE = 218,
  CH = 219,
  SY = 220,
  TW = 221,
  TJ = 222,
  TZ = 223,
  TH = 224,
  TG = 225,
  TK = 226,
  TO = 227,
  TT = 228,
  TN = 229,
  TR = 230,
  TM = 231,
  TC = 232,
  TV = 233,
  VI = 234,
  UG = 235,
  UA = 236,
  AE = 237,
  GB = 238,
  US = 239,
  UM = 240,
  UY = 241,
  UZ = 242,
  VU = 243,
  V = 244,
  VE = 245,
  VN = 246,
  WF = 247,
  EH = 248,
  YE = 249,
  ZM = 250,
  ZW = 251,
  UNRECOGNIZED = -1,
}

export interface Empty {
}

export interface PaginationDto {
  page: number;
  skip: number;
}

export interface FindOneUserDto {
  id: string;
}

export interface FindOneUserByPrimaryEmailAddressDto {
  primaryEmailAddress: string;
}

export interface UpdateUserDto {
  id: string;
  facebookProfile?: FacebookProfile | undefined;
  googleProfile?: GoogleProfile | undefined;
  refreshToken?: RefreshToken | undefined;
}

export interface Users {
  users: User[];
}

export interface CreateUserDto {
  primaryEmailAddress: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
}

export interface User {
  /** using uuid, hence string i.e. @PrimaryGeneratedColumn('uuid') */
  id: string;
  primaryEmailAddress: string;
  firstName: string;
  middleName?: string | undefined;
  lastName: string;
  commonName?: string | undefined;
  homeAddress?: string | undefined;
  gender?: Gender | undefined;
  dateOfBirth?: Timestamp | undefined;
  nationality?: CountryList | undefined;
  stateOfOrigin?: string | undefined;
  zip?: string | undefined;
  city?: string | undefined;
  county?: string | undefined;
  photo?: string | undefined;
  photoMimeType?: string | undefined;
  isActive?: boolean | undefined;
  isSoftDeleted?: boolean | undefined;
  backupEmailAddress: string;
  phone: { [key: string]: any } | undefined;
  isPrimaryEmailAddressVerified: boolean;
  isBackupEmailAddressVerified: boolean;
  passwordSalt?: string | undefined;
  passwordHash: string;
  isPasswordChangeRequired?: string | undefined;
  resetPasswordToken?: string | undefined;
  resetPasswordExpiration?: Timestamp | undefined;
  primaryEmailVerificationToken?: string | undefined;
  backupEmailVerificationToken?: string | undefined;
  emailVerificationTokenExpiration?: Timestamp | undefined;
  otpEnabled?: boolean | undefined;
  otpSecret?: string | undefined;
  refreshTokenHash?: string | undefined;
  refreshTokens?: RefreshToken | undefined;
  facebookProfile?: FacebookProfile | undefined;
  googleProfile?: GoogleProfile | undefined;
}

export interface RefreshToken {
  refreshTokenHash: string;
  clientDeviceFingerPrint: number;
  clientLoginInfo: { [key: string]: any } | undefined;
}

export interface FacebookProfile {
  facebookId: string;
  displayName: string;
  photos: { [key: string]: any } | undefined;
  email: string;
  gender: string;
  name: { [key: string]: any } | undefined;
  photoUrl: string;
}

export interface GoogleProfile {
  googleId: string;
  givenName: string;
  familyName: string;
  name: string;
  gender: string;
  birthdate: { [key: string]: any } | undefined;
  email: string;
  emailVerified: boolean;
  picture: string;
  profile: string;
  accessToken?: string | undefined;
  refreshToken?: string | undefined;
  exp: number;
  hd: string;
}

export const IDENTITY_PACKAGE_NAME = "identity";

wrappers[".google.protobuf.Struct"] = { fromObject: Struct.wrap, toObject: Struct.unwrap } as any;

export interface UsersServiceClient {
  createUser(request: CreateUserDto): Observable<User>;

  findAllUsers(request: Empty): Observable<Users>;

  findOneUser(request: FindOneUserDto): Observable<User>;

  updateUser(request: UpdateUserDto): Observable<User>;

  removeUser(request: FindOneUserDto): Observable<User>;

  queryUsers(request: Observable<PaginationDto>): Observable<Users>;

  findOneUserByPrimaryEmailAddress(request: FindOneUserByPrimaryEmailAddressDto): Observable<User>;
}

export interface UsersServiceController {
  createUser(request: CreateUserDto): Promise<User> | Observable<User> | User;

  findAllUsers(request: Empty): Promise<Users> | Observable<Users> | Users;

  findOneUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

  updateUser(request: UpdateUserDto): Promise<User> | Observable<User> | User;

  removeUser(request: FindOneUserDto): Promise<User> | Observable<User> | User;

  queryUsers(request: Observable<PaginationDto>): Observable<Users>;

  findOneUserByPrimaryEmailAddress(
    request: FindOneUserByPrimaryEmailAddressDto,
  ): Promise<User> | Observable<User> | User;
}

export function UsersServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      "createUser",
      "findAllUsers",
      "findOneUser",
      "updateUser",
      "removeUser",
      "findOneUserByPrimaryEmailAddress",
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = ["queryUsers"];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("UsersService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const USERS_SERVICE_NAME = "UsersService";
