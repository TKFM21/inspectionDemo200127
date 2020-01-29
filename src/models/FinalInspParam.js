class FinalInspParam {
  constructor({
    message,
    answer,
    select
  }) {
    this._message = message;
    this._answer = answer;
    this._select = select;
  }

  get message() {
    return this._message;
  }
  get answer() {
    return this._answer;
  }
  get select() {
    return this._select;
  }

  static finalInspParamsToInstanceArray(finalInspParams) {
    return finalInspParams.map(finalInspParam => {
      const data = {
        message: finalInspParam.message,
        answer: finalInspParam.answer,
        select: finalInspParam.select
      };
      return new FinalInspParam(data);
    });
  }
}

export default FinalInspParam;
