export const config = provider => ({
  client: {
    id: client[provider].id,
    secret: client[provider].secret
  },
  auth: {
    tokenHost: auth[provider].tokenHost,
    tokenPath: auth[provider].tokenPath,
    authorizePath: auth[provider].authorizePath
  }
});

export const scopes = {
  github: 'repo,user'
};

const auth = {
  github: {
    tokenHost: 'https://github.com',
    tokenPath: '/login/oauth/access_token',
    authorizePath: '/login/oauth/authorize'
  }
};

const client = {
  github: {
    id: process.env.GITHUB_ID,
    secret: process.env.GITHUB_SECRET
  }
};
