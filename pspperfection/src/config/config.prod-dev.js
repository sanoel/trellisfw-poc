//Production Development Values
const devtoolsPort = 8585;
const oadaDomain = process.env.REACT_APP_OADA_DOMAIN || 'https://api.pspperfection.fpad.io';
const websiteDomain = 'https://pspperfection.fpad.io:8080';
const metadata = `
	eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHA6Ly9wc3BwZXJmZWN0aW9uLmZwYWQuaW86ODA4MC9vYXV0aDIvcmVkaXJlY3QuaHRtbCJdLCJ0b2tlbl9lbmRwb2ludF9hdXRoX21ldGhvZCI6InVybjppZXRmOnBhcmFtczpvYXV0aDpjbGllbnQtYXNzZXJ0aW9uLXR5cGU6and0LWJlYXJlciIsImdyYW50X3R5cGVzIjpbImltcGxpY2l0Il0sInJlc3BvbnNlX3R5cGVzIjpbInRva2VuIiwiaWRfdG9rZW4iLCJpZF90b2tlbiB0b2tlbiJdLCJjbGllbnRfbmFtZSI6IlBzcFBlcmZlY3Rpb24iLCJjbGllbnRfdXJpIjoiaHR0cHM6Ly9mcGFkLmlvLyIsImNvbnRhY3RzIjpbIlNhbSBOb2VsIDxzYW5vZWxAcHVyZHVlLmVkdT4iXSwic29mdHdhcmVfaWQiOiJhNDM2MTMxNi03OTBhLTQ1YmMtOTU0NC1kMTFmNmFjZDE5OTEiLCJyZWdpc3RyYXRpb25fcHJvdmlkZXIiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbSIsImlhdCI6MTUwNzgyMzQ5Nn0.KGhwLGOtBsJZuuomSEfGtYTtXUgLiVdFVqGeV0Ll-q6C9AKzVHiAWaHwgfzj7gNZYsHh5d12krS0nGTzlbQHzFMXxU9zbPa6fP8UtMKt9M8V3Iz13gJZEaXm9ILupibJ0bPFSC50pmFTGDrsFjTzbBZu869TGVRXUZTuU0vuGJg
`.trim()

const defaultNewConnectionURL = 'https://api.growersync.fpad.io';

export default {
  oadaDomain,
  devtoolsPort,
  websiteDomain,
  metadata,
  defaultNewConnectionURL
}
