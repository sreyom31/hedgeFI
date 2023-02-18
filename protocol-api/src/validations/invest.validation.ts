import z from 'zod';
import { Types } from 'mongoose';

const createInvest = z.object({
  body: z.object({
    amount_c: z.number(),
    amount_cx: z.number(),
    amount_cy: z.number(),
    amount_c_incentive: z.number(),
    network: z.string(),
  }),
});

const getInvests = z.object({
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

const getInvest = z.object({
  params: z.object({
    investId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid invest id',
      path: ['Invest Query'],
    }),
  }),
});

const updateInvest = z.object({
  params: z.object({
    investId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid invest id',
      path: ['Invest Update'],
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
      path: ['Invest Update'],
    }),
});

const deleteInvest = z.object({
  params: z.object({
    investId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid invest id',
      path: ['Invest Delete'],
    }),
  }),
});

export default {
  createInvest,
  getInvests,
  getInvest,
  updateInvest,
  deleteInvest,
};
