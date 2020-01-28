class OrderTrace {
  constructor({
    order,
    timestamp,
    inspectionQty,
    ngQty,
    okQty,
    processName,
    s3
  }) {
    this._order = order;
    this._timestamp = timestamp;
    this._inspectionQty = inspectionQty;
    this._ngQty = ngQty;
    this._okQty = okQty;
    this._processName = processName;
    this._s3 = s3;
  }

  get order() {
    return this._order;
  }
  get timestamp() {
    return this._timestamp;
  }
  get inspectionQty() {
    return this._inspectionQty;
  }
  get ngQty() {
    return this._ngQty;
  }
  get okQty() {
    return this._okQty;
  }
  get processName() {
    return this._processName;
  }
  get s3() {
    return this._s3;
  }

  static orderTraceToInstanceArray(orderTraces) {
    return orderTraces.map(orderTrace => {
      const data = {
        order: orderTrace.order,
        timestamp: orderTrace.timestamp,
        inspectionQty: orderTrace.inspectionQty,
        ngQty: orderTrace.ngQty,
        okQty: orderTrace.okQty,
        processName: orderTrace.processName,
        s3: orderTrace.s3
      };
      return new OrderTrace(data);
    });
  }
}

export default OrderTrace;
