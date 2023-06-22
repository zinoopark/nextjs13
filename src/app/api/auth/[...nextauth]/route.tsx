import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
// import AppleProvider from "next-auth/providers/apple";
import KakaoProvider from "next-auth/providers/kakao";
// import CoinbaseProvider from "next-auth/providers/coinbase";
// import RedditProvider from "next-auth/providers/reddit";
import FacebookProvider from "next-auth/providers/facebook";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID ?? "",
    //   clientSecret: process.env.APPLE_SECRET ?? ""
    // }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? ""
    }),
    // CoinbaseProvider({
    //   clientId: process.env.COINBASE_CLIENT_ID,
    //   clientSecret: process.env.COINBASE_CLIENT_SECRET
    // }),
    // RedditProvider({
    //   clientId: process.env.REDDIT_CLIENT_ID ?? "",
    //   clientSecret: process.env.REDDIT_CLIENT_SECRET ?? "",
    //   authorization: {
    //     params: {
    //       duration: "permanent"
    //     }
    //   }
    // }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? ""
    })
    // TODO CredentialsProvider 추가하고 prisma 설치하기
  ]
});

export { handler as GET, handler as POST };