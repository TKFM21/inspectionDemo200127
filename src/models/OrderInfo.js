class OrderInfo {
  constructor({
    order_no,
    date,
    item_no,
    model,
    qty,
    site
  }) {
    this._order_no = order_no;
    this._date = date;
    this._item_no = item_no;
    this._model = model;
    this._qty = qty;
    this._site = site;
  }

  get order_no() {
    return this._order_no;
  }
  get date() {
    return this._date;
  }
  get item_no() {
    return this._item_no;
  }
  get model() {
    return this._model;
  }
  get qty() {
    return this._qty;
  }
  get site() {
    return this._site;
  }
}

export default OrderInfo;
