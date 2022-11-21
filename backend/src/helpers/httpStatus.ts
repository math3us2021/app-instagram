export enum HTTP_STATUS {
  // 1XX - Informational
  CONTINUE = 100,
  SwitchingProtocols = 101,
  Processing = 102, // WebDAV

  // 2XX - Success
  OK = 200,
  CREATED = 201,
  Accepted = 202,
  NonAuthoritativeInformation = 203,
  NoContent = 204,
  ResetContent = 205,
  PartialContent = 206,
  MultiStatus = 207, // WebDAV
  AlreadyReported = 208, // WebDAV
  IMUsed = 209,

  // 3XX - Redirection
  MultipleChoices = 300,
  MovedPermanently = 301,
  Found = 302,
  SeeOther = 303,
  NOT_MODIFIED = 304,
  UseProxy = 305,
  // 306 is unused right now
  TemporaryRedirect = 307,
  PermanentRedirect = 308,

  // 4XX - Client Error
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PaymentRequired = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  MethodNotAllowed = 405,
  NotAcceptable = 406,
  ProxyAuthenticationRequired = 407,
  RequestTimeout = 408,
  CONFLICT = 409,
  Gone = 410,
  LengthRequired = 411,
  PRE_CONDITION_FAILED = 412,
  RequestEntityTooLarge = 413,
  RequestUriTooLong = 414,
  UnsupportedMediaType = 415,
  RequestedRangeNotSatisfiable = 416,
  ExpectationFailed = 417,
  Teapot = 418,
  EnhanceYourCalm = 420, // Twitter-only?
  UNPROCESSABLE_ENTITY = 422, // WebDAV
  Locked = 423, // WebDAV
  FailedDependency = 424, // WebDAV
  // 425 is Reserved for WebDAV
  UpgradeRequired = 426,
  PreconditionRequired = 428,
  TooManyRequests = 429,
  RequestHeaderFieldsTooLarge = 431,
  NoResponse = 444, // Nginx only
  RetryWith = 449, // Microsoft only
  BlockedByWindowsParentalControls = 450, // Microsoft only
  UnavailableForLegalReasons = 451,
  ClientClosedRequest = 499, // Nginx only

  // 5XX - Server Error
  INTERNAL_SERVER_ERROR = 500,
  NotImplemented = 501,
  BadGateway = 502,
  SERVICE_UNAVAILABLE = 503,
  GatewayTimeout = 504,
  HttpVersionNotSupported = 505,
  VariantAlsoNegotiates = 506,
  InsufficientStorage = 507, // WebDAV
  LoopDetected = 508, // WebDAV
  BandwidthLimitExceeded = 509, // Apache
  NotExtended = 510,
  NetworkAuthenticationRequired = 511,
  NetworkReadTimeoutError = 598, // Proxy
  NetworkConnectTimeoutError = 599, // Proxy
}
