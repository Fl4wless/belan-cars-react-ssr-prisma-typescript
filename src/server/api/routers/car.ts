import { publicProcedure } from "./../trpc";
import { createTRPCRouter } from "../trpc";
import { createCarSchema } from "../schema/car.schema";

export const carRouter = createTRPCRouter({
  addNewCar: publicProcedure
    .input(createCarSchema)
    .mutation(async ({ ctx, input }) => {
      return await ctx.prisma.car.create({
        data: { img: input.img, title: input.title },
      });
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.car.findMany();
  }),
});
