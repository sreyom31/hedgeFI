export type Accumulate = {
  splitter: string;
  amount_c: number;
  network: string;
};

export type AccumulateUpdate = {
  splitter?: string;
  amount_c?: number;
  network?: string;
};

export type Invest = {
  amount_c: number;
  amount_cx: number;
  amount_cy: number;
  amount_c_incentive: number;
  network: string;
};

export type InvestUpdate = {
  amount_c?: number;
  amount_cx?: number;
  amount_cy?: number;
  amount_c_incentive?: number;
  network?: string;
};

export type Divest = {
  amount_c: number;
  amount_cx: number;
  amount_cy: number;
  amount_c_incentive: number;
  network: string;
};

export type DivestUpdate = {
  amount_c?: number;
  amount_cx?: number;
  amount_cy?: number;
  amount_c_incentive?: number;
  network?: string;
};

export type Claim = {
  addr: string;
  amount_A: number;
  amount_B: number;
  amount_c: number;
  amount_cx: number;
  amount_cy: number;
  network: string;
};

export type ClaimUpdate = {
  addr?: string;
  amount_A?: number;
  amount_B?: number;
  amount_c?: number;
  amount_cx?: number;
  amount_cy?: number;
  network?: string;
};
