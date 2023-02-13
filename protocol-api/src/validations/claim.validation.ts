import z from 'zod';
import { Types } from 'mongoose';

const createClaim = z.object({
  body: z.object({
    claimant: z.string().trim(),
    amount_A: z.number(),
    amount_B: z.number(),
    amount_c: z.number(),
    amount_cx: z.number(),
    amount_cy: z.number(),
  }),
});

const getClaims = z.object({
  query: z
    .object({
      claimant: z.string().trim(),
      amount_A: z.number(),
      amount_B: z.number(),
      amount_c: z.number(),
      amount_cx: z.number(),
      amount_cy: z.number(),
      sortBy: z.string(),
      page: z.number().int(),
      limit: z.number().int(),
    })
    .partial(),
});

const getClaim = z.object({
  params: z.object({
    investId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid invest id',
      path: ['Invest Query'],
    }),
  }),
});

const updateClaim = z.object({
  params: z.object({
    claimId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid claim id',
      path: ['Claim Update'],
    }),
  }),
  body: z
    .object({
      claimant: z.string().trim(),
      amount_A: z.number(),
      amount_B: z.number(),
      amount_c: z.number(),
      amount_cx: z.number(),
      amount_cy: z.number(),
    })
    .partial()
    .refine((body) => Object.keys(body).length > 0, {
      message: 'Need atleast one field to update',
      path: ['Claim Update'],
    }),
});

const deleteClaim = z.object({
  params: z.object({
    claimId: z.string().refine((id) => Types.ObjectId.isValid(id), {
      message: 'Invalid claim id',
      path: ['Claim Delete'],
    }),
  }),
});

export default { createClaim, getClaims, getClaim, updateClaim, deleteClaim };
