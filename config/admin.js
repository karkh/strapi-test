module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9197c6d6e0ebc2e77752f9c4a0297ac8'),
  },
});
