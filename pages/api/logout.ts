import { withIronSession } from "next-iron-session";

function handler(req: any, res: any) {
    req.session.destroy();
    res.send("Logged out");
}

export default withIronSession(handler, {
    password: "Ld9sPjLLeAPpxZZp2LozKBB7XAsGYeNnfp9EjhZNZV4x",
    cookieName: '@user',
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});
