import assert = require("assert")
import { MockDb, Pool } from "../generated/src/TestHelpers.gen";
import {
  EventsSummaryEntity,
  Pool_ApprovalEntity,
} from "../generated/src/Types.gen";

import { Addresses } from "../generated/src/bindings/Ethers.bs";

import { GLOBAL_EVENTS_SUMMARY_KEY } from "../src/EventHandlers";


const MOCK_EVENTS_SUMMARY_ENTITY: EventsSummaryEntity = {
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

describe("Pool contract Approval event tests", () => {
  // Create mock db
  const mockDbInitial = MockDb.createMockDb();

  // Add mock EventsSummaryEntity to mock db
  const mockDbFinal = mockDbInitial.entities.EventsSummary.set(
    MOCK_EVENTS_SUMMARY_ENTITY
  );

  // Creating mock Pool contract Approval event
  const mockPoolApprovalEvent = Pool.Approval.createMockEvent({
    owner: Addresses.defaultAddress,
    spender: Addresses.defaultAddress,
    value: 0n,
    mockEventData: {
      chainId: 1,
      blockNumber: 0,
      blockTimestamp: 0,
      blockHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      srcAddress: Addresses.defaultAddress,
      transactionHash: "0x0000000000000000000000000000000000000000000000000000000000000000",
      transactionIndex: 0,
      logIndex: 0,
    },
  });

  // Processing the event
  const mockDbUpdated = Pool.Approval.processEvent({
    event: mockPoolApprovalEvent,
    mockDb: mockDbFinal,
  });

  it("Pool_ApprovalEntity is created correctly", () => {
    // Getting the actual entity from the mock database
    let actualPoolApprovalEntity = mockDbUpdated.entities.Pool_Approval.get(
      mockPoolApprovalEvent.transactionHash +
        mockPoolApprovalEvent.logIndex.toString()
    );

    // Creating the expected entity
    const expectedPoolApprovalEntity: Pool_ApprovalEntity = {
      id:
        mockPoolApprovalEvent.transactionHash +
        mockPoolApprovalEvent.logIndex.toString(),
      owner: mockPoolApprovalEvent.params.owner,
      spender: mockPoolApprovalEvent.params.spender,
      value: mockPoolApprovalEvent.params.value,
      eventsSummary: "GlobalEventsSummary",
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualPoolApprovalEntity, expectedPoolApprovalEntity, "Actual PoolApprovalEntity should be the same as the expectedPoolApprovalEntity");
  });

  it("EventsSummaryEntity is updated correctly", () => {
    // Getting the actual entity from the mock database
    let actualEventsSummaryEntity = mockDbUpdated.entities.EventsSummary.get(
      GLOBAL_EVENTS_SUMMARY_KEY
    );

    // Creating the expected entity
    const expectedEventsSummaryEntity: EventsSummaryEntity = {
      ...MOCK_EVENTS_SUMMARY_ENTITY,
      pool_ApprovalCount: MOCK_EVENTS_SUMMARY_ENTITY.pool_ApprovalCount + BigInt(1),
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualEventsSummaryEntity, expectedEventsSummaryEntity, "Actual PoolApprovalEntity should be the same as the expectedPoolApprovalEntity");
  });
});
