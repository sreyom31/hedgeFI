import z from 'zod';
import { Types } from 'mongoose';

const createAccumulate = z.object({
  body: z.object({
    splitter: z.string().trim(),
    amount_c: z.number(),
    network: z.string().trim(),
  }),
});

const getAccumulates = z.object({
  query: z
    .object({
      splitter: z.string().trim(),
      amount_c: z.number(),
      network: z.string().trim(),
      sortBy: z.string(),
      page: z.number().int(),
      limit: z.number().int(),
    })
    .partial(),
});

const getAccumulate = z.object({
  params: z.object({
    accumulateId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid accumulate id',
      path: ['Accumulate Query'],
    }),
  }),
});

const updateAccumulate = z.object({
  params: z.object({
    accumulateId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid accumulate id',
      path: ['Accumulate Update'],
    }),
  }),
  body: z
    .object({
      splitter: z.string().trim(),
      amount_c: z.number(),
      network: z.string().trim(),
    })
    .partial()
    .refine((body) => Object.keys(body).length > 0, {
      message: 'Need atleast one field to update',
      path: ['Accumulate Update'],
    }),
});

const deleteAccumulate = z.object({
  params: z.object({
    accumulateId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid accumulate id',
      path: ['Accumulate Delete'],
    }),
  }),
});

export default {
  createAccumulate,
  getAccumulates,
  getAccumulate,
  updateAccumulate,
  deleteAccumulate,
};
