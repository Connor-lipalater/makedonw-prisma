"use server";
import { PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
// import { prisma } from "@/server/db";

import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const insert = async (title: string) => {
  try {
    if (title) {
      await prisma.verificationToken.create({
        data: {
          identifier: title,
          token: title,
          expires: new Date(),
        },
      });
    } else {
      throw new Error("Invalid value");
    }
    revalidatePath("/getList");
  } catch (e) {
    console.log(e);
    return { error: e };
  }
};
export const deleteItem = async (token: string) => {
  try {
    if (token) {
      let res = await prisma.verificationToken.delete({
        where: {
          token: token,
        },
      });
    } else {
      throw new Error("Invalid value");
    }
    revalidatePath("/getList");
  } catch (e) {
    console.log(e);
    return { error: e };
  }
};
export const getList = async () => {
  try {
    return await prisma.verificationToken.findMany({});
  } catch (error) {
    console.log(error);
  }
};
