
import { sign } from 'jsonwebtoken';
// tạo một jwt với account id
const JWT_EXPIRES_TIME = 7 * 24 * 3600 * 1000; // 7 days (by sec)
const encodedToken = async (secretKey: any, user: any, expire = JWT_EXPIRES_TIME) => {
  return await sign(
    {
      iss: process.env.JWT_ISS,
      sub: user,
    },
    secretKey,
    { expiresIn: expire },
  );
};
export default encodedToken;