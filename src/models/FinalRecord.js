class FinalRecord {
  constructor({
    order,
    timestamp,
    judge,
    model
  }) {
    this._order = order;
    this._timestamp = timestamp;
    this._judge = judge;
    this._model = model;
  }

  get order() {
    return this._order;
  }
  get timestamp() {
    return this._timestamp;
  }
  get judge() {
    return this._judge;
  }
  get model() {
    return this._model;
  }

  static finalRecordToInstanceArray(finalRecords) {
    return finalRecords.map(finalRecord => {
      const data = {
        order: finalRecord.order,
        timestamp: finalRecord.timestamp,
        judge: finalRecord.judge,
        model: finalRecord.model
      };
      return new FinalRecord(data);
    });
  }
}

export default FinalRecord;