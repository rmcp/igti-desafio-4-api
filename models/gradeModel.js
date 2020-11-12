export default (mongoose) => {
  const gradeSchema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
      min: [0],
      validade(value) {
        if (value < 0) throw new Error("Valor menor que zero nao permitido");
      },
    },
  });

  gradeSchema.set("toJSON", {
    transform: function (doc, ret, options) {
      ret.id = ret._id;
    },
  });

  const gradeModel = mongoose.model("grades", gradeSchema);

  return gradeModel;
};
