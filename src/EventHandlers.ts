/*
 *Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features*
 */
import {
  PoolContract,
} from "../generated/src/Handlers.gen";

import {
    Pool_ApprovalEntity,
    Pool_BurnEntity,
    Pool_ClaimEntity,
    Pool_FeesEntity,
    Pool_MintEntity,
    Pool_SwapEntity,
    Pool_SyncEntity,
    Pool_TransferEntity,
EventsSummaryEntity
} from "../generated/src/Types.gen";

export const GLOBAL_EVENTS_SUMMARY_KEY = "GlobalEventsSummary";

const INITIAL_EVENTS_SUMMARY: EventsSummaryEntity = {
  id: GLOBAL_EVENTS_SUMMARY_KEY,
    pool_ApprovalCount: BigInt(0),
    pool_BurnCount: BigInt(0),
    pool_ClaimCount: BigInt(0),
    pool_FeesCount: BigInt(0),
    pool_MintCount: BigInt(0),
    pool_SwapCount: BigInt(0),
    pool_SyncCount: BigInt(0),
    pool_TransferCount: BigInt(0),
};

    PoolContract.Approval.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PoolContract.Approval.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    pool_ApprovalCount: currentSummaryEntity.pool_ApprovalCount + BigInt(1),
  };

  const pool_ApprovalEntity: Pool_ApprovalEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      owner: event.params.owner      ,
      spender: event.params.spender      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Pool_Approval.set(pool_ApprovalEntity);
});
    PoolContract.Burn.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PoolContract.Burn.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    pool_BurnCount: currentSummaryEntity.pool_BurnCount + BigInt(1),
  };

  const pool_BurnEntity: Pool_BurnEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      sender: event.params.sender      ,
      to: event.params.to      ,
      amount0: event.params.amount0      ,
      amount1: event.params.amount1      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Pool_Burn.set(pool_BurnEntity);
});
    PoolContract.Claim.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PoolContract.Claim.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    pool_ClaimCount: currentSummaryEntity.pool_ClaimCount + BigInt(1),
  };

  const pool_ClaimEntity: Pool_ClaimEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      sender: event.params.sender      ,
      recipient: event.params.recipient      ,
      amount0: event.params.amount0      ,
      amount1: event.params.amount1      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Pool_Claim.set(pool_ClaimEntity);
});
    PoolContract.Fees.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PoolContract.Fees.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    pool_FeesCount: currentSummaryEntity.pool_FeesCount + BigInt(1),
  };

  const pool_FeesEntity: Pool_FeesEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      sender: event.params.sender      ,
      amount0: event.params.amount0      ,
      amount1: event.params.amount1      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Pool_Fees.set(pool_FeesEntity);
});
    PoolContract.Mint.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PoolContract.Mint.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    pool_MintCount: currentSummaryEntity.pool_MintCount + BigInt(1),
  };

  const pool_MintEntity: Pool_MintEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      sender: event.params.sender      ,
      amount0: event.params.amount0      ,
      amount1: event.params.amount1      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Pool_Mint.set(pool_MintEntity);
});
    PoolContract.Swap.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PoolContract.Swap.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    pool_SwapCount: currentSummaryEntity.pool_SwapCount + BigInt(1),
  };

  const pool_SwapEntity: Pool_SwapEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      sender: event.params.sender      ,
      to: event.params.to      ,
      amount0In: event.params.amount0In      ,
      amount1In: event.params.amount1In      ,
      amount0Out: event.params.amount0Out      ,
      amount1Out: event.params.amount1Out      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Pool_Swap.set(pool_SwapEntity);
});
    PoolContract.Sync.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PoolContract.Sync.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    pool_SyncCount: currentSummaryEntity.pool_SyncCount + BigInt(1),
  };

  const pool_SyncEntity: Pool_SyncEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      reserve0: event.params.reserve0      ,
      reserve1: event.params.reserve1      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Pool_Sync.set(pool_SyncEntity);
});
    PoolContract.Transfer.loader(({ event, context }) => {
  context.EventsSummary.load(GLOBAL_EVENTS_SUMMARY_KEY);
});

    PoolContract.Transfer.handler(({ event, context }) => {
  const summary = context.EventsSummary.get(GLOBAL_EVENTS_SUMMARY_KEY);

  const currentSummaryEntity: EventsSummaryEntity =
    summary ?? INITIAL_EVENTS_SUMMARY;

  const nextSummaryEntity = {
    ...currentSummaryEntity,
    pool_TransferCount: currentSummaryEntity.pool_TransferCount + BigInt(1),
  };

  const pool_TransferEntity: Pool_TransferEntity = {
    id: event.transactionHash + event.logIndex.toString(),
      from: event.params.from      ,
      to: event.params.to      ,
      value: event.params.value      ,
    eventsSummary: GLOBAL_EVENTS_SUMMARY_KEY,
  };

  context.EventsSummary.set(nextSummaryEntity);
  context.Pool_Transfer.set(pool_TransferEntity);
});
