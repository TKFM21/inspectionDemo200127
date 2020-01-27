class ModelParam {
  constructor({
    model,
    voltage,
    a_lower,
    a_upper,
    speed_lower,
    speed_upper,
    created_at,
    updated_at
  }) {
    this._model = model;
    this._voltage = voltage;
    this._a_lower = a_lower;
    this._a_upper = a_upper;
    this._speed_lower = speed_lower;
    this._speed_upper = speed_upper;
    this._createdAt = new Date(created_at);
    this._updatedAt = new Date(updated_at);
  }

  get model() {
    return this._model;
  }
  get voltage() {
    return this._voltage;
  }
  get a_lower() {
    return this._a_lower;
  }
  get a_upper() {
    return this._a_upper;
  }
  get speed_lower() {
    return this._speed_lower;
  }
  get speed_upper() {
    return this._speed_upper;
  }
  get createdAt() {
    return this._createdAt;
  }
  get updatedAt() {
    return this._updatedAt;
  }

  set voltage(value) {
    this._voltage = value;
  }
  set a_lower(value) {
    this._a_lower = value;
  }
  set a_upper(value) {
    this._a_upper = value;
  }
  set speed_lower(value) {
    this._speed_lower = value;
  }
  set speed_upper(value) {
    this._speed_upper = value;
  }

  static modelParamsToInstanceArray(modelParams) {
    return modelParams.map(modelParam => {
      const data = {
        model: modelParam.model,
        voltage: modelParam.voltage,
        a_lower: modelParam.a_lower,
        a_upper: modelParam.a_upper,
        speed_lower: modelParam.speed_lower,
        speed_upper: modelParam.speed_upper,
        createdAt: modelParam.createdAt,
        updatedAt: modelParam.updatedAt
      };
      return new ModelParam(data);
    });
  }
}

export default ModelParam;
