import { NextApiRequest } from "next";
import { withIronSession, Session } from "next-iron-session";
import { wait } from "../../src/utils/promiseUtils";

type Request = NextApiRequest & {
    session: Session
};

async function handler(req: Request, res: any) {
    await wait(3000);
    req.session.set("user", {
        username: req.body.nomeUsuario,
        email: 'admin@teste.com',
        role: 'ADMIN'
    });
    await req.session.save();
    res.send("Logged in");
}

// GERADOR DE SENHA https://1password.com/password-generator/
export default withIronSession(handler, {
    password: "Ld9sPjLLeAPpxZZp2LozKBB7XAsGYeNnfp9EjhZNZV4x",
    cookieName: '@user',
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
});
