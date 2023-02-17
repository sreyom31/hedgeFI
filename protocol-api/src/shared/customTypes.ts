export type Protocol = {
  amount_c: number;
  amount_cx: number;
  amount_cy: number;
  amount_c_incentive: number;
  network: string;
  isDivest: boolean;
};

export type ProtocolUpdate = {
  amount_c?: number;
  amount_cx?: number;
  amount_cy?: number;
  amount_c_incentive?: number;
  network?: string;
  isDivest?: boolean;
};

export type User = {
  addr: string;
  amount_A: number;
  amount_B: number;
  amount_c: number;
  amount_cx: number;
  amount_cy: number;
  network: string;
};

export type UserUpdate = {
  addr?: string;
  amount_A?: number;
  amount_B?: number;
  amount_c?: number;
  amount_cx?: number;
  amount_cy?: number;
  network?: string;
};
