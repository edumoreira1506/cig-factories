import { dealFactory } from '..';

describe('dealFactory', () => {
  it('applies the id value', () => {
    const id = 'idddd';
    const deal = dealFactory({ id });

    expect(deal.id).toBe(id);
  });

  it('applies the sellerId value', () => {
    const sellerId = 'idddd';
    const deal = dealFactory({ sellerId });

    expect(deal.sellerId).toBe(sellerId);
  });

  it('applies the buyerId value', () => {
    const buyerId = 'idddd';
    const deal = dealFactory({ buyerId });

    expect(deal.buyerId).toBe(buyerId);
  });

  it('applies the advertisingId value', () => {
    const advertisingId = 'idddd';
    const deal = dealFactory({ advertisingId });

    expect(deal.advertisingId).toBe(advertisingId);
  });

  it('applies the cancelled value', () => {
    const cancelled = true;
    const deal = dealFactory({ cancelled });

    expect(deal.cancelled).toBe(cancelled);
  });

  it('applies the finished value', () => {
    const finished = true;
    const deal = dealFactory({ finished });

    expect(deal.finished).toBe(finished);
  });

  it('applies the createdAt value', () => {
    const createdAt = new Date();
    const deal = dealFactory({ createdAt });

    expect(deal.createdAt).toBe(createdAt);
  });
});
