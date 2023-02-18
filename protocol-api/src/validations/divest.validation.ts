import z from 'zod';
import { Types } from 'mongoose';

const createDivest = z.object({
  body: z.object({
    amount_c: z.number(),
    amount_cx: z.number(),
    amount_cy: z.number(),
    amount_c_incentive: z.number(),
    network: z.string(),
  }),
});

const getDivests = z.object({
  query: z
    .object({
      amount_c: z.number(),
      amount_cx: z.number(),
      amount_cy: z.number(),
      amount_c_incentive: z.number(),
      network: z.string(),
      sortBy: z.string(),
      page: z.number().int(),
      limit: z.number().int(),
    })
    .partial(),
});

const getDivest = z.object({
  params: z.object({
    divestId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid divest id',
      path: ['Divest Query'],
    }),
  }),
});

const updateDivest = z.object({
  params: z.object({
    divestId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid divest id',
      path: ['Divest Update'],
    }),
  }),
  body: z
    .object({
      amount_c: z.number(),
      amount_cx: z.number(),
      amount_cy: z.number(),
      amount_c_incentive: z.number(),
      network: z.string(),
    })
    .partial()
    .refine((body) => Object.keys(body).length > 0, {
      message: 'Need atleast one field to update',
      path: ['Divest Update'],
    }),
});

const deleteDivest = z.object({
  params: z.object({
    divestId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid divest id',
      path: ['Divest Delete'],
    }),
  }),
});

export default {
  createDivest,
  getDivests,
  getDivest,
  updateDivest,
  deleteDivest,
};
