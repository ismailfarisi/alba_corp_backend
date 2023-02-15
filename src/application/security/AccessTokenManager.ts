export default interface AccessTokenManager {
    generate(payload: object,expiryTime:number): string;
  
    decode(accessToken: string): object | null;
  };