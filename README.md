# Apply Manual

## Routes

- POST - `/user/sign-up`

```bash
{
    "name": "YOUR_FULL_NAME",
    "email": "YOUR_EMAIL_ADDRESS",
    "password": "YOUR_STRONG_PASSWORD",
    "confirmPassword": "YOUR_STRONG_PASSWORD",
    "avatar": "AVATAR_LINK_OR_AVATAR_UPLOAD",
    "phone": "+88_YOUR_PHONE_NUMBER",
}
```

- POST - `/user/sign-in`

```bash
{
    "email": "YOUR_EMAIL_ADDRESS",
    "password": "YOUR_STRONG_PASSWORD"
}
```

- PATCH - `/user/reset-password`

```bash
{
    "email": "YOUR_EMAIL_ADDRESS",
    "password": "NEW_PASSWORD"
}
```

- GET - `/user/myself`

  - Persist user login
  - Require JWT token

- GET - `/user/all-users`

  - Display all users
  - Require JWT token
  - Only admin can control

- DELETE - `/remove-user?id=SINGLE_USER_ID_FROM_DB`

  - Remove an user
  - Require JWT token
  - Only admin can control

## Ownership

> Follow `.env.example` and `rename` it to `.env`

```bash
git clone https://github.com/hasibulislam999/user-boilerplate.git
cd user-boilerplate
yarn install
```
