import { withIronSession } from "next-iron-session";

function handler(req: any, res: any) {
    const user = req.session.get("user");
    console.log(user);
    res.send({ user });
}

export default withIronSession(handler, {
    password: "Ld9sPjLLeAPpxZZp2LozKBB7XAsGYeNnfp9EjhZNZV4x",
    cookieName: '@user',
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});