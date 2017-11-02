//Production Development Values
const devtoolsPort = 8585;
const oadaDomain = process.env.REACT_APP_OADA_DOMAIN || 'https://api.pspperfection.trellisfw.io';
const websiteDomain = 'https://certificationanalytics.trellisfw.io:8080';
const metadata = require('./proddev_metadata');
/*`
eyJqa3UiOiJodHRwczovL2lkZW50aXR5Lm9hZGEtZGV2LmNvbS9jZXJ0cyIsImtpZCI6ImtqY1NjamMzMmR3SlhYTEpEczNyMTI0c2ExIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJyZWRpcmVjdF91cmlzIjpbImh0dHBzOi8vY2VydGlmaWNhdGlvbmFuYWx5dGljcy5mcGFkLmlvOjgwODAvb2F1dGgyL3JlZGlyZWN0Lmh0bWwiXSwidG9rZW5fZW5kcG9pbnRfYXV0aF9tZXRob2QiOiJ1cm46aWV0ZjpwYXJhbXM6b2F1dGg6Y2xpZW50LWFzc2VydGlvbi10eXBlOmp3dC1iZWFyZXIiLCJncmFudF90eXBlcyI6WyJpbXBsaWNpdCJdLCJyZXNwb25zZV90eXBlcyI6WyJ0b2tlbiIsImlkX3Rva2VuIiwiaWRfdG9rZW4gdG9rZW4iXSwiY2xpZW50X25hbWUiOiJDZXJ0aWZpY2F0aW9uQW5hbHl0aWNzIiwiY2xpZW50X3VyaSI6Imh0dHBzOi8vZnBhZC5pby8iLCJjb250YWN0cyI6WyJTYW0gTm9lbCA8c2Fub2VsQHB1cmR1ZS5lZHU-Il0sInNvZnR3YXJlX2lkIjoiMDQ1Y2UyOWEtOWY1OC00NDcxLWJiYzgtOWExYzZlYWY3MzJiIiwicmVnaXN0cmF0aW9uX3Byb3ZpZGVyIjoiaHR0cHM6Ly9pZGVudGl0eS5vYWRhLWRldi5jb20iLCJpYXQiOjE1MDc4MjgxMTJ9.0qpUcT2-adigHn41uuy0SbdrRJpBhVUpeCz-ZhWU1sZZes460UtTbJftVv7POwYbpDR4uNUS9wgYmVkL7759EhSRWV82oF421O88iMPHhSTGJoEX5QScjA0eTx_XKDzoutMpCAZLX5qNYzmE_plLDlvEFH-nnnhd_vWgr8ZklOs
`.trim()*/

const defaultNewConnectionURL = 'https://api.pspperfection.trellisfw.io';

export default {
  oadaDomain,
  devtoolsPort,
  websiteDomain,
  metadata,
  defaultNewConnectionURL
}
