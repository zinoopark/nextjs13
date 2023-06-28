import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {

  const body: RequestBody = await request.json();

  const user = await prisma.user.create({
        data: {
          name: body.name,
          email: body.email,
          password: await bcrypt.hash(body.password, 10)
        } as any
        // todo fix this any
      }
    )
  ;

  const { password, ...result } = user as any;
  return new Response(JSON.stringify(result));

}